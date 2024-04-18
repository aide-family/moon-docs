---
home: true
icon: home
title: 项目主页
heroImage: /logo.svg
# bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Moon 监控系统
tagline: Moon 是一款集成prometheus系列的监控管理工具，专为简化Prometheus监控系统的运维工作而设计。该工具提供了一站式的解决方案，能够集中管理和配置多个Prometheus实例及其相关的服务发现、规则集和警报通知。

actions:
  - text: 快速开始
    icon: lightbulb
    link: ./demo/
    type: primary

  - text: 示例地址
    link: https://prometheus.aide-cloud.cn
    

highlights:
  - header: 易于安装
    image: /assets/image/box.svg
    # bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 运行 <code>docker pull aidemoonio/moon-server:latest</code> 拉取 moon-server 镜像。
      - title: 运行 <code>docker pull aidemoonio/moon-agent:latest</code> 拉取 moon-agent 镜像。
      - title: 运行 <code>docker run -d --name moon-server -p 8001:8000 -p 8888:8888 -p 8000:80 -v ./moon/server/db:/app/db -v ./moon/server/cache:/app/cache -v ./moon/server/log:/app/log aidemoonio/moon-server:latest </code> 启动 moon-server。
      - title: 运行 <code>docker run -d --name moon-agent -p 8002:8000 -v ./moon/agent/cache:/app/cache -v ./moon/agent/log:/app/log aidemoonio/moon-agent:latest </code> 启动 moon-agent。

  - header: 在 Moon 中你可能想要了解的内容
    description: 始于Prometheus，不止于Prometheus，Moon 监控系统， 为你提供一个一体化的监控管理工具。
    # image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 监控大盘
        icon: clipboard-check
        details: 配置 grafana 链接, 生成自定义大盘
        link: https://theme-hope.vuejs.press/zh/guide/markdown/others.html#link-check

      - title: 系统管理
        icon: box-archive
        details: 提供完整的系统管理，使用 RBAC 权限控制
        link: https://theme-hope.vuejs.press/zh/guide/markdown/hint.html

      - title: 实时告警
        icon: bell
        details: 这里会展示各个领域下实时产生的告警
        link: https://theme-hope.vuejs.press/zh/guide/markdown/alert.html

      - title: 告警历史
        icon: table-columns
        details: 展示告警历史，查询告警完整生命周期，回溯告警前因后果
        link: https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html

      - title: 策略组（规则组）
        icon: code
        details: 使用统一的规则管理方式， 轻松管理监控策略
        link: https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html

      - title: 告警策略（规则）
        icon: align-center
        details: 配置告警规则，支持prom QL 表达式智能提示，语法校验
        link: https://theme-hope.vuejs.press/zh/guide/markdown/align.html

      - title: 数据源
        icon: code
        details: 系统支持多数据源告警，例如prometheus、victoriametrics等
        link: https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html

      - title: 告警组
        icon: superscript
        details: 你的通知对象统一管理功能
        link: https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html

      - title: 机器人（hook）
        icon: quote-left
        details: 支持多种类型机器人，例如企业微信、钉钉、飞书、微信、自定义hook等
        link: https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html

      - title: 更多
        icon: ellipsis
        details: 权限控制，用户管理，全局字典等
        link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

  - header: 新功能
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: 多租户
        icon: circle-info
        details: 系统将具备多租户功能，支持多租户管理，每个租户可以独立管理数据
        link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

      - title: kubernetes 多集群管理
        icon: lock
        details: 支持 kubernetes 多集群管理， 轻松管理集群
        link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

      - title: 支持更多数据源
        icon: copy
        details: 例如 loki、elasticsearch 等
        link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

      - title: kubernetes 集群监控
        icon: image
        details: 像管理普通的集群一样，管理 kubernetes 集群
        link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

  - header: 一站式监控解决方案
    description: 通过该项目， 轻松管理多个Prometheus实例及其相关的服务发现、完成规则集和警报通知
    image: /assets/image/blog.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    # highlights:
      # - title: 博客功能
      #   icon: blog
      #   details: 通过文章的日期、标签和分类展示文章
      #   link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

      # - title: 博客主页
      #   icon: home
      #   details: 全新博客主页
      #   link: https://theme-hope.vuejs.press/zh/guide/blog/home.html

      # - title: 博主信息
      #   icon: home
      #   details: 自定义名称、头像、座右铭和社交媒体链接
      #   link: https://theme-hope.vuejs.press/zh/guide/blog/blogger.html

      # - title: 时间线
      #   icon: home
      #   details: 在时间线中浏览和通读博文
      #   link: https://theme-hope.vuejs.press/zh/guide/blog/timeline.html

  - header: 高级
    description: 模板语法、组件、API 等
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: 自定义数据源类型
        icon: dumbbell
        details: 可以支持多种类型数据源，实现数据源的接口即可
        link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

      - title: 告警通知模板自定义
        icon: sitemap
        details: 允许使用自定义模板，自定义告警通知内容
        link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

      - title: 允许自定义agent实现
        icon: rss
        details: 允许自定义agent实现，实现自定义告警通知和规则接收逻辑
        link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

      - title: 多端适配
        icon: mobile-screen
        details: 让你的网站更像一个 APP
        link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

copyright: false
footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-present Mr.Hope
