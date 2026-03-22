import { request } from '@/service/request';

/** 短信模板列表 */
export function fetchSmsTemplateFindAll(params?: Api.System.SmsTemplateSearchParams) {
  return request<Api.System.SmsTemplateList>({
    url: '/system/sms/template/list',
    method: 'get',
    params
  });
}

/** 短信模板详情 */
export function fetchSmsTemplateFindOne(id: CommonType.IdType) {
  return request<Api.System.SmsTemplate>({
    url: `/system/sms/template/${id}`,
    method: 'get'
  });
}

/** 创建短信模板 */
export function fetchSmsTemplateCreate(data: Api.System.SmsTemplateOperateParams) {
  return request<void>({
    url: '/system/sms/template',
    method: 'post',
    data
  });
}

/** 更新短信模板 */
export function fetchSmsTemplateUpdate(data: Api.System.SmsTemplateOperateParams) {
  return request<void>({
    url: '/system/sms/template',
    method: 'put',
    data
  });
}

/** 删除短信模板 */
export function fetchSmsTemplateRemove(id: CommonType.IdType) {
  return request<void>({
    url: `/system/sms/template/${id}`,
    method: 'delete'
  });
}
