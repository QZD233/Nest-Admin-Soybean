import type { IBaseEntity, RecordNullable } from '../../common';
import type { DeviceType } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 在线用户
 */
export interface IOnlineUser extends IBaseEntity {
  /** 用户账号 */
  userName: string;
  /** 登录IP地址 */
  ipaddr: string;
  /** 登录地点 */
  loginLocation: string;
  /** 浏览器类型 */
  browser: string;
  /** 操作系统 */
  os: string;
  /** 所在部门 */
  deptName: string;
  /** 设备类型 */
  deviceType: DeviceType;
  /** 登录时间 */
  loginTime: number;
  /** 令牌ID */
  tokenId: string;
}

/**
 * 在线用户搜索参数
 */
export type IOnlineUserSearchParams = RecordNullable<Pick<IOnlineUser, 'userName' | 'ipaddr'>> & IPaginationParams;

/**
 * 在线用户列表响应
 */
export type IOnlineUserListResponse = IPaginationResponse<IOnlineUser>;
