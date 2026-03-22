# Coolify 单机部署改造 Acceptance

## 自动化验证
- `pnpm --filter @nest-admin/server build`
  - 结果：通过。
- `pnpm --filter @nest-admin/web build:coolify`
  - 结果：通过。
- `docker compose build server web`
  - 结果：通过。
  - 备注：`web` 构建阶段显式使用 `NODE_OPTIONS=--max-old-space-size=4096`，避免 Vite 在容器内 OOM。

## 手工验收
- `docker compose up -d`
  - 结果：`server` 可健康启动；`web` 默认端口 `3000` 在当前机器被占用。
  - 处理：使用 `WEB_PORT=3300 docker compose up -d web` 完成验证。
- `GET http://127.0.0.1:3300/`
  - 结果：返回前端 `index.html`。
- `GET http://127.0.0.1:3300/home`
  - 结果：返回前端 `index.html`，确认 history 路由刷新可用。
- `GET http://127.0.0.1:3300/api/v1/health/ready`
  - 结果：返回 `200`，确认同域 API 代理正常。
- `GET http://127.0.0.1:3300/public/openApi.json`
  - 结果：返回 `200`，确认 `/public` 代理正常。
- `docker compose exec -T server pnpm run prisma:seed:only`
  - 结果：成功导入基础数据。
- `GET http://127.0.0.1:3300/api/v1/auth/tenant/list`
  - 结果：返回默认租户 `000000`。
- 登录验证
  - 先调用 `/api/v1/auth/code` 获取验证码与 UUID，再从 Redis 读取验证码值完成本地验收。
  - `POST http://127.0.0.1:3300/api/v1/auth/login`
  - 结果：管理员账号 `admin / admin123` 登录成功并返回 token。
- `docker compose restart server`
  - 结果：服务恢复健康。
  - 证据：启动日志显示执行 migration 与缓存预热，没有再次执行 seed。

## 已知环境因素
- 当前机器的 `3000` 端口已被其他进程占用，因此 `web` 验证使用 `WEB_PORT=3300`。
- 这不是仓库配置错误；生产环境或 Coolify 中可通过 `WEB_PORT` 覆盖默认端口。
