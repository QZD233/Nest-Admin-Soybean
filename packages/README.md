# Packages 目录结构说明

本项目采用 Monorepo 架构，使用 pnpm workspace 管理包依赖。

## 目录结构

```
nest-admin/
├── packages/           # 跨项目共享包
│   └── types/         # 类型定义（前后端共享）
│
├── apps/
│   ├── server/        # NestJS 后端应用
│   └── web/           # Vue3 前端应用
│       └── packages/  # 前端专用包
│           ├── axios/      # HTTP 请求封装
│           ├── hooks/      # 通用 Vue hooks
│           ├── utils/      # 工具函数
│           ├── color/      # 颜色处理
│           ├── materials/  # UI 物料组件
│           ├── scripts/    # 构建脚本
│           ├── uno-preset/ # UnoCSS 预设
│           ├── tinymce/    # 富文本编辑器
│           ├── alova/      # Alova 请求库封装
│           └── ofetch/     # ofetch 封装
```

## 包职责边界

### 根目录 `packages/`

- **@nest-admin/types**: 前后端共享的 TypeScript 类型定义
  - 通用类型（分页、响应、基础实体）
  - 枚举定义
  - 业务模块类型

### 前端专用 `apps/web/packages/`

| 包名 | 说明 | 依赖关系 |
|------|------|----------|
| @sa/axios | HTTP 请求封装 | 独立 |
| @sa/hooks | Vue 组合式函数 | 依赖 @sa/utils |
| @sa/utils | 通用工具函数 | 独立 |
| @sa/color | 颜色处理工具 | 独立 |
| @sa/materials | UI 物料组件 | 依赖 Vue |
| @sa/scripts | 构建和开发脚本 | 独立 |
| @sa/uno-preset | UnoCSS 预设配置 | 依赖 UnoCSS |
| @sa/tinymce | TinyMCE 富文本编辑器封装 | 依赖 Vue |
| @sa/alova | Alova 请求库封装 | 独立 |
| @sa/ofetch | ofetch 封装 | 独立 |

## 新增包指南

### 跨项目共享包（放入 `packages/`）

1. 前后端都需要使用的类型定义
2. 不依赖特定框架的纯工具库
3. 共享的业务逻辑

### 前端专用包（放入 `apps/web/packages/`）

1. Vue 相关的组件和 hooks
2. 前端特定的工具函数
3. UI 库的封装
4. 前端构建脚本

## 版本管理

- 所有包使用 `workspace:*` 引用
- 变更时注意依赖关系，避免循环依赖
- 共享类型包应保持向后兼容

## 构建顺序

Turborepo 会自动处理依赖顺序：

1. `@nest-admin/types` (无依赖)
2. `@sa/utils`, `@sa/color` 等独立包
3. 依赖其他包的包
4. 应用构建 (`@nest-admin/server`, `@nest-admin/web`)
