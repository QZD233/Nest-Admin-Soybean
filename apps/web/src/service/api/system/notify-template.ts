import { request } from '@/service/request';

/** 站内信模板列表 */
export function fetchNotifyTemplateFindAll(params?: Api.System.NotifyTemplateSearchParams) {
  return request<Api.System.NotifyTemplateList>({
    url: '/system/notify/template/list',
    method: 'get',
    params
  });
}

/** 站内信模板详情 */
export function fetchNotifyTemplateFindOne(id: CommonType.IdType) {
  return request<Api.System.NotifyTemplate>({
    url: `/system/notify/template/${id}`,
    method: 'get'
  });
}

/** 创建站内信模板 */
export function fetchNotifyTemplateCreate(data: Api.System.NotifyTemplateOperateParams) {
  return request<void>({
    url: '/system/notify/template',
    method: 'post',
    data
  });
}

/** 更新站内信模板 */
export function fetchNotifyTemplateUpdate(data: Api.System.NotifyTemplateOperateParams) {
  return request<void>({
    url: '/system/notify/template',
    method: 'put',
    data
  });
}

/** 删除站内信模板 */
export function fetchNotifyTemplateRemove(id: CommonType.IdType) {
  return request<void>({
    url: `/system/notify/template/${id}`,
    method: 'delete'
  });
}

/** 站内信模板下拉选择 */
export function fetchNotifyTemplateSelect() {
  return request<Api.System.NotifyTemplateSelect[]>({
    url: '/system/notify/template/select',
    method: 'get'
  });
}
