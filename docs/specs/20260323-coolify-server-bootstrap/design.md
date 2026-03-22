# Coolify 服务器安装 Design

## 方案
- 使用官方安装脚本 `https://cdn.coollabs.io/coolify/install.sh` 作为唯一安装入口。
- 根级脚本 `scripts/install-coolify-remote.sh` 通过 SSH 在远程主机执行安装。
- 若提供 `ROOT_USERNAME`、`ROOT_USER_EMAIL`、`ROOT_USER_PASSWORD`，则在安装阶段直接创建首个管理员。
- 若远程用户不是 `root`，脚本会自动尝试以 `sudo -E` 执行。

## 范围
- 本次只交付自动化脚本与文档。
- 不在无 SSH 凭据的情况下猜测服务器地址或擅自操作外部资源。

## 与 CI/CD 的衔接
- GitHub Actions CD 使用 GHCR 发布镜像。
- 部署触发优先采用 Coolify webhook。
- 若配置了 `COOLIFY_TOKEN`，CD 使用 Bearer Token 认证触发部署。
