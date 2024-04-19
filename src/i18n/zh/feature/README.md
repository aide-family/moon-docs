---
title: Moon监控系统
description: 描述各模块的功能
lang: zh-CN
icon: feature
---

## Moon是什么？

一款始于`prometheus`，不止于`prometheus`的一站式监控系统， 专为简化云原生监控的运维工作而设计， 旨在帮助企业快速部署云原生监控系统， 降低运维成本， 提升运维效率。

## 它有些什么？

Moon包含如下子服务：

- [Moon-Server](../server/server/): 是`Moon`的监控管理组件，负责接收监控告警数据，维护监控规则，和`web`端交互等。
- [Moon-Agent](../server/agent/): 是`Moon`的监控告警判断组件，负责判断规则是否告警，并上报到`Moon-Server`。
- [Kubemoon(开发中)](../server/kubemoon/): `Kubemoon`是`Moon`的`Kubernetes`统一管理组件，负责管理`Kubernetes`集群， 衔接`Moon`和`Kubernetes`， 完成统一监控告警规则， 统一监控告警数据， 统一监控告警通知。

<Catalog />
