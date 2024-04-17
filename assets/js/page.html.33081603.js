"use strict";(self.webpackChunkmoon_docs=self.webpackChunkmoon_docs||[]).push([[335],{2242:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>m,data:()=>u});var n=a(641),o=a(33),l=a(953);const r=(0,n.Lk)("p",null,[(0,n.eW)("Content before "),(0,n.Lk)("code",null,"more"),(0,n.eW)(" comment is regarded as page excerpt.")],-1),i=(0,n.Fv)('<h2 id="page-title" tabindex="-1"><a class="header-anchor" href="#page-title"><span>Page Title</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>You can also set title in Markdown&#39;s Frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Page Title</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information"><span>Page Information</span></a></h2><p>You can set page information in Markdown&#39;s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content"><span>Page Content</span></a></h2><p>You are free to write your Markdown here.</p><div class="hint-container tip"><p class="hint-container-title">Assets</p><ul><li>You can place images besides your Markdown files nd use <strong>relative links</strong>.</li><li>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: starting with <code>/</code>).</li></ul></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><p>Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:</p><p>2</p>',13),s=(0,n.Lk)("p",null,"You can also create and import your own components.",-1),p=(0,n.Lk)("hr",null,null,-1),d=(0,n.Lk)("p",null,"The theme contains some useful components. Here are some examples:",-1),c=(0,n.Lk)("p",null,"A card:",-1),m={__name:"page.html",setup(e){const t=(0,n.pM)({setup(){const e=(0,l.KR)("Hello world!"),t=t=>{e.value=t.target.value};return()=>[(0,n.h)("p",[(0,n.h)("span","Input: "),(0,n.h)("input",{value:e.value,onInput:t})]),(0,n.h)("p",[(0,n.h)("span","Output: "),e.value])]}});return(e,a)=>{const m=(0,n.g2)("Badge"),u=(0,n.g2)("VPCard");return(0,n.uX)(),(0,n.CE)("div",null,[r,(0,n.Q3)(" more "),i,(0,n.Q3)(" markdownlint-disable MD033 "),(0,n.Lk)("ul",null,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(3,(e=>(0,n.Lk)("li",null,(0,o.v_)(e),1))),64))]),(0,n.Q3)(" markdownlint-enable MD033 "),s,(0,n.bF)((0,l.R1)(t)),p,d,(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.eW)("A dark blue badge text badge at the end of line. "),(0,n.bF)(m,{text:"Badge text",color:"#242378"})])]),(0,n.Lk)("li",null,[c,(0,n.bF)(u,(0,o._B)((0,n.Ng)({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}}},u=JSON.parse('{"path":"/demo/page.html","title":"Page Config","lang":"en-US","frontmatter":{"title":"Page Config","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true,"footer":"Footer content for test","copyright":"No Copyright","description":"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown\'s Frontmatt...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/demo/page.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/page.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"Page Config"}],["meta",{"property":"og:description","content":"Content before more comment is regarded as page excerpt. Page Title The first H1 title in Markdown will be regarded as page title. You can also set title in Markdown\'s Frontmatt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-17T09:33:24.000Z"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"Page config"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T09:33:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page Config\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-17T09:33:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"Page Title","slug":"page-title","link":"#page-title","children":[]},{"level":2,"title":"Page Information","slug":"page-information","link":"#page-information","children":[]},{"level":2,"title":"Page Content","slug":"page-content","link":"#page-content","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]}],"git":{"createdTime":1713346404000,"updatedTime":1713346404000,"contributors":[{"name":"梧桐","email":"1058165620@qq.com","commits":1}]},"readingTime":{"minutes":1.14,"words":341},"filePathRelative":"demo/page.md","localizedDate":"January 1, 2020","autoDesc":true}')},4547:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>m,data:()=>u});var n=a(641),o=a(33),l=a(953);const r=(0,n.Lk)("p",null,[(0,n.Lk)("code",null,"more"),(0,n.eW)(" 注释之前的内容被视为文章摘要。")],-1),i=(0,n.Fv)('<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 页面标题</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>',14),s=(0,n.Lk)("p",null,"你也可以创建并引入你自己的组件。",-1),p=(0,n.Lk)("hr",null,null,-1),d=(0,n.Lk)("p",null,"主题包含一些有用的组件。这里是一些例子:",-1),c=(0,n.Lk)("p",null,"一个卡片:",-1),m={__name:"page.html",setup(e){const t=(0,n.pM)({setup(){const e=(0,l.KR)("Hello world!"),t=t=>{e.value=t.target.value};return()=>[(0,n.h)("p",[(0,n.h)("span","输入: "),(0,n.h)("input",{value:e.value,onInput:t})]),(0,n.h)("p",[(0,n.h)("span","输出: "),e.value])]}});return(e,a)=>{const m=(0,n.g2)("Badge"),u=(0,n.g2)("VPCard");return(0,n.uX)(),(0,n.CE)("div",null,[r,(0,n.Q3)(" more "),i,(0,n.Q3)(" markdownlint-disable MD033 "),(0,n.Lk)("ul",null,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(3,(e=>(0,n.Lk)("li",null,(0,o.v_)(e),1))),64))]),(0,n.Q3)(" markdownlint-enable MD033 "),s,(0,n.bF)((0,l.R1)(t)),p,d,(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("p",null,[(0,n.eW)("文字结尾应该有深蓝色的 徽章文字 徽章。 "),(0,n.bF)(m,{text:"徽章文字",color:"#242378"})])]),(0,n.Lk)("li",null,[c,(0,n.bF)(u,(0,o._B)((0,n.Ng)({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}}},u=JSON.parse('{"path":"/zh/demo/page.html","title":"页面配置","lang":"zh-CN","frontmatter":{"title":"页面配置","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权","description":"more 注释之前的内容被视为文章摘要。 页面标题 The first H1 title in Markdown will be regarded as page title. Markdown 中的第一个 H1 标题会被视为页面标题。 你可以在 Markdown 的 Frontmatter 中设置页面标题。 页面信息 你可以在 Markdown 的 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/page.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/demo/page.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"页面配置"}],["meta",{"property":"og:description","content":"more 注释之前的内容被视为文章摘要。 页面标题 The first H1 title in Markdown will be regarded as page title. Markdown 中的第一个 H1 标题会被视为页面标题。 你可以在 Markdown 的 Frontmatter 中设置页面标题。 页面信息 你可以在 Markdown 的 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-17T09:33:24.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"页面配置"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"页面配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-17T09:33:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面配置\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-17T09:33:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"页面标题","slug":"页面标题","link":"#页面标题","children":[]},{"level":2,"title":"页面信息","slug":"页面信息","link":"#页面信息","children":[]},{"level":2,"title":"页面内容","slug":"页面内容","link":"#页面内容","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]}],"git":{"createdTime":1713346404000,"updatedTime":1713346404000,"contributors":[{"name":"梧桐","email":"1058165620@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"zh/demo/page.md","localizedDate":"2020年1月1日","autoDesc":true}')}}]);