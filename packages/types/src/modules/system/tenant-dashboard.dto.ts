/**
 * 租户统计卡片数据
 */
export interface ITenantDashboardStats {
  /** 租户总数 */
  totalTenants: number;
  /** 活跃租户数 */
  activeTenants: number;
  /** 新增租户数（本月） */
  newTenants: number;
  /** 用户总数 */
  totalUsers: number;
  /** 在线用户数 */
  onlineUsers: number;
  /** 今日登录用户数 */
  todayLoginUsers: number;
  /** 存储使用总量（MB） */
  totalStorageUsed: number;
  /** API调用总量（今日） */
  totalApiCalls: number;
}

/**
 * 租户增长趋势数据点
 */
export interface ITenantTrendData {
  /** 日期 */
  date: string;
  /** 新增租户数 */
  newTenants: number;
  /** 累计租户数 */
  totalTenants: number;
}

/**
 * 套餐分布数据
 */
export interface IPackageDistribution {
  /** 套餐ID */
  packageId: number;
  /** 套餐名称 */
  packageName: string;
  /** 租户数量 */
  count: number;
  /** 占比 */
  percentage: number;
}

/**
 * 即将到期租户
 */
export interface IExpiringTenant {
  /** 租户ID */
  tenantId: string;
  /** 企业名称 */
  companyName: string;
  /** 联系人 */
  contactUserName: string;
  /** 联系电话 */
  contactPhone: string;
  /** 到期时间 */
  expireTime: string;
  /** 剩余天数 */
  daysRemaining: number;
  /** 套餐名称 */
  packageName: string;
}

/**
 * 配额使用TOP租户
 */
export interface IQuotaTopTenant {
  /** 租户ID */
  tenantId: string;
  /** 企业名称 */
  companyName: string;
  /** 用户配额使用率 */
  userQuotaUsage: number;
  /** 存储配额使用率 */
  storageQuotaUsage: number;
  /** API配额使用率 */
  apiQuotaUsage: number;
  /** 综合使用率 */
  overallUsage: number;
}

/**
 * 仪表盘完整数据
 */
export interface ITenantDashboardData {
  /** 统计卡片数据 */
  stats: ITenantDashboardStats;
  /** 租户增长趋势 */
  trend: ITenantTrendData[];
  /** 套餐分布 */
  packageDistribution: IPackageDistribution[];
  /** 即将到期租户 */
  expiringTenants: IExpiringTenant[];
  /** 配额使用TOP10 */
  quotaTopTenants: IQuotaTopTenant[];
}

/**
 * 仪表盘时间范围查询参数
 */
export interface IDashboardTimeRangeParams {
  beginTime?: string;
  endTime?: string;
}
