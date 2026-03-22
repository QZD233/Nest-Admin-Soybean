import type { IBaseEntity, IdType, RecordNullable, EnableStatus } from '../../common';
import type { NotifyTemplateType } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 站内信模板
 */
export interface INotifyTemplate extends IBaseEntity {
  /** 模板ID */
  id: IdType;
  /** 模板名称 */
  name: string;
  /** 模板编码 */
  code: string;
  /** 发送人名称 */
  nickname: string;
  /** 模板内容 */
  content: string;
  /** 参数列表（JSON数组字符串） */
  params?: string;
  /** 类型 */
  type: NotifyTemplateType;
  /** 状态 */
  status: EnableStatus;
}

/**
 * 站内信模板搜索参数
 */
export type INotifyTemplateSearchParams = RecordNullable<Pick<INotifyTemplate, 'name' | 'code' | 'type' | 'status'>> &
  IPaginationParams;

/**
 * 站内信模板操作参数
 */
export type INotifyTemplateOperateParams = RecordNullable<
  Pick<INotifyTemplate, 'id' | 'name' | 'code' | 'nickname' | 'content' | 'params' | 'type' | 'status' | 'remark'>
>;

/**
 * 站内信模板列表响应
 */
export type INotifyTemplateListResponse = IPaginationResponse<INotifyTemplate>;

/**
 * 站内信模板下拉选择项
 */
export interface INotifyTemplateSelect {
  id: IdType;
  name: string;
  code: string;
}

/**
 * 站内信消息
 */
export interface INotifyMessage extends IBaseEntity {
  /** 消息ID */
  id: string;
  /** 租户ID */
  tenantId: string;
  /** 用户ID */
  userId: IdType;
  /** 用户类型 */
  userType: number;
  /** 模板ID */
  templateId: IdType;
  /** 模板编码 */
  templateCode: string;
  /** 发送人名称 */
  templateNickname: string;
  /** 消息内容 */
  templateContent: string;
  /** 模板参数（JSON字符串） */
  templateParams?: string;
  /** 已读状态 */
  readStatus: boolean;
  /** 已读时间 */
  readTime?: string;
}

/**
 * 站内信消息搜索参数（管理员）
 */
export type INotifyMessageSearchParams = RecordNullable<Pick<INotifyMessage, 'userId' | 'templateCode' | 'readStatus'>> &
  IPaginationParams;

/**
 * 我的站内信搜索参数
 */
export type IMyNotifyMessageSearchParams = RecordNullable<Pick<INotifyMessage, 'readStatus'>> & IPaginationParams;

/**
 * 站内信消息列表响应
 */
export type INotifyMessageListResponse = IPaginationResponse<INotifyMessage>;

/**
 * 未读数量响应
 */
export interface IUnreadCountResponse {
  count: number;
}

/**
 * 发送站内信参数
 */
export interface ISendNotifyMessageParams {
  /** 接收用户ID列表 */
  userIds: IdType[];
  /** 模板编码 */
  templateCode: string;
  /** 模板参数 */
  params?: Record<string, string>;
}

/**
 * 发送站内信给所有用户参数
 */
export interface ISendNotifyAllParams {
  /** 模板编码 */
  templateCode: string;
  /** 模板参数 */
  params?: Record<string, string>;
}
