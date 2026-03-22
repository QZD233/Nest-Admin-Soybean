import { request } from '@/service/request';

/** 短信渠道列表 */
export function fetchSmsChannelFindAll(params?: Api.System.SmsChannelSearchParams) {
  return request<Api.System.SmsChannelList>({
    url: '/system/sms/channel/list',
    method: 'get',
    params
  });
}

/** 短信渠道详情 */
export function fetchSmsChannelFindOne(id: CommonType.IdType) {
  return request<Api.System.SmsChannel>({
    url: `/system/sms/channel/${id}`,
    method: 'get'
  });
}

/** 创建短信渠道 */
export function fetchSmsChannelCreate(data: Api.System.SmsChannelOperateParams) {
  return request<void>({
    url: '/system/sms/channel',
    method: 'post',
    data
  });
}

/** 更新短信渠道 */
export function fetchSmsChannelUpdate(data: Api.System.SmsChannelOperateParams) {
  return request<void>({
    url: '/system/sms/channel',
    method: 'put',
    data
  });
}

/** 删除短信渠道 */
export function fetchSmsChannelRemove(id: CommonType.IdType) {
  return request<void>({
    url: `/system/sms/channel/${id}`,
    method: 'delete'
  });
}

/** 获取启用的短信渠道列表 */
export function fetchSmsChannelGetEnabledChannels() {
  return request<Api.System.SmsChannel[]>({
    url: '/system/sms/channel/enabled',
    method: 'get'
  });
}
