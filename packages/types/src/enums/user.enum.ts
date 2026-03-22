/**
 * 性别枚举
 * - MAN (0): 男
 * - WOMAN (1): 女
 * - UNKNOWN (2): 未知
 */
export enum SexEnum {
  /** 男 */
  MAN = '0',
  /** 女 */
  WOMAN = '1',
  /** 未知 */
  UNKNOWN = '2',
}

/** 性别类型 */
export type SexType = `${SexEnum}`;
