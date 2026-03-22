/**
 * 排序规则枚举
 * - ASCENDING: 升序
 * - DESCENDING: 降序
 */
export enum SortRuleEnum {
  /** 升序 */
  ASCENDING = 'ascending',
  /** 降序 */
  DESCENDING = 'descending',
}

/** 排序规则类型 */
export type SortRuleType = `${SortRuleEnum}`;
