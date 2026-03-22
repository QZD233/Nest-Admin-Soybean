# Coolify 单机部署改造 Spec

## 背景
- 仓库已经迁移到 pnpm monorepo：核心应用位于 `apps/server` 与 `apps/web`。
- 现有部署文档仍大量停留在旧目录结构与 PM2 / Nginx 手工部署思路，缺少可直接被 Coolify 消费的根级编排入口。
- 部署闭环还存在实际阻塞项：后端构建报错、前端缺少专用部署模式、容器健康检查与首次初始化流程未标准化。

## 目标
- 提供一个以仓库根目录为入口的 Coolify 单机部署方案，默认编排 `web + server + postgres + redis`。
- 保持业务 API、数据库 schema 与现有功能行为不变，只补齐部署、构建与运行时缺陷。
- 让前端通过同域访问后端，部署产物默认走 `/api/v1`，避免写死外部 API 域名。
- 提供一次性的基础数据初始化方式，首次部署可用，后续重启不会重复 seed。

## 非目标
- 不重构业务模块边界。
- 不扩展完整 CI/CD 发布流水线。
- 不做整仓旧文档的全面清理，只修正本次部署链路相关内容。

## 验收标准
- `pnpm --filter @nest-admin/server build` 成功。
- `pnpm --filter @nest-admin/web build:coolify` 成功。
- `docker compose build server web` 成功。
- `docker compose up -d` 在无端口冲突时可拉起整栈；若主机端口占用，支持通过 `WEB_PORT` 覆盖。
- 同源请求 `GET /api/v1/health/ready` 返回 `200`。
- 首次执行 `pnpm run prisma:seed:only` 后，`/api/v1/auth/tenant/list`、`/api/v1/auth/login` 可用，管理员账号可登录。
- 单独重启 `server` 不会自动重复 seed，数据库与 Redis 数据保持。
