---
home: true
icon: home
title: Project home
heroImage: /logo.svg
# bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
# bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Moon monitoring system
tagline: Moon is a monitoring management tool integrated with the prometheus family, designed to simplify the operation and maintenance of the Prometheus monitoring system. The tool provides a one-stop solution to centrally manage and configure multiple Prometheus instances and their associated service discovery, rule sets, and alert notifications.
actions:
  - text: Quick start
    icon: lightbulb
    link: ./demo/
    type: primary

  - text: Sample address
    link: https://prometheus.aide-cloud.cn

highlights:
  - header: Easy to install
    image: /assets/image/box.svg
    # bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    # bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: Run <code>docker pull aidemoonio/moon-server:latest</code> pull moon-server image.
      - title: Run <code>docker pull aidemoonio/moon-agent:latest</code> pull moon-agent image.
      - title: run <code>docker run -d --name moon-server -p 8001:8000 -p 8888:8888 -p 8000:80 -v ./moon/server/db:/app/db -v ./moon/server/cache:/app/cache -v ./moon/server/log:/app/log aidemoonio/moon-server:latest </code> start moon-server.
      - title: Run <code>docker run -d --name moon-agent -p 8002:8000 -v ./moon/agent/cache:/app/cache -v ./moon/agent/log:/app/log aidemoonio/moon-agent:latest </code> start moon-agent.

  - header: Things you might want to know about Moon
    description: Starting with Prometheus and ending with Prometheus, the Moon Monitoring System provides you with an all-in-one monitoring management tool.
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: Monitor dashboard
        icon: clipboard-check
        details: Configure the grafana link to generate a custom platter
        link: https://theme-hope.vuejs.press/guide/markdown/others.html#link-check

      - title: System management
        icon: box-archive
        details: Provides complete system management with RBAC permission control
        link: https://theme-hope.vuejs.press/guide/markdown/hint.html

      - title: Real-time alarm
        icon: bell
        details: This section displays real-time alarms generated in various fields
        link: https://theme-hope.vuejs.press/zh/guide/markdown/alert.html

      - title: Alarm history
        icon: table-columns
        details: Display alarm history, query the full life cycle of an alarm, and trace the causes and consequences of an alarm
        link: https://theme-hope.vuejs.press/zh/guide/markdown/tabs.html

      - title: Policy Group (Rule Group)
        icon: code
        details: Easily manage monitoring policies with a unified rule management approach
        link: https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html

      - title: Alarm policy (Rule)
        icon: align-center
        details: Configure alarm rules, support prom QL expression intelligent prompt, and syntax verification
        link: https://theme-hope.vuejs.press/zh/guide/markdown/align.html

      - title: Data source
        icon: code
        details: The system supports multi-source alarms, such as prometheus, victoriametrics, etc
        link: https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html

      - title: Alarm group
        icon: superscript
        details: Your notification object unified management function
        link: https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html

      - title: Robot (hook)
        icon: quote-left
        details: Support a variety of types of robots, such as enterprise wechat, Nail, fly book, wechat, custom hook, etc
        link: https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html

      - title: More
        icon: ellipsis
        details: Permission control, user management, global dictionary, etc
        link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

  - header: Features
    image: /assets/image/features.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
    features:
      - title: multi-tenant
        icon: circle-info
        details: The system will have multi-tenant function and support multi-tenant management, and each tenant can manage data independently
        link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html
      - title: Support for more data sources
        icon: copy
        details: For example, loki, elasticsearch, etc
        link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

      - title: kubernetes multi-cluster management
        icon: lock
        details: Supports kubernetes multi-cluster management for easy cluster management
        link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

      - title: kubernetes cluster monitoring
        icon: image
        details: Manage kubernetes clusters as you would a normal cluster
        link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

  - header: One-stop monitoring solution
    description: With this project, you can easily manage multiple Prometheus instances and their associated service discovery, completion rule sets, and alert notifications
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

  - header: Advanced
    description: Template syntax, components, apis, etc
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: Custom data source types
        icon: dumbbell
        details: Can support a variety of types of data sources, the implementation of the data source interface
        link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

      - title: Alarm notification template customization
        icon: sitemap
        details: Allows the use of custom templates, custom alarm notification content
        link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

      - title: Custom agent implementations are allowed
        icon: rss
        details: Custom agent implementation is allowed to implement custom alarm notification and rule receiving logic
        link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

      - title: Multi-terminal adaptation
        icon: mobile-screen
        details: Make your website more like an APP
        link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

copyright: false
footer: Use <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> theme | MIT protocol, copyright © 2019-present Mr.Hope
