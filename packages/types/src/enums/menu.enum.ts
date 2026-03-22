/**
 * 菜单类型枚举
 * - M: 目录
 * - C: 菜单
 * - F: 按钮
 */
export enum MenuTypeEnum {
  /** 目录 */
  M = 'M',
  /** 菜单 */
  C = 'C',
  /** 按钮 */
  F = 'F',
}

/**
 * 是否外链枚举
 * - YES (0): 是
 * - NO (1): 否
 * - IFRAME (2): iframe
 */
export enum IsFrameEnum {
  /** 是外链 */
  YES = '0',
  /** 否 */
  NO = '1',
  /** iframe */
  IFRAME = '2',
}

/** 菜单类型 */
export type MenuType = `${MenuTypeEnum}`;
