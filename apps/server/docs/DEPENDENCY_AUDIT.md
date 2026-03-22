# 依赖审计和更新指南

## 当前依赖状态

### 核心框架
| 依赖 | 当前版本 | 建议操作 |
|------|---------|---------|
| @nestjs/common | ^10.0.0 | ✅ 保持 |
| @nestjs/core | ^10.0.0 | ✅ 保持 |
| @nestjs/platform-express | ^10.0.0 | ✅ 保持 |
| @prisma/client | ^5.17.0 | ⚠️ 考虑更新到最新 |
| typescript | ^5.1.3 | ⚠️ 考虑更新到 5.3+ |

### 安全相关
| 依赖 | 当前版本 | 状态 |
|------|---------|------|
| helmet | ^7.1.0 | ✅ 最新 |
| bcryptjs | ^3.0.2 | ✅ 安全 |
| passport-jwt | ^4.0.1 | ✅ 安全 |

### 需要关注的依赖
| 依赖 | 问题 | 建议 |
|------|------|-----|
| eslint | ^8.42.0 | 考虑迁移到 ESLint 9.x |
| @typescript-eslint/* | ^6.0.0 | 考虑更新到 7.x |

## 安全审计命令

```bash
# 检查安全漏洞
npm audit

# 自动修复安全漏洞
npm audit fix

# 查看过时的依赖
npm outdated

# 更新所有依赖到最新
npm update
```

## 定期维护检查清单

### 每周
- [ ] 运行 `npm audit` 检查安全漏洞
- [ ] 查看 GitHub Dependabot 警告

### 每月
- [ ] 运行 `npm outdated` 检查过时依赖
- [ ] 评估主要依赖的更新日志
- [ ] 更新开发依赖

### 每季度
- [ ] 评估核心框架更新
- [ ] 进行全面的安全审计
- [ ] 更新 Node.js 版本（如需要）

## 依赖升级流程

### 1. 评估阶段
```bash
# 查看过时依赖
npm outdated

# 查看安全问题
npm audit
```

### 2. 测试阶段
```bash
# 创建更新分支
git checkout -b chore/deps-update

# 更新依赖
npm update

# 运行测试
npm run test
npm run test:e2e
npm run build
```

### 3. 验证阶段
- 运行完整的测试套件
- 在开发环境验证功能
- 检查 TypeScript 编译是否有新的类型错误

### 4. 部署阶段
- 先在测试环境部署
- 监控日志和性能指标
- 确认无问题后部署生产

## 已知的废弃警告

### Prisma
- `$use` 中间件已废弃，已迁移到 `$extends`

### Node.js
- 确保使用 Node.js 18.x LTS 或更高版本

## 锁定版本建议

以下依赖建议锁定特定版本以避免破坏性更新：

```json
{
  "@nestjs/common": "10.x",
  "@prisma/client": "5.x",
  "typescript": "5.x"
}
```

## 安全最佳实践

1. **不要禁用安全头**
   - 保持 helmet 配置
   - 不要禁用 CORS 限制

2. **密钥管理**
   - 使用环境变量存储敏感信息
   - 定期轮换 JWT 密钥
   - 不要在代码中硬编码密钥

3. **输入验证**
   - 使用 class-validator 验证所有输入
   - 启用 whitelist 选项
   - 对用户输入进行适当的转义

4. **日志安全**
   - 不要记录敏感信息（密码、token）
   - 使用结构化日志格式
   - 配置适当的日志保留策略

## 监控建议

配置以下监控以及时发现问题：

1. **应用监控**
   - Prometheus + Grafana（已配置）
   - 配置告警规则

2. **安全监控**
   - 配置登录失败告警
   - 监控异常的 API 调用模式
   - 设置速率限制告警

3. **依赖监控**
   - 启用 GitHub Dependabot
   - 配置 Snyk 或类似工具
