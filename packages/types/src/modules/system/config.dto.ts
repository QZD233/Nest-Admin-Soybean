import type { YesNoChar } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 系统参数实体
 */
export interface IConfig extends IBaseEntity {
  /** 参数主键 */
  configId: IdType;
  /** 租户编号 */
  tenantId?: IdType;
  /** 参数名称 */
  configName: string;
  /** 参数键名 */
  configKey: string;
  /** 参数键值 */
  configValue: string;
  /** 是否内置 */
  configType?: YesNoChar | string;
}

/**
 * 系统参数查询参数
 */
export interface IConfigSearchParams extends IPaginationParams {
  /** 参数名称 */
  configName?: string;
  /** 参数键名 */
  configKey?: string;
  /** 是否内置 */
  configType?: YesNoChar | string;
  /** 创建时间 */
  createTime?: string;
}

/**
 * 系统参数创建参数
 */
export interface IConfigCreateParams {
  /** 参数名称 */
  configName: string;
  /** 参数键名 */
  configKey: string;
  /** 参数键值 */
  configValue: string;
  /** 是否内置 */
  configType?: YesNoChar | string;
  /** 备注 */
  remark?: string;
}

/**
 * 系统参数更新参数
 */
export interface IConfigUpdateParams extends Partial<IConfigCreateParams> {
  /** 参数主键 */
  configId: IdType;
}

/**
 * 系统参数列表响应
 */
export type IConfigListResponse = IPaginationResponse<IConfig>;
