# GitHub Actions CI/CD

## 目标
- CI：校验当前 monorepo 的核心交付链路
- CD：推送 Docker 镜像到 GHCR，并按需触发 Coolify 部署

## Workflow

### CI
文件：`.github/workflows/ci.yml`

执行内容：

```bash
pnpm install --frozen-lockfile
pnpm --filter @nest-admin/server prisma:generate
pnpm --filter @nest-admin/server build
NODE_OPTIONS=--max-old-space-size=4096 pnpm --filter @nest-admin/web build:coolify
docker compose build server web
```

触发分支：
- `main`
- `main-refactor`
- `develop`
- 指向 `main` / `main-refactor` 的 Pull Request

### CD
文件：`.github/workflows/cd.yml`

执行内容：
- 构建并推送 `server` 镜像到 GHCR
- 构建并推送 `web` 镜像到 GHCR
- 如果配置了 Coolify webhook，则触发部署

触发方式：
- `CI` workflow 在 `main` / `main-refactor` 成功完成后自动触发
- 也支持手动 `workflow_dispatch`

镜像标签：
- `${sha}`
- `${branch}-latest`

## GitHub Environments

推荐创建两个 Environment：
- `production`
- `staging`

分支映射：
- `main` -> `production`
- `main-refactor` -> `staging`

## Secrets

### 必需
GHCR 推送默认使用 `GITHUB_TOKEN`，不需要额外 secret，但仓库需要允许 Actions 写 Packages。

### 可选
如果要自动触发 Coolify，请在对应 Environment 中配置：

```text
COOLIFY_DEPLOY_WEBHOOK
COOLIFY_TOKEN
```

说明：
- `COOLIFY_DEPLOY_WEBHOOK`：Coolify 资源 Webhook 地址
- `COOLIFY_TOKEN`：Coolify API Token

未配置 `COOLIFY_DEPLOY_WEBHOOK` 时，CD 会只发布镜像，不触发 Coolify。

## GHCR 镜像地址

```text
ghcr.io/<github-owner>/nest-admin-server
ghcr.io/<github-owner>/nest-admin-web
```

## 注意事项
- CI 没有直接调用仓库自带的 `lint --fix`，避免 workflow 修改代码。
- 前端构建显式设置了 `NODE_OPTIONS=--max-old-space-size=4096`，避免 Actions / Docker 内存不足导致 Vite OOM。
- 如果 Coolify 仍使用 Git 仓库直连自动部署，也可以只使用 CI，把 CD 中 webhook 保持为空。
