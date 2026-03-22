import type { StatusEnum } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams } from '../../common';

/**
 * 部门实体
 */
export interface IDept extends IBaseEntity {
  /** 部门id */
  deptId: IdType;
  /** 租户编号 */
  tenantId?: IdType;
  /** 父部门id */
  parentId: IdType;
  /** 祖级列表 */
  ancestors?: string;
  /** 部门名称 */
  deptName: string;
  /** 部门类别编码 */
  deptCategory?: string;
  /** 显示顺序 */
  orderNum: number;
  /** 负责人 */
  leader?: IdType | string;
  /** 联系电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 部门状态 */
  status?: StatusEnum | string;
  /** 子部门 */
  children?: IDept[];
}

/**
 * 部门查询参数
 */
export interface IDeptSearchParams extends Partial<IPaginationParams> {
  /** 部门名称 */
  deptName?: string;
  /** 部门状态 */
  status?: StatusEnum | string;
}

/**
 * 部门创建参数
 */
export interface IDeptCreateParams {
  /** 父部门ID */
  parentId: IdType;
  /** 部门名称 */
  deptName: string;
  /** 部门类别编码 */
  deptCategory?: string;
  /** 显示顺序 */
  orderNum: number;
  /** 负责人 */
  leader?: IdType | string;
  /** 联系电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 部门状态 */
  status?: StatusEnum | string;
}

/**
 * 部门更新参数
 */
export interface IDeptUpdateParams extends Partial<IDeptCreateParams> {
  /** 部门ID */
  deptId: IdType;
}

/**
 * 部门列表（树形结构）
 */
export type IDeptList = IDept[];

/**
 * 部门树选项
 */
export interface IDeptTreeOption {
  /** 节点ID */
  id: IdType;
  /** 节点标签 */
  label: string;
  /** 子节点 */
  children?: IDeptTreeOption[];
}
