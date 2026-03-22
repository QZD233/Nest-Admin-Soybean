import { request } from '@/service/request';

/** 短信日志列表 */
export function fetchSmsLogFindAll(params?: Api.System.SmsLogSearchParams) {
  return request<Api.System.SmsLogList>({
    url: '/system/sms/log/list',
    method: 'get',
    params
  });
}

/** 短信日志详情 */
export function fetchSmsLogFindOne(id: CommonType.IdType) {
  return request<Api.System.SmsLog>({
    url: `/system/sms/log/${id}`,
    method: 'get'
  });
}

/** 按手机号查询短信日志 */
export function fetchSmsLogFindByMobile(mobile: string) {
  return request<Api.System.SmsLog[]>({
    url: `/system/sms/log/mobile/${mobile}`,
    method: 'get'
  });
}

/** 重新发送短信 */
export function fetchSmsSendResend(id: CommonType.IdType) {
  return request<void>({
    url: `/system/sms/send/resend/${id}`,
    method: 'post'
  });
}
