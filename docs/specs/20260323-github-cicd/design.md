# GitHub CI/CD Design

## CI 设计
- 触发条件：`push` 到 `main` / `main-refactor` / `develop`，以及指向 `main` / `main-refactor` 的 PR。
- 关键步骤：
  - `pnpm install --frozen-lockfile`
  - `pnpm --filter @nest-admin/server prisma:generate`
  - `pnpm --filter @nest-admin/server build`
  - `NODE_OPTIONS=--max-old-space-size=4096 pnpm --filter @nest-admin/web build:coolify`
  - `docker compose build server web`
- 不使用仓库现有 `lint --fix` 脚本，避免 CI 修改工作区。

## CD 设计
- 触发条件：`push` 到 `main` / `main-refactor`，以及手动 `workflow_dispatch`。
- 发布方式：
  - 使用 `docker/build-push-action` 构建并推送 `apps/server/Dockerfile` 与 `apps/web/Dockerfile` 到 GHCR。
  - 标签策略：`${sha}` 与 `${branch}-latest`。
- 部署方式：
  - 若 GitHub Environment 中存在 `COOLIFY_DEPLOY_WEBHOOK`，则发布镜像后调用 webhook。
  - `main` 默认映射到 `production` 环境，`main-refactor` 默认映射到 `staging` 环境。

## 机密与环境
- GitHub Actions 不在仓库内存储任何明文 secret。
- GHCR 推送使用 `GITHUB_TOKEN` 与 `packages: write` 权限。
- Coolify webhook 通过 GitHub Environment Secret `COOLIFY_DEPLOY_WEBHOOK` 提供。
