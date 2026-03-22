import type { IBaseEntity, IdType, RecordNullable, EnableStatus } from '../../common';
import type { DeviceType } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 登录日志
 */
export interface ILoginInfor extends IBaseEntity {
  /** 访问ID */
  infoId: IdType;
  /** 租户编号 */
  tenantId: IdType;
  /** 用户账号 */
  userName: string;
  /** 客户端 */
  clientKey: string;
  /** 设备类型 */
  deviceType: DeviceType;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation: string;
  /** 浏览器类型 */
  browser: string;
  /** 操作系统 */
  os: string;
  /** 登录状态（0成功 1失败） */
  status: EnableStatus;
  /** 提示消息 */
  msg: string;
  /** 访问时间 */
  loginTime: string;
}

/**
 * 登录日志搜索参数
 */
export type ILoginInforSearchParams = RecordNullable<Pick<ILoginInfor, 'userName' | 'ipaddr' | 'status'>> &
  IPaginationParams;

/**
 * 登录日志列表响应
 */
export type ILoginInforListResponse = IPaginationResponse<ILoginInfor>;
