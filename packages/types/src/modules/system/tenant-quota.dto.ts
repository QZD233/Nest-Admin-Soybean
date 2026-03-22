import type { IBaseEntity, RecordNullable } from '../../common';
import type { QuotaStatus } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 租户配额
 */
export interface ITenantQuota extends IBaseEntity {
  /** 配额记录ID */
  id: number;
  /** 租户ID */
  tenantId: string;
  /** 企业名称 */
  companyName: string;
  /** 用户数量配额，-1表示不限 */
  userQuota: number;
  /** 已使用用户数 */
  userUsed: number;
  /** 用户配额使用率 */
  userUsageRate: number;
  /** 存储配额（MB），-1表示不限 */
  storageQuota: number;
  /** 已使用存储（MB） */
  storageUsed: number;
  /** 存储配额使用率 */
  storageUsageRate: number;
  /** API调用配额（月），-1表示不限 */
  apiQuota: number;
  /** 本月已调用次数 */
  apiUsed: number;
  /** API配额使用率 */
  apiUsageRate: number;
  /** 配额状态 */
  status: QuotaStatus;
}

/**
 * 配额变更记录
 */
export interface IQuotaChangeRecord {
  /** 记录ID */
  id: number;
  /** 配额类型 */
  quotaType: 'user' | 'storage' | 'api';
  /** 原值 */
  oldValue: number;
  /** 新值 */
  newValue: number;
  /** 修改人 */
  changeBy: string;
  /** 修改时间 */
  changeTime: string;
}

/**
 * 租户配额详情
 */
export interface ITenantQuotaDetail extends ITenantQuota {
  /** 配额变更历史 */
  quotaHistory: IQuotaChangeRecord[];
}

/**
 * 配额搜索参数
 */
export type ITenantQuotaSearchParams = RecordNullable<{
  tenantId?: string;
  companyName?: string;
  status?: QuotaStatus;
}> &
  IPaginationParams;

/**
 * 配额更新参数
 */
export interface IUpdateTenantQuotaParams {
  tenantId: string;
  userQuota?: number;
  storageQuota?: number;
  apiQuota?: number;
}

/**
 * 配额检查参数
 */
export interface ICheckQuotaParams {
  tenantId: string;
  quotaType: 'user' | 'storage' | 'api';
  requestAmount?: number;
}

/**
 * 配额检查结果
 */
export interface IQuotaCheckResult {
  /** 是否允许 */
  allowed: boolean;
  /** 配额类型 */
  quotaType: string;
  /** 当前使用量 */
  used: number;
  /** 配额限制 */
  limit: number;
  /** 使用率 */
  usageRate: number;
  /** 提示信息 */
  message: string;
}

/**
 * 配额列表响应
 */
export type ITenantQuotaListResponse = IPaginationResponse<ITenantQuota>;
