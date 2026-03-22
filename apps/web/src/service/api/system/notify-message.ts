import { request } from '@/service/request';

/** 站内信列表（管理员） */
export function fetchNotifyMessageFindAll(params?: Api.System.NotifyMessageSearchParams) {
  return request<Api.System.NotifyMessageList>({
    url: '/system/notify/message/list',
    method: 'get',
    params
  });
}

/** 我的消息列表 */
export function fetchNotifyMessageMyList(params?: Api.System.MyNotifyMessageSearchParams) {
  return request<Api.System.NotifyMessageList>({
    url: '/system/notify/message/my-list',
    method: 'get',
    params
  });
}

/** 站内信详情 */
export function fetchNotifyMessageFindOne(id: string) {
  return request<Api.System.NotifyMessage>({
    url: `/system/notify/message/${id}`,
    method: 'get'
  });
}

/** 发送站内信 */
export function fetchNotifyMessageSend(data: Api.System.SendNotifyMessageParams) {
  return request<void>({
    url: '/system/notify/message/send',
    method: 'post',
    data
  });
}

/** 群发站内信 */
export function fetchNotifyMessageSendAll(data: Api.System.SendNotifyAllParams) {
  return request<void>({
    url: '/system/notify/message/send-all',
    method: 'post',
    data
  });
}

/** 未读数量 */
export function fetchNotifyMessageUnreadCount() {
  return request<Api.System.UnreadCountResponse>({
    url: '/system/notify/message/unread-count',
    method: 'get'
  });
}

/** 最近消息 */
export function fetchNotifyMessageRecent() {
  return request<Api.System.NotifyMessage[]>({
    url: '/system/notify/message/recent',
    method: 'get'
  });
}

/** 标记已读 */
export function fetchNotifyMessageRead(id: string) {
  return request<void>({
    url: `/system/notify/message/read/${id}`,
    method: 'put'
  });
}

/** 批量标记已读 */
export function fetchNotifyMessageReadBatch(ids: CommonType.IdType | string) {
  return request<void>({
    url: `/system/notify/message/read-batch/${ids}`,
    method: 'put'
  });
}

/** 全部标记已读 */
export function fetchNotifyMessageReadAll() {
  return request<void>({
    url: '/system/notify/message/read-all',
    method: 'put'
  });
}

/** 删除站内信 */
export function fetchNotifyMessageRemove(id: string) {
  return request<void>({
    url: `/system/notify/message/${id}`,
    method: 'delete'
  });
}

/** 批量删除站内信 */
export function fetchNotifyMessageRemoveBatch(ids: CommonType.IdType | string) {
  return request<void>({
    url: `/system/notify/message/batch/${ids}`,
    method: 'delete'
  });
}
