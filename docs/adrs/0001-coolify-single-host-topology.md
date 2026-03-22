# ADR 0001: Coolify 单机部署拓扑

## Status
Accepted

## Context
- 仓库已迁移为 pnpm monorepo，部署入口需要从旧的分散式脚本切换到根目录统一编排。
- 目标部署平台是 Coolify，优先级是“同仓一键部署”和“单机依赖自托管”。
- 系统首次可用性依赖 PostgreSQL、Redis 和基础种子数据。

## Decision
- 官方生产拓扑采用单机 `web + server + postgres + redis`。
- Coolify 直接消费仓库根级 `docker-compose.yml`。
- 前端以 Nginx 提供静态资源，并通过同域 `/api/v1` 访问后端。
- 后端启动只执行 `prisma migrate deploy`，不自动 seed。
- 首次初始化通过同一后端镜像显式执行 `pnpm run prisma:seed:only`。

## Consequences
- 单机部署简单、路径统一，适合 Coolify 的可视化操作。
- 同域代理避免了前端构建写死外部 API 域名。
- 首次部署需要额外执行一次 seed，但后续重启与更新更安全。
- `WEB_PORT` 需要按环境可配置，避免本地或目标主机端口冲突。
