# Coolify 单机部署改造 Design

## 总体方案
- 根目录新增 `docker-compose.yml`，作为 Coolify 直接消费的官方部署入口。
- `apps/server/Dockerfile` 使用 monorepo 根上下文构建后端镜像，容器启动时只执行 `prisma migrate deploy` 与应用启动。
- `apps/web/Dockerfile` 生成静态产物并通过 Nginx 提供服务。
- Nginx 透明转发 `/api/`、`/profile/`、`/public/` 到 `server`；前端部署模式直接请求 `/api/v1`。

## 关键实现
- 后端修复构建与运行时问题：
  - 修复 `job.service.ts` logger 类型错误。
  - 修复 `user-crud.service.ts` 部门查询类型不匹配。
  - 修复 `tracing.service.ts` 对 OpenTelemetry `Resource` 的旧用法。
  - 修复事务 host 运行时注入：统一使用 `@InjectTransactionHost()`。
  - 修复日志模块导出与 `StructuredLoggerService` 的可选参数注入。
  - 修复软删除扩展白名单，把没有 `delFlag` 的模型移出。
  - 修复匿名访问 metadata key 与健康检查实际路径不一致的问题。
- 前端新增 `build:coolify` 与 `.env.coolify`：
  - 默认基地址为 `/api/v1`。
  - 默认关闭请求加密，避免首次部署时前后端密钥不一致导致登录失败。
  - 修复少量直接依赖 `VITE_SERVICE_BASE_URL` 的页面，确保部署模式也能访问 Swagger 与文件下载。
- 根级部署配置：
  - 默认暴露 `WEB_PORT=3000`，可通过环境变量覆盖。
  - 标准化最低必填变量：`POSTGRES_DB`、`POSTGRES_USER`、`POSTGRES_PASSWORD`、`REDIS_PASSWORD`、`JWT_SECRET`、`FILE_DOMAIN`。
  - 后端显式覆盖 `DB_HOST=postgres`、`REDIS_HOST=redis`、`DB_SSL=false`、`LOG_TO_FILE=false`。

## 首次初始化策略
- 常规启动不自动 seed。
- 首次部署后通过同一后端镜像执行 `pnpm run prisma:seed:only`。
- 验证完成后，后续仅重启服务不会重复导入基础数据。
