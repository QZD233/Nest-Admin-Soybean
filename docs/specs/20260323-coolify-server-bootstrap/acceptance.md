# Coolify 服务器安装 Acceptance

## 已完成
- 已新增 `scripts/install-coolify-remote.sh`
- 已新增 `docs/deployment/coolify-server.md`
- 已更新 `cd.yml` 支持 `COOLIFY_DEPLOY_WEBHOOK` 与 `COOLIFY_TOKEN`

## 当前阻塞
- 当前工作区没有可发现的 SSH 服务器目标。
- 当前机器没有 `gh` CLI，也无法直接代替用户配置 GitHub Environment Secret。

## 后续执行所需最小信息
- 服务器公网 IP 或域名
- SSH 用户名
- SSH 端口
- 认证方式：密码或私钥
- 是否要在安装 Coolify 时直接创建管理员账号
