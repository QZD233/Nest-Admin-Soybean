import type { IBaseEntity, IdType, RecordNullable, EnableStatus } from '../../common';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 调度日志
 */
export interface IJobLog extends IBaseEntity {
  /** 日志ID */
  jobLogId: IdType;
  /** 任务名称 */
  jobName: string;
  /** 任务组名 */
  jobGroup: string;
  /** 调用目标字符串 */
  invokeTarget: string;
  /** 日志信息 */
  jobMessage: string;
  /** 执行状态（0成功 1失败） */
  status: EnableStatus;
  /** 异常信息 */
  exceptionInfo?: string;
}

/**
 * 调度日志搜索参数
 */
export type IJobLogSearchParams = RecordNullable<Pick<IJobLog, 'jobName' | 'jobGroup' | 'status'>> & IPaginationParams;

/**
 * 调度日志列表响应
 */
export type IJobLogListResponse = IPaginationResponse<IJobLog>;
