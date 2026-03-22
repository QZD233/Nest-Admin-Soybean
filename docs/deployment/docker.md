# Docker / Coolify 部署

## 概览
- 官方部署入口：仓库根目录的 `docker-compose.yml`
- 官方拓扑：`web + server + postgres + redis`
- 前端同域访问后端：`/api/v1`
- Swagger 地址：`/api/swagger-ui`
- 健康检查地址：`/api/v1/health/ready`

## 目录与入口
- 后端应用：`apps/server`
- 前端应用：`apps/web`
- 后端镜像：`apps/server/Dockerfile`
- 前端镜像：`apps/web/Dockerfile`
- Compose 环境模板：`.env.coolify.example`

## 环境变量
Coolify 推荐在项目环境变量里配置以下字段：

```env
POSTGRES_DB=nest_admin
POSTGRES_USER=postgres
POSTGRES_PASSWORD=change-me
REDIS_PASSWORD=change-me
JWT_SECRET=change-me
FILE_DOMAIN=https://your-domain.com
WEB_PORT=3000
```

可选字段：

```env
REDIS_DB=0
LOG_LEVEL=info
CLIENT_DEFAULT_ID=pc
CLIENT_DEFAULT_GRANT_TYPE=password
CRYPTO_ENABLED=false
```

## 本地验证
```bash
docker compose build server web
docker compose up -d
```

如果 `3000` 端口被占用：

```bash
WEB_PORT=3300 docker compose up -d web
```

## 首次部署
1. 在 Coolify 中选择根目录 `docker-compose.yml` 作为部署入口。
2. 配置环境变量。
3. 部署完成后，打开终端执行一次基础数据初始化：

```bash
docker compose exec -T server pnpm run prisma:seed:only
```

在 Coolify 中，可直接在 `server` 服务终端执行相同命令。

## 验证清单
```bash
curl http://127.0.0.1:${WEB_PORT:-3000}/api/v1/health/ready
curl http://127.0.0.1:${WEB_PORT:-3000}/api/v1/auth/tenant/list
curl http://127.0.0.1:${WEB_PORT:-3000}/public/openApi.json
```

## 说明
- `server` 启动时只会执行 `prisma migrate deploy`，不会自动 seed。
- 首次 seed 之后，单独重启 `server` 不会重复导入基础数据。
- `apps/web/.env.coolify` 已将前端 API 基地址固定为 `/api/v1`，适配当前后端版本路由。
