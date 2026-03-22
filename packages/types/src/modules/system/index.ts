/**
 * 系统模块类型导出
 */

// 用户
export {
  type IUser,
  type IUserSearchParams,
  type IUserCreateParams,
  type IUserUpdateParams,
  type IUserProfileUpdateParams,
  type IUserListResponse,
  type IUserDetailResponse,
} from './user.dto';

// 角色
export {
  type IRole,
  type IRoleSearchParams,
  type IRoleCreateParams,
  type IRoleUpdateParams,
  type IRoleListResponse,
  type IRoleMenuTreeSelect,
} from './role.dto';

// 菜单
export {
  type IMenu,
  type IMenuSearchParams,
  type IMenuCreateParams,
  type IMenuUpdateParams,
  type IMenuList,
  type IMenuTreeOption,
} from './menu.dto';

// 部门
export {
  type IDept,
  type IDeptSearchParams,
  type IDeptCreateParams,
  type IDeptUpdateParams,
  type IDeptList,
  type IDeptTreeOption,
} from './dept.dto';

// 岗位
export {
  type IPost,
  type IPostSearchParams,
  type IPostCreateParams,
  type IPostUpdateParams,
  type IPostListResponse,
} from './post.dto';

// 字典
export {
  type IDictType,
  type IDictTypeSearchParams,
  type IDictTypeCreateParams,
  type IDictTypeUpdateParams,
  type IDictTypeListResponse,
  type IDictData,
  type IDictDataSearchParams,
  type IDictDataCreateParams,
  type IDictDataUpdateParams,
  type IDictDataListResponse,
} from './dict.dto';

// 租户
export {
  type ITenant,
  type ITenantSearchParams,
  type ITenantCreateParams,
  type ITenantUpdateParams,
  type ITenantListResponse,
  type ITenantPackage,
  type ITenantPackageSearchParams,
  type ITenantPackageCreateParams,
  type ITenantPackageUpdateParams,
  type ITenantPackageListResponse,
  type ITenantPackageSelectOption,
} from './tenant.dto';

// 通知公告
export {
  type INotice,
  type INoticeSearchParams,
  type INoticeCreateParams,
  type INoticeUpdateParams,
  type INoticeListResponse,
} from './notice.dto';

// 系统参数
export {
  type IConfig,
  type IConfigSearchParams,
  type IConfigCreateParams,
  type IConfigUpdateParams,
  type IConfigListResponse,
} from './config.dto';

// 客户端
export {
  type IClient,
  type IClientSearchParams,
  type IClientCreateParams,
  type IClientUpdateParams,
  type IClientListResponse,
} from './client.dto';

// OSS
export {
  type IOss,
  type IOssSearchParams,
  type IOssListResponse,
  type IOssConfig,
  type IOssConfigSearchParams,
  type IOssConfigOperateParams,
  type IOssConfigListResponse,
} from './oss.dto';

// 短信
export {
  type ISmsChannel,
  type ISmsChannelSearchParams,
  type ISmsChannelOperateParams,
  type ISmsChannelListResponse,
  type ISmsTemplate,
  type ISmsTemplateSearchParams,
  type ISmsTemplateOperateParams,
  type ISmsTemplateListResponse,
  type ISmsLog,
  type ISmsLogSearchParams,
  type ISmsLogListResponse,
  type ISendSmsParams,
  type IBatchSendSmsParams,
} from './sms.dto';

// 站内信
export {
  type INotifyTemplate,
  type INotifyTemplateSearchParams,
  type INotifyTemplateOperateParams,
  type INotifyTemplateListResponse,
  type INotifyTemplateSelect,
  type INotifyMessage,
  type INotifyMessageSearchParams,
  type IMyNotifyMessageSearchParams,
  type INotifyMessageListResponse,
  type IUnreadCountResponse,
  type ISendNotifyMessageParams,
  type ISendNotifyAllParams,
} from './notify-message.dto';

// 文件管理
export {
  type IFileFolder,
  type IFileFolderTreeNode,
  type IFolderSearchParams,
  type IFolderOperateParams,
  type IFolderListResponse,
  type IFileInfo,
  type IFileSearchParams,
  type IMoveFilesParams,
  type IRenameFileParams,
  type IFileDetail,
  type IFileListResponse,
  type IFileShare,
  type ICreateShareParams,
  type IGetShareParams,
  type IShareInfo,
  type IShareDetail,
  type IShareSearchParams,
  type IShareListResponse,
  type IRecycleFile,
  type IRecycleSearchParams,
  type IRecycleListResponse,
  type IFileVersion,
  type IFileVersions,
  type IRestoreVersionParams,
  type IRestoreVersionResult,
  type IFileAccessToken,
  type IStorageStats,
} from './file-manager.dto';

// 社交账号
export { type ISocial, type SocialSource } from './social.dto';

// 租户仪表盘
export {
  type ITenantDashboardStats,
  type ITenantTrendData,
  type IPackageDistribution,
  type IExpiringTenant,
  type IQuotaTopTenant,
  type ITenantDashboardData,
  type IDashboardTimeRangeParams,
} from './tenant-dashboard.dto';

// 租户配额
export {
  type ITenantQuota,
  type IQuotaChangeRecord,
  type ITenantQuotaDetail,
  type ITenantQuotaSearchParams,
  type IUpdateTenantQuotaParams,
  type ICheckQuotaParams,
  type IQuotaCheckResult,
  type ITenantQuotaListResponse,
} from './tenant-quota.dto';

// 租户审计日志
export {
  type ITenantAuditLog,
  type ITenantAuditLogDetail,
  type ITenantAuditLogSearchParams,
  type IExportTenantAuditLogParams,
  type ITenantAuditLogStats,
  type ITenantAuditLogListResponse,
} from './tenant-audit.dto';

// 租户切换
export {
  type ITenantSelectItem,
  type ITenantSwitchResponse,
  type ITenantRestoreResponse,
  type ITenantSwitchStatus,
} from './tenant-switch.dto';
