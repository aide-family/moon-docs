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

- [Moon-Server](../server/): `Moon-Server`是Moon的监控数据存储和计算组件，负责接收监控数据，并计算出监控指标。
- [Moon-Agent](../server/agent/): `Moon-Agent`是`Moon`的监控采集组件，负责收集监控数据，并上报到`Moon-Server`。
- [Kubemoon](../server/kubemoon/): `Kubemoon`是`Moon`的`Kubernetes`统一管理组件，负责管理`Kubernetes`集群。