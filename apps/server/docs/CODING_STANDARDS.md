# NestJS 企业级编码规范

本文档定义了 Nest-Admin-Soybean Server 项目的编码规范和最佳实践。

## 1. 错误处理规范

### 1.1 统一使用异常抛出

**规则**：所有业务错误都应该通过异常抛出，而不是返回 `Result.fail()`

```typescript
// ❌ 不推荐 - 使用 Result.fail()
async findUser(id: number) {
  const user = await this.userRepo.findById(id);
  if (!user) {
    return Result.fail(ResponseCode.USER_NOT_FOUND, '用户不存在');
  }
  return Result.ok(user);
}

// ✅ 推荐 - 使用 BusinessException
async findUser(id: number) {
  const user = await this.userRepo.findById(id);
  BusinessException.throwIfNull(user, '用户不存在', ResponseCode.USER_NOT_FOUND);
  return Result.ok(user);
}
```

### 1.2 异常类选择

| 异常类 | HTTP 状态码 | 使用场景 |
|--------|------------|----------|
| `BusinessException` | 200 | 业务逻辑错误 |
| `AuthenticationException` | 401 | 认证失败 |
| `AuthorizationException` | 403 | 权限不足 |
| `ValidationException` | 400 | 参数验证失败 |
| `NotFoundException` | 404 | 资源不存在 |

### 1.3 异常抛出最佳实践

```typescript
// 条件检查
BusinessException.throwIf(user.status === 'disabled', '用户已被禁用');

// 空值检查
BusinessException.throwIfNull(user, '用户不存在', ResponseCode.USER_NOT_FOUND);

// 空数组检查
BusinessException.throwIfEmpty(roles, '请至少选择一个角色');

// 携带额外数据
throw new BusinessException(
  ResponseCode.DATA_IN_USE, 
  '该角色下存在用户', 
  { userCount: 5 }
);
```

### 1.4 使用 Assert 工具类（推荐）

对于常见的条件检查，可使用 `Assert` 工具类，使代码更简洁、语义更清晰：

```typescript
import { Assert } from 'src/shared/utils';

// 断言数据存在
Assert.notNull(user, '用户不存在');
Assert.exists(folder, '文件夹');

// 断言条件
Assert.isTrue(user.status === '0', '用户已被禁用');
Assert.isFalse(isDeleted, '数据已删除');

// 断言权限与租户
Assert.hasPermission(canEdit, '无权编辑');
Assert.tenantMatch(entity.tenantId, currentTenantId, '文件');

// 断言业务规则
Assert.notInUse(hasRelatedRecords, '该分类下存在数据');
Assert.notExists(nameExists, '名称已存在');
Assert.validParam(!!dto.name, '名称为必填项');
```

## 2. Service 层规范

### 2.1 继承 BaseService

所有 Service 都应该继承 `BaseService` 以获得统一的 CRUD 操作和查询构建功能：

```typescript
@Injectable()
export class NoticeService extends BaseService<SysNotice, NoticeRepository, NoticeResponseDto> {
  constructor(
    private readonly noticeRepo: NoticeRepository,
    private readonly prisma: PrismaService,
  ) {
    super(noticeRepo, NoticeResponseDto, {
      containsFields: ['noticeTitle', 'createBy'],
      equalsFields: ['noticeType'],
      dateRangeField: 'createTime',
    });
  }

  // 自定义业务方法...
}
```

### 2.2 职责分离

对于复杂的 Service，应该按职责拆分为多个子服务：

```typescript
// user.service.ts - 作为门面服务
@Injectable()
export class UserService {
  constructor(
    private readonly crudService: UserCrudService,
    private readonly authService: UserAuthService,
    private readonly profileService: UserProfileService,
    private readonly batchService: UserBatchService,
    private readonly exportService: UserExportService,
  ) {}

  // 委托方法...
}
```

### 2.3 避免循环依赖

**禁止使用 `forwardRef`**，应该通过以下方式解耦：

```typescript
// ❌ 不推荐 - 循环依赖
@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => MenuService))
    private readonly menuService: MenuService,
  ) {}
}

// ✅ 推荐 - 使用事件驱动
@Injectable()
export class UserService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async deleteUser(id: number) {
    // 发布事件，由其他服务订阅处理
    this.eventEmitter.emit('user.deleted', { userId: id });
  }
}

// ✅ 推荐 - 使用中间服务
@Injectable()
export class UserMenuBridgeService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getUserMenus(userId: number) {
    // 直接使用 Prisma 查询，避免循环依赖
  }
}
```

## 3. 日志记录规范

### 3.1 日志级别使用

| 级别 | 使用场景 |
|------|----------|
| `error` | 系统错误、异常、严重问题 |
| `warn` | 警告信息、潜在问题、已处理的异常 |
| `info` | 重要业务操作、状态变更 |
| `debug` | 调试信息、详细流程追踪 |

### 3.2 日志格式

```typescript
// ✅ 推荐 - 结构化日志
this.logger.info({
  action: 'user.create',
  userId: user.id,
  username: user.username,
  tenantId: user.tenantId,
});

// ❌ 不推荐 - 字符串拼接
this.logger.log(`Created user ${user.username} with id ${user.id}`);
```

### 3.3 敏感信息过滤

```typescript
// 记录请求体时过滤敏感字段
const safeBody = this.sanitizeBody(body);
this.logger.debug({ action: 'login', body: safeBody });
```

## 4. Repository 层规范

### 4.1 继承 SoftDeleteRepository

```typescript
@Injectable()
export class UserRepository extends SoftDeleteRepository<SysUser, typeof userDelegate> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.sysUser);
  }

  // 自定义查询方法...
}
```

### 4.2 查询逻辑统一放在 Repository

```typescript
// ❌ 不推荐 - 在 Service 中构建查询
async findUsers(query: UserQueryDto) {
  const where = { status: query.status, delFlag: '0' };
  return this.prisma.sysUser.findMany({ where });
}

// ✅ 推荐 - 在 Repository 中封装
// user.repository.ts
async findByStatus(status: string) {
  return this.delegate.findMany({
    where: { status, delFlag: '0' },
  });
}
```

## 5. Controller 层规范

### 5.1 保持精简

Controller 只负责：
- 参数提取和验证（通过 DTO）
- 调用 Service 方法
- 返回响应

```typescript
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @RequirePermission('system:user:query')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
}
```

### 5.2 使用装饰器

```typescript
@Post()
@RequirePermission('system:user:add')
@Operlog({ title: '用户管理', businessType: BusinessType.INSERT })
@Api({ summary: '创建用户', description: '创建新用户账户' })
async create(@Body() createUserDto: CreateUserDto, @User() currentUser: JwtUser) {
  return this.userService.create(createUserDto, currentUser);
}
```

## 6. DTO 规范

### 6.1 请求 DTO

```typescript
export class CreateUserDto {
  @ApiProperty({ description: '用户名', example: 'admin' })
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(2, 20, { message: '用户名长度为 2-20 个字符' })
  username: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsStrongPassword({}, { message: '密码强度不足' })
  password: string;
}
```

### 6.2 响应 DTO

```typescript
export class UserResponseDto {
  @ApiProperty({ description: '用户ID' })
  userId: number;

  @ApiProperty({ description: '用户名' })
  username: string;

  @DateFormat()
  @ApiProperty({ description: '创建时间' })
  createTime: string;

  // 不要暴露敏感字段如 password
}
```

## 7. 事务规范

### 7.1 使用 @Transactional 装饰器

```typescript
@Transactional()
async createUserWithRoles(dto: CreateUserDto) {
  const user = await this.userRepo.create(dto);
  await this.userRoleRepo.createMany(dto.roleIds.map(roleId => ({
    userId: user.userId,
    roleId,
  })));
  return user;
}
```

### 7.2 事务传播行为

```typescript
// 默认：加入现有事务或创建新事务
@Transactional()

// 始终创建新事务
@Transactional({ propagation: 'REQUIRES_NEW' })

// 必须在现有事务中执行
@Transactional({ propagation: 'MANDATORY' })
```

## 8. 缓存规范

### 8.1 使用装饰器缓存

```typescript
@Cacheable({ key: 'user:${userId}', ttl: 300 })
async findById(userId: number) {
  return this.userRepo.findById(userId);
}

@CacheEvict({ key: 'user:${userId}' })
async update(userId: number, dto: UpdateUserDto) {
  return this.userRepo.update(userId, dto);
}
```

### 8.2 缓存键命名规范

```
{模块}:{实体}:{id或条件}

例如：
- user:info:123
- role:list:all
- menu:tree:tenant:1
- config:system:site
```

## 9. 文件组织规范

### 9.1 模块目录结构

```
module/
├── user/
│   ├── user.module.ts
│   ├── user.controller.ts
│   ├── user.service.ts
│   ├── user.repository.ts
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   ├── update-user.dto.ts
│   │   └── user-query.dto.ts
│   ├── vo/
│   │   └── user-response.dto.ts
│   ├── services/           # 拆分的子服务
│   │   ├── user-crud.service.ts
│   │   ├── user-auth.service.ts
│   │   └── user-profile.service.ts
│   └── __tests__/          # 单元测试
│       └── user.service.spec.ts
```

### 9.2 文件大小限制

- Service 文件不超过 500 行
- Controller 文件不超过 300 行
- 超过限制应拆分为多个文件

## 10. 命名规范

### 10.1 文件命名

- 使用 kebab-case: `user-profile.service.ts`
- 测试文件: `*.spec.ts` (单元测试), `*.e2e-spec.ts` (E2E 测试)

### 10.2 类命名

- Service: `UserService`, `UserCrudService`
- Controller: `UserController`
- Repository: `UserRepository`
- DTO: `CreateUserDto`, `UpdateUserDto`
- VO: `UserResponseDto`, `UserListResponseDto`

### 10.3 方法命名

- 查询: `find*`, `get*`, `list*`
- 创建: `create*`, `add*`
- 更新: `update*`, `modify*`
- 删除: `remove*`, `delete*`
- 批量: `*Batch`, `*Many`
