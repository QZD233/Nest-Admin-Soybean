/**
 * 统一枚举导出入口
 *
 * 枚举从 @nest-admin/types 共享包导入
 * Schema 定义保留在本地用于 Swagger 文档
 */

// 从共享类型包重新导出枚举
export {
  // 状态相关
  StatusEnum,
  DelFlagEnum,
  TenantStatus,
  YesNo,
  YesNoChar,
  // 用户相关
  SexEnum,
  // 菜单相关
  MenuTypeEnum,
  IsFrameEnum,
  // 数据权限
  DataScopeEnum,
  // 通知公告
  NoticeTypeEnum,
  // 设备类型
  DeviceTypeEnum,
  GrantTypeEnum,
  // 排序
  SortRuleEnum,
} from '@nest-admin/types';

// 缓存相关 (本地定义，不在共享包中)
export { CacheEnum } from './cache.enum';

// Swagger Schema 定义 (保留本地)
export { DataScopeEnumSchema } from './data-scope.enum';
export { StatusEnumSchema, DelFlagEnumSchema } from './status.enum';
export { SexEnumSchema } from './user.enum';
export { MenuTypeEnumSchema } from './menu.enum';
export { NoticeTypeEnumSchema } from './notice.enum';
export { ConfigTypeEnum, ConfigTypeEnumSchema } from './config.enum';
export { SortRuleEnumSchema, CharEnum, CharEnumSchema } from './sort.enum';
export { DeviceTypeEnumSchema } from './device.enum';
