import type { IBaseEntity, IdType, RecordNullable, EnableStatus } from '../../common';
import type { MisfirePolicy, Concurrent } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 定时任务
 */
export interface IJob extends IBaseEntity {
  /** 任务ID */
  jobId: IdType;
  /** 任务名称 */
  jobName: string;
  /** 任务组名 */
  jobGroup: string;
  /** 调用目标字符串 */
  invokeTarget: string;
  /** cron执行表达式 */
  cronExpression: string;
  /** 执行策略（1立即执行 2执行一次 3放弃执行） */
  misfirePolicy: MisfirePolicy;
  /** 是否并发执行（0允许 1禁止） */
  concurrent: Concurrent;
  /** 状态（0正常 1暂停） */
  status: EnableStatus;
  /** 下次执行时间 */
  nextValidTime?: string;
}

/**
 * 定时任务搜索参数
 */
export type IJobSearchParams = RecordNullable<Pick<IJob, 'jobName' | 'jobGroup' | 'status'>> & IPaginationParams;

/**
 * 定时任务列表响应
 */
export type IJobListResponse = IPaginationResponse<IJob>;

/**
 * 定时任务操作参数
 */
export type IJobOperateParams = RecordNullable<
  Pick<IJob, 'jobId' | 'jobName' | 'jobGroup' | 'invokeTarget' | 'cronExpression' | 'misfirePolicy' | 'concurrent' | 'status'>
>;
