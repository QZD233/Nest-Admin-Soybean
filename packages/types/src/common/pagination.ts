import type { SortRuleType } from '../enums';

/**
 * 分页请求参数
 */
export interface IPaginationParams {
  /** 当前页码 */
  pageNum: number;
  /** 每页数量 */
  pageSize: number;
  /** 排序字段 */
  orderByColumn?: string;
  /** 排序方向 */
  isAsc?: SortRuleType;
}

/**
 * 通用查询参数（带分页）
 */
export interface ICommonSearchParams extends IPaginationParams {
  /** 额外参数 */
  params?: Record<string, unknown>;
}

/**
 * 分页响应
 */
export interface IPaginationResponse<T> {
  /** 数据列表 */
  rows: T[];
  /** 总数量 */
  total: number;
  /** 当前页码 */
  pageNum?: number;
  /** 每页数量 */
  pageSize?: number;
}

/**
 * 通用列表响应（别名）
 */
export type IListResponse<T> = IPaginationResponse<T>;
