import type { IBaseEntity, IdType, RecordNullable, EnableStatus } from '../../common';
import type { BusinessType } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 操作日志
 */
export interface IOperLog extends IBaseEntity {
  /** 日志主键 */
  operId: IdType;
  /** 租户编号 */
  tenantId: IdType;
  /** 系统模块 */
  title: string;
  /** 操作类型 */
  businessType: BusinessType;
  /** 方法名称 */
  method: string;
  /** 请求方式 */
  requestMethod: string;
  /** 操作类别 */
  operatorType: string;
  /** 操作人员 */
  operName: string;
  /** 部门名称 */
  deptName: string;
  /** 请求URL */
  operUrl: string;
  /** 操作IP */
  operIp: string;
  /** 操作地点 */
  operLocation: string;
  /** 请求参数 */
  operParam: string;
  /** 返回参数 */
  jsonResult: string;
  /** 操作状态 */
  status: EnableStatus;
  /** 错误消息 */
  errorMsg: string;
  /** 操作时间 */
  operTime: string;
  /** 消耗时间 */
  costTime: number;
}

/**
 * 操作日志搜索参数
 */
export type IOperLogSearchParams = RecordNullable<
  Pick<IOperLog, 'title' | 'businessType' | 'operName' | 'operIp' | 'status' | 'operTime'>
> &
  IPaginationParams;

/**
 * 操作日志列表响应
 */
export type IOperLogListResponse = IPaginationResponse<IOperLog>;
