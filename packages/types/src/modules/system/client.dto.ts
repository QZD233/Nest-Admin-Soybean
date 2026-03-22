import type { StatusEnum, DeviceTypeEnum, GrantTypeEnum } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 客户端实体
 */
export interface IClient extends IBaseEntity {
  /** id */
  id: IdType;
  /** 客户端id */
  clientId?: string;
  /** 客户端key */
  clientKey: string;
  /** 客户端秘钥 */
  clientSecret: string;
  /** 授权类型 */
  grantType?: GrantTypeEnum | string;
  /** 授权类型列表 */
  grantTypeList?: (GrantTypeEnum | string)[];
  /** 设备类型 */
  deviceType?: DeviceTypeEnum | string;
  /** token活跃超时时间 */
  activeTimeout?: number;
  /** token固定超时 */
  timeout?: number;
  /** 状态 */
  status?: StatusEnum | string;
  /** 删除标志 */
  delFlag?: string;
}

/**
 * 客户端查询参数
 */
export interface IClientSearchParams extends IPaginationParams {
  /** 客户端key */
  clientKey?: string;
  /** 客户端秘钥 */
  clientSecret?: string;
  /** 状态 */
  status?: StatusEnum | string;
}

/**
 * 客户端创建参数
 */
export interface IClientCreateParams {
  /** 客户端key */
  clientKey: string;
  /** 客户端秘钥 */
  clientSecret: string;
  /** 授权类型列表 */
  grantTypeList?: (GrantTypeEnum | string)[];
  /** 设备类型 */
  deviceType?: DeviceTypeEnum | string;
  /** token活跃超时时间 */
  activeTimeout?: number;
  /** token固定超时 */
  timeout?: number;
  /** 状态 */
  status?: StatusEnum | string;
}

/**
 * 客户端更新参数
 */
export interface IClientUpdateParams extends Partial<IClientCreateParams> {
  /** id */
  id: IdType;
}

/**
 * 客户端列表响应
 */
export type IClientListResponse = IPaginationResponse<IClient>;
