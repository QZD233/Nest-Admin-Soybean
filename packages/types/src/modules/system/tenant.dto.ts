import type { StatusEnum } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 租户实体
 */
export interface ITenant extends IBaseEntity {
  /** id */
  id: IdType;
  /** 租户编号 */
  tenantId: IdType;
  /** 联系人 */
  contactUserName?: string;
  /** 联系电话 */
  contactPhone?: string;
  /** 企业名称 */
  companyName: string;
  /** 统一社会信用代码 */
  licenseNumber?: string;
  /** 地址 */
  address?: string;
  /** 企业简介 */
  intro?: string;
  /** 域名 */
  domain?: string;
  /** 租户套餐编号 */
  packageId?: IdType;
  /** 过期时间 */
  expireTime?: string;
  /** 用户数量（-1不限制） */
  accountCount?: number;
  /** 租户状态 */
  status?: StatusEnum | string;
  /** 删除标志 */
  delFlag?: string;
}

/**
 * 租户查询参数
 */
export interface ITenantSearchParams extends IPaginationParams {
  /** 租户编号 */
  tenantId?: IdType;
  /** 联系人 */
  contactUserName?: string;
  /** 联系电话 */
  contactPhone?: string;
  /** 企业名称 */
  companyName?: string;
}

/**
 * 租户创建参数
 */
export interface ITenantCreateParams {
  /** 联系人 */
  contactUserName?: string;
  /** 联系电话 */
  contactPhone?: string;
  /** 企业名称 */
  companyName: string;
  /** 统一社会信用代码 */
  licenseNumber?: string;
  /** 地址 */
  address?: string;
  /** 企业简介 */
  intro?: string;
  /** 域名 */
  domain?: string;
  /** 租户套餐编号 */
  packageId?: IdType;
  /** 过期时间 */
  expireTime?: string;
  /** 用户数量 */
  accountCount?: number;
  /** 租户状态 */
  status?: StatusEnum | string;
  /** 备注 */
  remark?: string;
  /** 管理员用户名 */
  username?: string;
  /** 管理员密码 */
  password?: string;
}

/**
 * 租户更新参数
 */
export interface ITenantUpdateParams extends Partial<ITenantCreateParams> {
  /** id */
  id: IdType;
}

/**
 * 租户列表响应
 */
export type ITenantListResponse = IPaginationResponse<ITenant>;

/**
 * 租户套餐实体
 */
export interface ITenantPackage extends IBaseEntity {
  /** 租户套餐id */
  packageId: IdType;
  /** 套餐名称 */
  packageName: string;
  /** 关联菜单id */
  menuIds?: IdType[];
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean;
  /** 状态 */
  status?: StatusEnum | string;
  /** 删除标志 */
  delFlag?: string;
}

/**
 * 租户套餐查询参数
 */
export interface ITenantPackageSearchParams extends IPaginationParams {
  /** 套餐名称 */
  packageName?: string;
  /** 状态 */
  status?: StatusEnum | string;
}

/**
 * 租户套餐创建参数
 */
export interface ITenantPackageCreateParams {
  /** 套餐名称 */
  packageName: string;
  /** 关联菜单id */
  menuIds?: IdType[];
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean;
  /** 状态 */
  status?: StatusEnum | string;
  /** 备注 */
  remark?: string;
}

/**
 * 租户套餐更新参数
 */
export interface ITenantPackageUpdateParams extends Partial<ITenantPackageCreateParams> {
  /** 租户套餐id */
  packageId: IdType;
}

/**
 * 租户套餐列表响应
 */
export type ITenantPackageListResponse = IPaginationResponse<ITenantPackage>;

/**
 * 租户套餐选择列表
 */
export interface ITenantPackageSelectOption {
  /** 套餐ID */
  packageId: IdType;
  /** 套餐名称 */
  packageName: string;
}
