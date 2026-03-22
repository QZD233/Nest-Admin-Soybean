/**
 * 通知公告类型枚举
 * - NOTICE (1): 通知
 * - ANNOUNCEMENT (2): 公告
 */
export enum NoticeTypeEnum {
  /** 通知 */
  NOTICE = '1',
  /** 公告 */
  ANNOUNCEMENT = '2',
}

/** 通知类型 */
export type NoticeType = `${NoticeTypeEnum}`;
