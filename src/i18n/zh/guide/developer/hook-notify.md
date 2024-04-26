---
title: 自定义hook通知
order: 2
---

## Hook通知

::: tip
你可以通过hook接口，实现自定义hook通知， 或者为还没有支持的第三方插件，添加hook通知
:::

### hook接口统一定义

```go
type HookNotifyMsg struct {
	Content   string      `json:"content"`
	AlarmInfo *bo.AlertBo `json:"-"`
	Secret    string      `json:"-"`
}

type HookNotify interface {
	// Alarm 告警通知接口
	Alarm(ctx context.Context, url string, msg *HookNotifyMsg) error
}
```

## 已实现的Hook接口

::: code-tabs#go

@tab 钉钉

```go
var _ HookNotify = (*dingNotify)(nil)

type dingNotify struct{}

type DingDingHookResp struct {
	ErrCode int64  `json:"errcode"`
	ErrMsg  string `json:"errmsg"`
}

func (l *DingDingHookResp) Error() string {
	return fmt.Sprintf("errcode: %d, errmsg: %s", l.ErrCode, l.ErrMsg)
}

func (l *dingNotify) Alarm(ctx context.Context, url string, msg *HookNotifyMsg) error {
	timestamp := time.Now().UnixMilli()
	params := httpx.ParseQuery(map[string]any{
		"timestamp": timestamp,
		"sign":      l.generateSignature(timestamp, msg.Secret),
	})
	reqUrl := fmt.Sprintf("%s&%s", url, params)
	response, err := httpx.NewHttpX().POSTWithContext(ctx, reqUrl, []byte(msg.Content))
	if err != nil {
		return err
	}
	body := response.Body
	defer body.Close()
	resBytes, err := io.ReadAll(body)
	if err != nil {
		return err
	}
	log.Debugw("notify", string(resBytes))
	var dingResp DingDingHookResp
	if err = json.Unmarshal(resBytes, &dingResp); err != nil {
		return err
	}
	if dingResp.ErrCode != 0 {
		return &dingResp
	}
	return err
}

func (l *dingNotify) generateSignature(timestamp int64, secret string) string {
	message := fmt.Sprintf("%d\n%s", timestamp, secret)
	key := []byte(secret)
	h := hmac.New(sha256.New, key)
	h.Write([]byte(message))
	signature := h.Sum(nil)
	signatureBase64 := base64.StdEncoding.EncodeToString(signature)
	signatureURLEncoded := url.QueryEscape(signatureBase64)
	return signatureURLEncoded
}

func NewDingNotify() HookNotify {
	return &dingNotify{}
}
```

@tab 飞书

```go
var _ HookNotify = (*feishuNotify)(nil)

type feishuNotify struct{}

type FeiShuHookResp struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
	Data any    `json:"data"`
}

func (l *FeiShuHookResp) Error() string {
	return fmt.Sprintf("code: %d, msg: %s", l.Code, l.Msg)
}

func (l *feishuNotify) Alarm(ctx context.Context, url string, msg *HookNotifyMsg) error {
	notifyMsg := make(map[string]any)
	_ = json.Unmarshal([]byte(msg.Content), &notifyMsg)
	timeNow := time.Now()
	notifyMsg["timestamp"] = strconv.FormatInt(timeNow.Unix(), 10)
	notifyMsg["sign"] = GenSign(msg.Secret, timeNow.Unix())
	notifyMsgBytes, _ := json.Marshal(notifyMsg)
	response, err := httpx.NewHttpX().POSTWithContext(ctx, url, notifyMsgBytes)
	if err != nil {
		return err
	}
	body := response.Body
	defer body.Close()
	resBytes, err := io.ReadAll(body)
	if err != nil {
		return err
	}
	log.Debugw("notify", string(resBytes))
	var resp FeiShuHookResp
	if err = json.Unmarshal(resBytes, &resp); err != nil {
		return err
	}
	if resp.Code != 0 {
		return &resp
	}
	return err
}

func NewFeishuNotify() HookNotify {
	return &feishuNotify{}
}

func GenSign(secret string, timestamp int64) string {
	//timestamp + key 做sha256, 再进行base64 encode
	stringToSign := fmt.Sprintf("%v", timestamp) + "\n" + secret

	var data []byte
	h := hmac.New(sha256.New, []byte(stringToSign))
	_, err := h.Write(data)
	if err != nil {
		return ""
	}

	signature := base64.StdEncoding.EncodeToString(h.Sum(nil))
	return signature
}
```

@tab 企业微信

```go
var _ HookNotify = (*wechatNotify)(nil)

type wechatNotify struct{}

type WechatHookResp struct {
	ErrCode int    `json:"errcode"`
	ErrMsg  string `json:"errmsg"`
}

func (l *WechatHookResp) Error() string {
	return fmt.Sprintf("errcode: %d, errmsg: %s", l.ErrCode, l.ErrMsg)
}

func (l *wechatNotify) Alarm(ctx context.Context, url string, msg *HookNotifyMsg) error {
	response, err := httpx.NewHttpX().POSTWithContext(ctx, url, []byte(msg.Content))
	if err != nil {
		return err
	}
	body := response.Body
	defer body.Close()
	resBytes, err := io.ReadAll(body)
	if err != nil {
		return err
	}
	log.Debugw("notify", string(resBytes))
	var resp WechatHookResp
	if err = json.Unmarshal(resBytes, &resp); err != nil {
		return err
	}
	if resp.ErrCode != 0 {
		return &resp
	}
	return err
}

func NewWechatNotify() HookNotify {
	return &wechatNotify{}
}
```

@tab 第三方自定义

```go
var _ HookNotify = (*otherNotify)(nil)

type otherNotify struct{}

func (l *otherNotify) Alarm(ctx context.Context, url string, msg *HookNotifyMsg) error {
	response, err := httpx.NewHttpX().POSTWithContext(ctx, url, msg.AlarmInfo.Bytes())
	if err != nil {
		return err
	}
	body := response.Body
	defer body.Close()
	resBytes, err := io.ReadAll(body)
	if err != nil {
		return err
	}
	log.Debugw("notify", string(resBytes))
	return err
}

func NewOtherNotify() HookNotify {
	return &otherNotify{}
}
```

:::