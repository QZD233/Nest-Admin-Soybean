import type { IBaseEntity, IdType, RecordNullable, EnableStatus } from '../../common';
import type { SmsChannelCode, SmsTemplateType, SmsSendStatus, SmsReceiveStatus } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 短信渠道
 */
export interface ISmsChannel extends IBaseEntity {
  /** 渠道ID */
  id: IdType;
  /** 渠道编码 */
  code: SmsChannelCode;
  /** 渠道名称 */
  name: string;
  /** 短信签名 */
  signature: string;
  /** API Key */
  apiKey: string;
  /** API Secret */
  apiSecret: string;
  /** 回调地址 */
  callbackUrl?: string;
  /** 状态 */
  status: EnableStatus;
}

/**
 * 短信渠道搜索参数
 */
export type ISmsChannelSearchParams = RecordNullable<Pick<ISmsChannel, 'name' | 'code' | 'status'>> & IPaginationParams;

/**
 * 短信渠道操作参数
 */
export type ISmsChannelOperateParams = RecordNullable<
  Pick<ISmsChannel, 'id' | 'code' | 'name' | 'signature' | 'apiKey' | 'apiSecret' | 'callbackUrl' | 'status' | 'remark'>
>;

/**
 * 短信渠道列表响应
 */
export type ISmsChannelListResponse = IPaginationResponse<ISmsChannel>;

/**
 * 短信模板
 */
export interface ISmsTemplate extends IBaseEntity {
  /** 模板ID */
  id: IdType;
  /** 渠道ID */
  channelId: IdType;
  /** 渠道编码 */
  channelCode: string;
  /** 模板编码 */
  code: string;
  /** 模板名称 */
  name: string;
  /** 模板内容 */
  content: string;
  /** 参数列表 */
  params?: string[];
  /** 第三方模板ID */
  apiTemplateId: string;
  /** 模板类型 */
  type: SmsTemplateType;
  /** 状态 */
  status: EnableStatus;
}

/**
 * 短信模板搜索参数
 */
export type ISmsTemplateSearchParams = RecordNullable<
  Pick<ISmsTemplate, 'name' | 'code' | 'channelId' | 'type' | 'status'>
> &
  IPaginationParams;

/**
 * 短信模板操作参数
 */
export type ISmsTemplateOperateParams = RecordNullable<
  Pick<
    ISmsTemplate,
    'id' | 'channelId' | 'code' | 'name' | 'content' | 'params' | 'apiTemplateId' | 'type' | 'status' | 'remark'
  >
>;

/**
 * 短信模板列表响应
 */
export type ISmsTemplateListResponse = IPaginationResponse<ISmsTemplate>;

/**
 * 短信日志
 */
export interface ISmsLog extends IBaseEntity {
  /** 日志ID */
  id: IdType;
  /** 渠道ID */
  channelId: IdType;
  /** 渠道编码 */
  channelCode: string;
  /** 模板ID */
  templateId: IdType;
  /** 模板编码 */
  templateCode: string;
  /** 手机号 */
  mobile: string;
  /** 短信内容 */
  content: string;
  /** 参数 */
  params?: Record<string, string>;
  /** 发送状态 */
  sendStatus: SmsSendStatus;
  /** 发送时间 */
  sendTime: string;
  /** 接收状态 */
  receiveStatus?: SmsReceiveStatus;
  /** 接收时间 */
  receiveTime?: string;
  /** 第三方发送编码 */
  apiSendCode?: string;
  /** 第三方接收编码 */
  apiReceiveCode?: string;
  /** 错误信息 */
  errorMsg?: string;
}

/**
 * 短信日志搜索参数
 */
export type ISmsLogSearchParams = RecordNullable<Pick<ISmsLog, 'mobile' | 'channelId' | 'templateId' | 'sendStatus'>> &
  IPaginationParams & {
    sendTimeStart?: string;
    sendTimeEnd?: string;
  };

/**
 * 短信日志列表响应
 */
export type ISmsLogListResponse = IPaginationResponse<ISmsLog>;

/**
 * 发送短信参数
 */
export interface ISendSmsParams {
  /** 手机号 */
  mobile: string;
  /** 模板编码 */
  templateCode: string;
  /** 参数 */
  params?: Record<string, string>;
}

/**
 * 批量发送短信参数
 */
export interface IBatchSendSmsParams {
  /** 手机号列表 */
  mobiles: string[];
  /** 模板编码 */
  templateCode: string;
  /** 参数 */
  params?: Record<string, string>;
}
