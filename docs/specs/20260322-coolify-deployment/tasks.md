# Coolify 单机部署改造 Tasks

- [x] 修复后端当前构建阻塞项。
- [x] 增加前端 `build:coolify` 部署模式与环境变量。
- [x] 重写 `apps/server/Dockerfile` 以适配 monorepo 与容器启动迁移。
- [x] 新增 `apps/web/Dockerfile` 与 Nginx 代理配置。
- [x] 新增根级 `docker-compose.yml` 与 `.env.coolify.example`。
- [x] 修复后端运行时注入、软删除白名单、匿名 metadata key、健康检查路径等部署暴露问题。
- [x] 增补 `docs/deployment/docker.md` 与相关说明。
- [x] 新增 ADR，确认官方单机部署拓扑。
- [x] 记录自动化与手工验收结果。
