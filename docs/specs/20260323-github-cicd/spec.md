# GitHub CI/CD Spec

## 背景
- 仓库已经具备根级 Docker / Compose 部署能力，但还没有真正提交到仓库的 GitHub Actions workflow。
- 文档侧已经预留了 GitHub Actions 入口，实际页面与工作流仍缺失。
- 需要一套和当前 Coolify 单机部署架构兼容的 CI/CD 方案，而不是继续沿用旧的 PM2 思路。

## 目标
- 提供一套可直接提交到仓库的 GitHub Actions CI/CD。
- CI 负责校验当前 monorepo 的核心交付链路：后端构建、前端 Coolify 构建、Docker 镜像构建。
- CD 负责在主分支推送时发布 `server` / `web` 镜像到 GHCR，并支持通过 webhook 触发 Coolify 部署。
- 补齐对应文档与交付包。

## 非目标
- 不在本次实现里直接接管远端数据库迁移审批或生产密钥管理。
- 不依赖仓库内硬编码私密信息。

## 验收标准
- 仓库新增 `.github/workflows/ci.yml` 与 `.github/workflows/cd.yml`。
- workflow 语法可通过静态检查。
- 文档新增 GitHub Actions 部署页面，明确说明需要的 GitHub Secrets / Environments。
- CI 步骤与当前仓库实际命令保持一致，不调用会改写文件的 lint 命令。
