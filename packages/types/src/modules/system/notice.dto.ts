import type { StatusEnum, NoticeTypeEnum } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 通知公告实体
 */
export interface INotice extends IBaseEntity {
  /** 公告ID */
  noticeId: IdType;
  /** 租户编号 */
  tenantId?: IdType;
  /** 公告标题 */
  noticeTitle: string;
  /** 公告类型 */
  noticeType: NoticeTypeEnum | string;
  /** 公告内容 */
  noticeContent?: string;
  /** 公告状态 */
  status?: StatusEnum | string;
  /** 创建者名称 */
  createByName?: string;
}

/**
 * 通知公告查询参数
 */
export interface INoticeSearchParams extends IPaginationParams {
  /** 公告标题 */
  noticeTitle?: string;
  /** 公告类型 */
  noticeType?: NoticeTypeEnum | string;
}

/**
 * 通知公告创建参数
 */
export interface INoticeCreateParams {
  /** 公告标题 */
  noticeTitle: string;
  /** 公告类型 */
  noticeType: NoticeTypeEnum | string;
  /** 公告内容 */
  noticeContent?: string;
  /** 公告状态 */
  status?: StatusEnum | string;
}

/**
 * 通知公告更新参数
 */
export interface INoticeUpdateParams extends Partial<INoticeCreateParams> {
  /** 公告ID */
  noticeId: IdType;
}

/**
 * 通知公告列表响应
 */
export type INoticeListResponse = IPaginationResponse<INotice>;
