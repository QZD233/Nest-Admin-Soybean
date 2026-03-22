---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Nest-Admin-Soybean"
  text: "企业级全栈管理系统"
  tagline: 基于 NestJS + Vue3 + Prisma 的开箱即用解决方案
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 项目介绍
      link: /guide/introduction
    - theme: alt
      text: 在线演示
      link: http://your-demo-url.com

features:
  - icon: 🚀
    title: 开箱即用
    details: 完整的前后端代码，配套的开发文档，5分钟快速启动项目
    link: /guide/quick-start
    
  - icon: 🏢
    title: 多租户架构
    details: 内置多租户数据隔离，支持 SaaS 模式，灵活的租户管理
    link: /guide/multi-tenant
    
  - icon: 🔐
    title: 完善的权限系统
    details: 基于 RBAC 的权限控制，支持菜单、按钮级别的细粒度权限
    link: /guide/rbac
    
  - icon: 🎭
    title: 演示账户系统
    details: 内置演示账户，52个只读权限，安全可靠的在线演示方案
    link: /features/demo-account
    
  - icon: 🔒
    title: 请求加密
    details: AES + RSA 混合加密，保护敏感数据传输安全
    link: /guide/encryption
    
  - icon: 📊
    title: 日志监控
    details: 结构化日志系统，支持 Pino 日志，完整的操作审计
    link: /guide/logging
    
  - icon: 🎨
    title: 现代化前端
    details: Vue3 + Vite + Naive UI + UnoCSS，优雅的用户界面
    link: /development/frontend-architecture
    
  - icon: ⚡
    title: 高性能后端
    details: NestJS + Prisma + PostgreSQL，企业级性能保障
    link: /development/backend-architecture
    
  - icon: 📦
    title: 自动化部署
    details: GitHub Actions + GHCR + Coolify，校验与部署链路一体化
    link: /deployment/overview
    
  - icon: 🛠️
    title: 开发工具
    details: 完善的开发工具链，代码生成，热重载，开发体验极佳
    link: /development/getting-started
    
  - icon: 📖
    title: 详细文档
    details: 从入门到精通的完整文档，适合新手学习和项目实战
    link: /guide/introduction
    
  - icon: 🎯
    title: 持续优化
    details: 持续的性能优化和安全加固，可靠的生产级应用
    link: /optimization/overview
---

## 技术栈

### 后端技术

- **框架**: NestJS 10.4+ - 企业级 Node.js 框架
- **数据库**: PostgreSQL 14+ - 关系型数据库
- **ORM**: Prisma 5.22+ - 类型安全的 ORM
- **缓存**: Redis 7+ - 高性能缓存
- **认证**: JWT + Passport - 安全认证方案

### 前端技术

- **框架**: Vue 3.5+ - 渐进式前端框架
- **构建**: Vite 7+ - 极速构建工具
- **UI**: Naive UI - 现代化组件库
- **样式**: UnoCSS - 即时原子化 CSS
- **状态**: Pinia - 轻量级状态管理

## 快速开始

```bash
# 克隆项目
git clone https://github.com/linlingqin77/Nest-Admin-Soybean.git
cd Nest-Admin-Soybean

# 安装依赖
pnpm install

# 初始化数据库
cd server
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed

# 启动后端
pnpm start:dev

# 启动前端 (新终端)
cd admin-naive-ui
pnpm dev
```

访问 `http://localhost:9527` 查看应用

## 演示账户

体验系统功能无需注册，使用演示账户即可登录：

- **账号**: `demo`
- **密码**: `demo123`
- **租户ID**: `000000`

演示账户具有 52 个只读权限，可以查看系统各个模块，但无法进行增删改操作。

## 开源协议

本项目基于 [MIT License](https://github.com/linlingqin77/Nest-Admin-Soybean/blob/main/LICENSE) 开源协议。
