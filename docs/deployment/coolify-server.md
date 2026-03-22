# Coolify 服务器安装

## 官方安装方式
根据 Coolify 官方文档，当前推荐的自托管安装命令是：

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
```

如果你已经是 `root` 用户：

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

官方说明里当前默认访问地址示例是：

```text
http://<server-ip>:8000
```

注意：
- Ubuntu 自动安装脚本推荐用于 LTS 版本，例如 20.04 / 22.04 / 24.04
- 最好使用全新服务器
- Docker Snap 版本不受支持

## 服务器要求
- SSH 可登录
- 建议 2 Core / 2 GB RAM / 30 GB 磁盘以上
- 建议开放端口：`22`、`80`、`443`、`8000`

## 远程安装脚本
仓库已提供：

[`scripts/install-coolify-remote.sh`](/Users/mac/Documents/project/nest-admin/scripts/install-coolify-remote.sh)

示例：

```bash
ROOT_USERNAME=admin \
ROOT_USER_EMAIL=admin@example.com \
ROOT_USER_PASSWORD='StrongPass123!' \
scripts/install-coolify-remote.sh 203.0.113.10 root 22
```

如果远程用户不是 `root`，脚本会尝试使用 `sudo -E`。

## 与 GitHub Actions 对接
完整 CD 推荐配置以下 GitHub Environment Secret：

```text
COOLIFY_DEPLOY_WEBHOOK
COOLIFY_TOKEN
```

说明：
- `COOLIFY_DEPLOY_WEBHOOK`：来自 Coolify 资源页面的 Webhook
- `COOLIFY_TOKEN`：Coolify API Token

当前仓库的 `cd.yml` 会：
- 推送 `server` / `web` 镜像到 GHCR
- 若存在 `COOLIFY_DEPLOY_WEBHOOK`，则调用 webhook
- 若同时存在 `COOLIFY_TOKEN`，则自动带上 `Authorization: Bearer <token>`

## 我这边还缺什么
要让我直接帮你把服务器装好，还需要你提供：
- 服务器公网 IP / 域名
- SSH 用户名
- SSH 端口
- 登录方式：密码或私钥

拿到这些后，我就可以直接从这台机器发起安装。
