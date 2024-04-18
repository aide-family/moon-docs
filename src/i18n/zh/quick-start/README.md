---
title: 快速开始
description: 快速开始
lang: zh-CN
icon: launch
---

::: tip
服务初始化默认用户名和密码如下，后续可通过修改密码功能修改

用户名: `admin`  密码:  `123456`
:::

## docker 部署

### 环境准备

1. Docker环境，参考[Docker安装](https://docs.docker.com/engine/install/)
2. （可选）Docker-compose环境，参考[Docker-compose安装](https://docs.docker.com/compose/install/)

### 拉取镜像

::: code-tabs#shell

@tab 拉取moon-server镜像

```shell
docker pull aidemoonio/moon-server:latest
```

@tab 拉取moon-agent镜像

```shell
docker pull aidemoonio/moon-agent:latest
```

:::

### 启动服务

::: code-tabs#shell

@tab 启动moon-server

```shell
docker run -d --name moon-server \
-p 8001:8000 \
-p 8888:8888 \
-p 8000:80 \
-v ./moon/server/db:/app/db \
-v ./moon/server/cache:/app/cache \
-v ./moon/server/log:/app/log \
aidemoonio/moon-server:latest 
```

@tab 启动moon-agent

```shell
docker run -d --name moon-agent \
-p 8002:8000 \
-v ./moon/agent/cache:/app/cache \
-v ./moon/agent/log:/app/log \
aidemoonio/moon-agent:latest
```

:::

### 访问服务

本地访问moon-server所在的宿主机IP：http://<宿主机IP>:8000/

## docker-compose 部署

### 创建文件

```yaml
# docker-compose.yaml
version: "3.8"
services:
  moon-server:
    image: aidemoonio/moon-server:latest
    volumes:
      - "./moon/server/db:/app/db"
      - "./moon/server/cache:/app/cache"
      - "./moon/server/log:/app/log"
    ports:
      - "8000:80"
      - "8001:8000"
      - "8888:8888"
  moon-agent:
    image: aidemoonio/moon-agent:latest
    volumes:
      - "./moon/agent/cache:/app/cache"
      - "./moon/agent/log:/app/log"
    ports:
      - "8002:8000"
    depends_on:
      - moon-server
```

### 启动服务

```shell
docker-compose up -d
```

### 访问服务

本地访问moon-server所在的宿主机IP：http://<宿主机IP>:8000/

## kubernetes 部署

### 下载moon.yaml

[moon.yaml](https://github.com/aide-family/moon/blob/main/_output/yamls/moon.yaml)

### kubectl apply

```shell
kubectl apply -f ./moon.yaml
```

### 访问服务

服务端口通过NodePort暴露

本地访问moon-server所在的宿主机IP：http://<宿主机IP>:31008/

