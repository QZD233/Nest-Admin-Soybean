# GitHub CI/CD Acceptance

## 交付结果
- 已新增 `.github/workflows/ci.yml`
- 已新增 `.github/workflows/cd.yml`
- 已新增 `docs/deployment/github-actions.md`

## 静态验证
- `pnpm --filter @nest-admin/server build`
  - 结果：通过。
- `pnpm --filter @nest-admin/web build:coolify`
  - 结果：通过。
- `docker compose build server web`
  - 结果：通过。
- `actionlint .github/workflows/ci.yml .github/workflows/cd.yml`
  - 结果：通过。

## 说明
- 本地无法直接替代 GitHub 执行真实的 workflow run，因此发布到 GHCR 与触发 Coolify webhook 的部分仅做静态配置与语法验证。
- CD 依赖 GitHub Environment Secret `COOLIFY_DEPLOY_WEBHOOK`；未配置时会跳过触发部署步骤。
