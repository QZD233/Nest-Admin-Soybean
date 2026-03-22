import type { StatusEnum, DataScopeEnum } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 角色实体
 */
export interface IRole extends IBaseEntity {
  /** 角色ID */
  roleId: IdType;
  /** 角色名称 */
  roleName: string;
  /** 角色权限字符串 */
  roleKey: string;
  /** 显示顺序 */
  roleSort: number;
  /** 数据范围 */
  dataScope?: DataScopeEnum | string;
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean;
  /** 部门树选择项是否关联显示 */
  deptCheckStrictly?: boolean;
  /** 角色状态 */
  status?: StatusEnum | string;
  /** 用户是否存在此角色标识 */
  flag?: boolean;
  /** 是否管理员 */
  superAdmin?: boolean;
}

/**
 * 角色查询参数
 */
export interface IRoleSearchParams extends IPaginationParams {
  /** 角色名称 */
  roleName?: string;
  /** 角色权限字符串 */
  roleKey?: string;
  /** 角色状态 */
  status?: StatusEnum | string;
}

/**
 * 角色创建参数
 */
export interface IRoleCreateParams {
  /** 角色名称 */
  roleName: string;
  /** 角色权限字符串 */
  roleKey: string;
  /** 显示顺序 */
  roleSort: number;
  /** 数据范围 */
  dataScope?: DataScopeEnum | string;
  /** 菜单树选择项是否关联显示 */
  menuCheckStrictly?: boolean;
  /** 部门树选择项是否关联显示 */
  deptCheckStrictly?: boolean;
  /** 角色状态 */
  status?: StatusEnum | string;
  /** 备注 */
  remark?: string;
  /** 菜单ID列表 */
  menuIds?: IdType[];
  /** 部门ID列表 */
  deptIds?: IdType[];
}

/**
 * 角色更新参数
 */
export interface IRoleUpdateParams extends Partial<IRoleCreateParams> {
  /** 角色ID */
  roleId: IdType;
}

/**
 * 角色列表响应
 */
export type IRoleListResponse = IPaginationResponse<IRole>;

/**
 * 角色菜单树选择响应
 */
export interface IRoleMenuTreeSelect {
  /** 已选中的菜单ID */
  checkedKeys: IdType[];
  /** 菜单树 */
  menus: IMenu[];
}

// 前向声明
import type { IMenu } from './menu.dto';
