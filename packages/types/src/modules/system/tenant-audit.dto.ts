import type { IBaseEntity, IdType, RecordNullable } from '../../common';
import type { AuditActionType } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 租户审计日志
 */
export interface ITenantAuditLog extends IBaseEntity {
  /** 日志ID */
  id: number | string;
  /** 租户ID */
  tenantId: string;
  /** 企业名称 */
  companyName?: string;
  /** 操作人ID */
  operatorId: number;
  /** 操作人姓名 */
  operatorName: string;
  /** 操作类型 */
  actionType: AuditActionType;
  /** 操作描述 */
  actionDesc: string;
  /** 操作模块 */
  module: string;
  /** IP地址 */
  ipAddress: string;
  /** User Agent */
  userAgent?: string;
  /** 请求URL */
  requestUrl?: string;
  /** 请求方法 */
  requestMethod?: string;
  /** 操作时间 */
  operateTime: string;
}

/**
 * 审计日志详情
 */
export interface ITenantAuditLogDetail extends ITenantAuditLog {
  /** 请求参数（JSON） */
  requestParams?: string;
  /** 操作前数据（JSON） */
  beforeData?: string;
  /** 操作后数据（JSON） */
  afterData?: string;
  /** 响应数据（JSON） */
  responseData?: string;
}

/**
 * 审计日志搜索参数
 */
export type ITenantAuditLogSearchParams = RecordNullable<{
  tenantId?: string;
  operatorName?: string;
  actionType?: AuditActionType;
  module?: string;
  beginTime?: string;
  endTime?: string;
}> &
  IPaginationParams;

/**
 * 审计日志导出参数
 */
export type IExportTenantAuditLogParams = ITenantAuditLogSearchParams;

/**
 * 审计日志统计
 */
export interface ITenantAuditLogStats {
  /** 今日操作数 */
  todayCount: number;
  /** 本周操作数 */
  weekCount: number;
  /** 本月操作数 */
  monthCount: number;
  /** 按操作类型统计 */
  byActionType: { actionType: string; count: number }[];
  /** 按模块统计 */
  byModule: { module: string; count: number }[];
}

/**
 * 审计日志列表响应
 */
export type ITenantAuditLogListResponse = IPaginationResponse<ITenantAuditLog>;
