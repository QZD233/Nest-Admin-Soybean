/**
 * 基础实体字段
 */
export interface IBaseEntity {
  /** 创建者 */
  createBy?: string;
  /** 创建部门 */
  createDept?: unknown;
  /** 创建时间 */
  createTime?: string;
  /** 更新者 */
  updateBy?: string;
  /** 更新时间 */
  updateTime?: string;
  /** 备注 */
  remark?: string;
}

/**
 * 租户实体字段
 */
export interface ITenantEntity extends IBaseEntity {
  /** 租户ID */
  tenantId?: string;
}

/**
 * ID 类型（支持数字和字符串）
 */
export type IdType = number | string;

/**
 * 将对象属性转为可空类型
 */
export type RecordNullable<T> = {
  [K in keyof T]?: T[K] | null;
};

/**
 * 树形结构节点
 */
export interface ITreeNode<T = unknown> {
  /** 节点ID */
  id: IdType;
  /** 父节点ID */
  parentId: IdType;
  /** 子节点 */
  children?: (T & ITreeNode<T>)[];
}

/**
 * 通用树形记录
 */
export interface ICommonTreeRecord {
  /** 记录ID */
  id: IdType;
  /** 父记录ID */
  parentId: IdType;
  /** 记录标签 */
  label: string;
  /** 权重 */
  weight: number;
  /** 子记录 */
  children: ICommonTreeRecord[];
}

/**
 * 启用状态类型
 *
 * - "0": 正常
 * - "1": 停用
 */
export type EnableStatus = '0' | '1';

/**
 * 显示状态类型
 *
 * - "0": 显示
 * - "1": 隐藏
 */
export type VisibleStatus = '0' | '1';

/**
 * 是否状态类型
 *
 * - "Y": 是
 * - "N": 否
 */
export type YesOrNoStatus = 'Y' | 'N';
