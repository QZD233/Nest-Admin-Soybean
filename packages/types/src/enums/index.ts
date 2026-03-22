/**
 * 枚举导出入口
 */

// 状态相关
export {
  StatusEnum,
  DelFlagEnum,
  TenantStatus,
  YesNo,
  YesNoChar,
  type StatusType,
  type DelFlagType,
} from './status.enum';

// 用户相关
export { SexEnum, type SexType } from './user.enum';

// 菜单相关
export { MenuTypeEnum, IsFrameEnum, type MenuType } from './menu.enum';

// 数据权限
export { DataScopeEnum, type DataScopeType } from './data-scope.enum';

// 通知公告
export { NoticeTypeEnum, type NoticeType } from './notice.enum';

// 设备与授权
export {
  DeviceTypeEnum,
  GrantTypeEnum,
  type DeviceType as DeviceTypeEnumType,
  type GrantType as GrantTypeEnumType,
} from './device.enum';

// 排序
export { SortRuleEnum, type SortRuleType } from './sort.enum';

// 监控相关
export { type BusinessType, type MisfirePolicy, type Concurrent } from './monitor.enum';

// 工具相关
export {
  type TplCategory,
  type GenType,
  type QueryType,
  type HtmlType,
  type JavaType,
} from './tool.enum';

// 系统补充类型
export {
  type DataScope,
  type IconType,
  type IsMenuFrame,
  type GrantType,
  type DeviceType,
  type OssAccessPolicy,
  type ShareStatus,
  type SmsChannelCode,
  type SmsTemplateType,
  type SmsSendStatus,
  type SmsReceiveStatus,
  type NotifyTemplateType,
  type QuotaStatus,
  type AuditActionType,
  type SocialSource,
} from './system.enum';
