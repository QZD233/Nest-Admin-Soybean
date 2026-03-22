/**
 * 系统模块枚举定义（补充）
 */

/**
 * 数据权限范围
 *
 * - 1: 全部数据权限
 * - 2: 自定数据权限
 * - 3: 本部门数据权限
 * - 4: 本部门及以下数据权限
 * - 5: 仅本人数据权限
 * - 6: 未定义
 */
export type DataScope = '1' | '2' | '3' | '4' | '5' | '6';

/**
 * 图标类型
 *
 * - 1: iconify icon
 * - 2: local icon
 */
export type IconType = '1' | '2';

/**
 * 是否外链
 *
 * - 0: 是
 * - 1: 否
 * - 2: iframe
 */
export type IsMenuFrame = '0' | '1' | '2';

/**
 * 授权类型
 */
export type GrantType = 'password' | 'sms' | 'email' | 'xcx' | 'social';

/**
 * 设备类型
 */
export type DeviceType = 'pc' | 'android' | 'ios' | 'xcx';

/**
 * OSS访问策略
 *
 * - 0: private
 * - 1: public
 * - 2: custom
 */
export type OssAccessPolicy = '0' | '1' | '2';

/**
 * 分享状态
 *
 * - 0: 未分享
 * - 1: 分享中
 * - 2: 已过期
 */
export type ShareStatus = '0' | '1' | '2';

/**
 * 短信渠道编码
 */
export type SmsChannelCode = 'aliyun' | 'tencent' | 'huawei' | 'qiniu' | 'yunpian';

/**
 * 短信模板类型
 *
 * - 1: 验证码
 * - 2: 通知
 * - 3: 营销
 */
export type SmsTemplateType = 1 | 2 | 3;

/**
 * 短信发送状态
 *
 * - 0: 发送中
 * - 1: 成功
 * - 2: 失败
 */
export type SmsSendStatus = 0 | 1 | 2;

/**
 * 短信接收状态
 *
 * - 0: 未接收
 * - 1: 已接收
 */
export type SmsReceiveStatus = 0 | 1;

/**
 * 站内信模板类型
 *
 * - 1: 系统通知
 * - 2: 业务通知
 */
export type NotifyTemplateType = 1 | 2;

/**
 * 配额状态
 */
export type QuotaStatus = 'normal' | 'warning' | 'danger';

/**
 * 审计操作类型
 */
export type AuditActionType =
  | 'login'
  | 'logout'
  | 'create'
  | 'update'
  | 'delete'
  | 'permission_change'
  | 'config_change'
  | 'export'
  | 'other';

/**
 * 社交登录来源
 */
export type SocialSource =
  | 'maxkey'
  | 'topiam'
  | 'qq'
  | 'weibo'
  | 'gitee'
  | 'dingtalk'
  | 'baidu'
  | 'csdn'
  | 'coding'
  | 'oschina'
  | 'alipay_wallet'
  | 'wechat_open'
  | 'wechat_mp'
  | 'wechat_enterprise'
  | 'gitlab'
  | 'github';
