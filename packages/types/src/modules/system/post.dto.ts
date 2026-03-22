import type { StatusEnum } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 岗位实体
 */
export interface IPost extends IBaseEntity {
  /** 岗位ID */
  postId: IdType;
  /** 租户编号 */
  tenantId?: IdType;
  /** 部门id */
  deptId?: IdType;
  /** 岗位编码 */
  postCode: string;
  /** 类别编码 */
  postCategory?: string;
  /** 岗位名称 */
  postName: string;
  /** 显示顺序 */
  postSort: number;
  /** 状态 */
  status?: StatusEnum | string;
}

/**
 * 岗位查询参数
 */
export interface IPostSearchParams extends IPaginationParams {
  /** 部门ID */
  deptId?: IdType;
  /** 岗位编码 */
  postCode?: string;
  /** 岗位名称 */
  postName?: string;
  /** 状态 */
  status?: StatusEnum | string;
  /** 所属部门ID */
  belongDeptId?: IdType;
}

/**
 * 岗位创建参数
 */
export interface IPostCreateParams {
  /** 部门ID */
  deptId?: IdType;
  /** 岗位编码 */
  postCode: string;
  /** 类别编码 */
  postCategory?: string;
  /** 岗位名称 */
  postName: string;
  /** 显示顺序 */
  postSort: number;
  /** 状态 */
  status?: StatusEnum | string;
  /** 备注 */
  remark?: string;
}

/**
 * 岗位更新参数
 */
export interface IPostUpdateParams extends Partial<IPostCreateParams> {
  /** 岗位ID */
  postId: IdType;
}

/**
 * 岗位列表响应
 */
export type IPostListResponse = IPaginationResponse<IPost>;
