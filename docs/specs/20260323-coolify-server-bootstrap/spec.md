# Coolify 服务器安装 Spec

## 背景
- 仓库侧 Docker / Compose 与 GitHub Actions 已经具备，但还缺少一个从本地发起的远程 Coolify 安装入口。
- 当前工作区没有现成 SSH 目标，因此无法直接在本轮完成真实服务器安装。

## 目标
- 提供一个可复用的远程安装脚本，便于拿到 SSH 信息后直接安装 Coolify。
- 增补和当前仓库一致的 Coolify 服务器安装文档。
- 明确完整 CI/CD 所需的 GitHub Secrets 与 Coolify webhook/token 配置。

## 验收标准
- 仓库新增远程安装脚本。
- 文档说明 Coolify 当前官方安装方式、默认访问端口和完整 CI/CD 所需配置。
- 明确指出实际服务器安装仍需要 SSH 目标信息。
