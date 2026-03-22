# ADR 0002: GitHub Actions CI/CD 对接 Coolify

## Status
Accepted

## Context
- 当前官方部署方式已切换为 Docker / Compose + Coolify。
- 仓库缺少实际可用的 GitHub Actions workflow。
- 需要同时覆盖代码质量门禁与主分支部署触发。

## Decision
- CI 使用 GitHub Actions 校验后端构建、前端 Coolify 构建与 Compose 镜像构建。
- CD 在 `main` / `main-refactor` 推送时将 `server` / `web` 镜像发布到 GHCR。
- 若 GitHub Environment Secret `COOLIFY_DEPLOY_WEBHOOK` 存在，则在镜像发布后触发 Coolify 部署。
- `main` 绑定 `production` 环境，`main-refactor` 绑定 `staging` 环境。

## Consequences
- GitHub Actions 与现有部署形态保持一致，不需要回退到 PM2。
- GHCR 产物可用于审计、回滚与多环境复用。
- Coolify 触发依赖环境密钥配置，仓库本身不包含敏感信息。
