/**
 * 领域事件定义
 *
 * 所有系统级领域事件在此统一定义。
 * 使用常量名称避免字符串拼写错误。
 *
 * @example
 * // 发布事件
 * this.eventEmitter.emit(DomainEvents.TENANT_CREATED, new TenantCreatedEvent(tenantId));
 *
 * // 监听事件
 * @OnEvent(DomainEvents.TENANT_CREATED)
 * handleTenantCreated(event: TenantCreatedEvent) { ... }
 */
export const DomainEvents = {
  // ===== 租户事件 =====
  /** 租户创建完成 */
  TENANT_CREATED: 'tenant.created',
  /** 租户更新 */
  TENANT_UPDATED: 'tenant.updated',
  /** 租户停用 */
  TENANT_DISABLED: 'tenant.disabled',
  /** 租户启用 */
  TENANT_ENABLED: 'tenant.enabled',
  /** 租户删除 */
  TENANT_DELETED: 'tenant.deleted',
  /** 租户过期 */
  TENANT_EXPIRED: 'tenant.expired',

  // ===== 用户事件 =====
  /** 用户创建 */
  USER_CREATED: 'user.created',
  /** 用户更新 */
  USER_UPDATED: 'user.updated',
  /** 用户删除 */
  USER_DELETED: 'user.deleted',
  /** 用户登录成功 */
  USER_LOGIN_SUCCESS: 'user.login.success',
  /** 用户登录失败 */
  USER_LOGIN_FAILED: 'user.login.failed',
  /** 用户登出 */
  USER_LOGOUT: 'user.logout',
  /** 用户密码修改 */
  USER_PASSWORD_CHANGED: 'user.password.changed',

  // ===== 角色/权限事件 =====
  /** 角色创建 */
  ROLE_CREATED: 'role.created',
  /** 角色更新 */
  ROLE_UPDATED: 'role.updated',
  /** 角色删除 */
  ROLE_DELETED: 'role.deleted',
  /** 角色权限变更 */
  ROLE_PERMISSIONS_CHANGED: 'role.permissions.changed',

  // ===== 配置事件 =====
  /** 系统配置变更 */
  CONFIG_CHANGED: 'config.changed',
  /** 字典数据变更 */
  DICT_CHANGED: 'dict.changed',

  // ===== 缓存事件 =====
  /** 缓存清除 */
  CACHE_EVICTED: 'cache.evicted',
  /** 缓存预热 */
  CACHE_WARMED: 'cache.warmed',

  // ===== 文件事件 =====
  /** 文件上传 */
  FILE_UPLOADED: 'file.uploaded',
  /** 文件删除 */
  FILE_DELETED: 'file.deleted',

  // ===== 通知事件 =====
  /** 通知发送 */
  NOTIFICATION_SENT: 'notification.sent',
  /** 系统告警 */
  SYSTEM_ALERT: 'system.alert',
} as const;

/**
 * 领域事件基类
 */
export abstract class BaseDomainEvent {
  /** 事件发生时间 */
  readonly occurredAt: Date;
  /** 事件发起者的租户ID */
  readonly tenantId?: string;

  constructor(tenantId?: string) {
    this.occurredAt = new Date();
    this.tenantId = tenantId;
  }
}

// ===== 租户事件 Payload =====

export class TenantCreatedEvent extends BaseDomainEvent {
  constructor(
    public readonly tenantIdValue: string,
    public readonly companyName: string,
    public readonly packageId?: number,
  ) {
    super(tenantIdValue);
  }
}

export class TenantStatusChangedEvent extends BaseDomainEvent {
  constructor(
    public readonly tenantIdValue: string,
    public readonly oldStatus: string,
    public readonly newStatus: string,
  ) {
    super(tenantIdValue);
  }
}

export class TenantDeletedEvent extends BaseDomainEvent {
  constructor(public readonly tenantIdValue: string) {
    super(tenantIdValue);
  }
}

// ===== 用户事件 Payload =====

export class UserCreatedEvent extends BaseDomainEvent {
  constructor(
    public readonly userId: number,
    public readonly userName: string,
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

export class UserLoginEvent extends BaseDomainEvent {
  constructor(
    public readonly userId: number,
    public readonly userName: string,
    public readonly success: boolean,
    public readonly ipAddress: string,
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

export class UserPasswordChangedEvent extends BaseDomainEvent {
  constructor(
    public readonly userId: number,
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

// ===== 配置事件 Payload =====

export class ConfigChangedEvent extends BaseDomainEvent {
  constructor(
    public readonly configKey: string,
    public readonly oldValue: string | null,
    public readonly newValue: string,
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

export class DictChangedEvent extends BaseDomainEvent {
  constructor(
    public readonly dictType: string,
    public readonly action: 'create' | 'update' | 'delete',
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

// ===== 角色事件 Payload =====

export class RolePermissionsChangedEvent extends BaseDomainEvent {
  constructor(
    public readonly roleId: number,
    public readonly roleName: string,
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

// ===== 文件事件 Payload =====

export class FileUploadedEvent extends BaseDomainEvent {
  constructor(
    public readonly fileId: number,
    public readonly fileName: string,
    public readonly fileSize: number,
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

// ===== 通知事件 Payload =====

export class NotificationSentEvent extends BaseDomainEvent {
  constructor(
    public readonly templateCode: string,
    public readonly userIds: number[],
    tenantId?: string,
  ) {
    super(tenantId);
  }
}

export class SystemAlertEvent extends BaseDomainEvent {
  constructor(
    public readonly alertType: string,
    public readonly message: string,
    public readonly severity: 'info' | 'warning' | 'critical',
  ) {
    super();
  }
}
