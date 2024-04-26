---
title: 告警模板
order: 2
---

::: tip
你可以使用如下语法完成告警模板，高度自定义你的告警内容。
:::

## 模板语法

```tpl
告警状态: {{ .Status }}
告警标签: {{ .Labels }}
	机器实例: {{ .Labels.instance }}
	告警规则名称: {{ .Labels.alertname }}
告警内容: {{ .Annotations }}
	告警描述: {{ .Annotations.summary }}
	告警详情: {{ .Annotations.description }}
告警时间: {{ .StartsAt }}
恢复时间: {{ .EndsAt }}
链接地址: {{ .GeneratorURL }}
告警指纹: {{ .Fingerprint }}
当前值: {{ .Value }}
```

::: note
  模板支持的变量，如下，其中`Labels`和`Annotations`都是`map[string]string`类型， 所以可以通过`.Labels.xxx`或者`.Annotations.xxx`来获取对应的值，具体有哪些变量，可以查看具体指标的原始数据， 例如：`{{ .Labels }}`, `{{ .Annotations }}`, 此用法会返回原始数据`json`格式.
  关于Go语言模板语法，可以参考：[Go语言模板语法](https://golang.org/pkg/text/template/)
:::

## 模板原始数据

```go
AlertBo struct {
		Status       string                `json:"status"`
		Labels       map[string]string     `json:"labels"`
		Annotations  map[string]string     `json:"annotations"`
		StartsAt     string                `json:"startsAt"`
		EndsAt       string                `json:"endsAt"`
		GeneratorURL string                `json:"generatorURL"`
		Fingerprint  string                `json:"fingerprint"`
		Value        float64               `json:"value"`
}
```