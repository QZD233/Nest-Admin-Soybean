import type { StatusEnum, MenuTypeEnum, IsFrameEnum } from '../../enums';
import type { IBaseEntity, IdType } from '../../common';

/**
 * 菜单实体
 */
export interface IMenu extends IBaseEntity {
  /** 菜单 ID */
  menuId: IdType;
  /** 父菜单 ID */
  parentId: IdType;
  /** 菜单名称 */
  menuName: string;
  /** 显示顺序 */
  orderNum: number;
  /** 路由地址 */
  path?: string;
  /** 组件路径 */
  component?: string;
  /** 路由参数 */
  query?: string;
  /** 是否为外链 */
  isFrame?: IsFrameEnum | string;
  /** 是否缓存 */
  isCache?: StatusEnum | string;
  /** 菜单类型 */
  menuType: MenuTypeEnum | string;
  /** 显示状态 */
  visible?: StatusEnum | string;
  /** 菜单状态 */
  status?: StatusEnum | string;
  /** 权限标识 */
  perms?: string;
  /** 菜单图标 */
  icon?: string;
  /** 父菜单名称 */
  parentName?: string;
  /** 子菜单 */
  children?: IMenu[];
  /** 节点 ID（树形用） */
  id?: IdType;
  /** 节点标签（树形用） */
  label?: string;
}

/**
 * 菜单查询参数
 */
export interface IMenuSearchParams {
  /** 菜单名称 */
  menuName?: string;
  /** 菜单状态 */
  status?: StatusEnum | string;
  /** 菜单类型 */
  menuType?: MenuTypeEnum | string;
  /** 父菜单ID */
  parentId?: IdType;
}

/**
 * 菜单创建参数
 */
export interface IMenuCreateParams {
  /** 父菜单ID */
  parentId: IdType;
  /** 菜单名称 */
  menuName: string;
  /** 显示顺序 */
  orderNum: number;
  /** 路由地址 */
  path?: string;
  /** 组件路径 */
  component?: string;
  /** 路由参数 */
  query?: string;
  /** 是否为外链 */
  isFrame?: IsFrameEnum | string;
  /** 是否缓存 */
  isCache?: StatusEnum | string;
  /** 菜单类型 */
  menuType: MenuTypeEnum | string;
  /** 显示状态 */
  visible?: StatusEnum | string;
  /** 菜单状态 */
  status?: StatusEnum | string;
  /** 权限标识 */
  perms?: string;
  /** 菜单图标 */
  icon?: string;
  /** 备注 */
  remark?: string;
}

/**
 * 菜单更新参数
 */
export interface IMenuUpdateParams extends Partial<IMenuCreateParams> {
  /** 菜单ID */
  menuId: IdType;
}

/**
 * 菜单列表（树形结构）
 */
export type IMenuList = IMenu[];

/**
 * 菜单树选项
 */
export interface IMenuTreeOption {
  /** 节点ID */
  id: IdType;
  /** 节点标签 */
  label: string;
  /** 子节点 */
  children?: IMenuTreeOption[];
}
