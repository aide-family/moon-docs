"use strict";(self.webpackChunkmoon_docs=self.webpackChunkmoon_docs||[]).push([[2470],{6262:(n,t)=>{t.A=(n,t)=>{const e=n.__vccOpts||n;for(const[n,s]of t)e[n]=s;return e}},8464:(n,t,e)=>{e.r(t),e.d(t,{comp:()=>h,data:()=>L});var s=e(641);const a=(0,s.Fv)('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以使用如下语法完成告警模板，高度自定义你的告警内容。</p></div><h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法"><span>模板语法</span></a></h2><div class="language-tpl line-numbers-mode" data-ext="tpl" data-title="tpl"><pre class="language-tpl"><code>告警状态: {{ .Status }}\n告警标签: {{ .Labels }}\n\t机器实例: {{ .Labels.instance }}\n\t告警规则名称: {{ .Labels.alertname }}\n告警内容: {{ .Annotations }}\n\t告警描述: {{ .Annotations.summary }}\n\t告警详情: {{ .Annotations.description }}\n告警时间: {{ .StartsAt }}\n恢复时间: {{ .EndsAt }}\n链接地址: {{ .GeneratorURL }}\n告警指纹: {{ .Fingerprint }}\n当前值: {{ .Value }}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),i={class:"hint-container note"},o=(0,s.Lk)("p",{class:"hint-container-title"},"注",-1),l=(0,s.Lk)("code",null,"Labels",-1),r=(0,s.Lk)("code",null,"Annotations",-1),c=(0,s.Lk)("code",null,"map[string]string",-1),p=(0,s.Lk)("code",null,".Labels.xxx",-1),d=(0,s.Lk)("code",null,".Annotations.xxx",-1),u=(0,s.Lk)("code",null,"{{ .Labels }}",-1),m=(0,s.Lk)("code",null,"{{ .Annotations }}",-1),g=(0,s.Lk)("code",null,"json",-1),v={href:"https://golang.org/pkg/text/template/",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Fv)('<h2 id="模板原始数据" tabindex="-1"><a class="header-anchor" href="#模板原始数据"><span>模板原始数据</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>AlertBo <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n\t\tStatus       <span class="token builtin">string</span>                <span class="token string">`json:&quot;status&quot;`</span>\n\t\tLabels       <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>     <span class="token string">`json:&quot;labels&quot;`</span>\n\t\tAnnotations  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>     <span class="token string">`json:&quot;annotations&quot;`</span>\n\t\tStartsAt     <span class="token builtin">string</span>                <span class="token string">`json:&quot;startsAt&quot;`</span>\n\t\tEndsAt       <span class="token builtin">string</span>                <span class="token string">`json:&quot;endsAt&quot;`</span>\n\t\tGeneratorURL <span class="token builtin">string</span>                <span class="token string">`json:&quot;generatorURL&quot;`</span>\n\t\tFingerprint  <span class="token builtin">string</span>                <span class="token string">`json:&quot;fingerprint&quot;`</span>\n\t\tValue        <span class="token builtin">float64</span>               <span class="token string">`json:&quot;value&quot;`</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),k={},h=(0,e(6262).A)(k,[["render",function(n,t){const e=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[a,(0,s.Lk)("div",i,[o,(0,s.Lk)("p",null,[(0,s.eW)("模板支持的变量，如下，其中"),l,(0,s.eW)("和"),r,(0,s.eW)("都是"),c,(0,s.eW)("类型， 所以可以通过"),p,(0,s.eW)("或者"),d,(0,s.eW)("来获取对应的值，具体有哪些变量，可以查看具体指标的原始数据， 例如："),u,(0,s.eW)(", "),m,(0,s.eW)(", 此用法会返回原始数据"),g,(0,s.eW)("格式. 关于Go语言模板语法，可以参考："),(0,s.Lk)("a",v,[(0,s.eW)("Go语言模板语法"),(0,s.bF)(e)])])]),b])}]]),L=JSON.parse('{"path":"/i18n/zh/guide/user/monitor/hook-template.html","title":"告警模板","lang":"zh-CN","frontmatter":{"title":"告警模板","order":2,"description":"提示 你可以使用如下语法完成告警模板，高度自定义你的告警内容。 模板语法 注 模板支持的变量，如下，其中Labels和Annotations都是map[string]string类型， 所以可以通过.Labels.xxx或者.Annotations.xxx来获取对应的值，具体有哪些变量，可以查看具体指标的原始数据， 例如：{{ .Labels }}, ...","head":[["meta",{"property":"og:url","content":"https://aide-family.github.io/i18n/zh/guide/user/monitor/hook-template.html"}],["meta",{"property":"og:site_name","content":"Moon监控使用文档"}],["meta",{"property":"og:title","content":"告警模板"}],["meta",{"property":"og:description","content":"提示 你可以使用如下语法完成告警模板，高度自定义你的告警内容。 模板语法 注 模板支持的变量，如下，其中Labels和Annotations都是map[string]string类型， 所以可以通过.Labels.xxx或者.Annotations.xxx来获取对应的值，具体有哪些变量，可以查看具体指标的原始数据， 例如：{{ .Labels }}, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-26T09:25:08.000Z"}],["meta",{"property":"article:author","content":"梧桐"}],["meta",{"property":"article:modified_time","content":"2024-04-26T09:25:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"告警模板\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-26T09:25:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"梧桐\\",\\"url\\":\\"https://github.com/aide-cloud\\",\\"email\\":\\"aidecloud@163.com\\"}]}"]]},"headers":[{"level":2,"title":"模板语法","slug":"模板语法","link":"#模板语法","children":[]},{"level":2,"title":"模板原始数据","slug":"模板原始数据","link":"#模板原始数据","children":[]}],"git":{"createdTime":1714123439000,"updatedTime":1714123508000,"contributors":[{"name":"梧桐","email":"1058165620@qq.com","commits":2}]},"readingTime":{"minutes":0.81,"words":244},"filePathRelative":"i18n/zh/guide/user/monitor/hook-template.md","localizedDate":"2024年4月26日","autoDesc":true}')}}]);