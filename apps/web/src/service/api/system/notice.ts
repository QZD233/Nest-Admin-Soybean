import { request } from '@/service/request';

/** 通知公告列表 */
export function fetchNoticeFindAll(params?: Api.System.NoticeSearchParams) {
  return request<Api.System.NoticeList>({
    url: '/system/notice/list',
    method: 'get',
    params
  });
}

/** 通知公告详情 */
export function fetchNoticeFindOne(id: CommonType.IdType) {
  return request<Api.System.Notice>({
    url: `/system/notice/${id}`,
    method: 'get'
  });
}

/** 创建通知公告 */
export function fetchNoticeCreate(data: Api.System.NoticeOperateParams) {
  return request<void>({
    url: '/system/notice',
    method: 'post',
    data
  });
}

/** 更新通知公告 */
export function fetchNoticeUpdate(data: Api.System.NoticeOperateParams) {
  return request<void>({
    url: '/system/notice',
    method: 'put',
    data
  });
}

/** 删除通知公告 */
export function fetchNoticeRemove(id: CommonType.IdType) {
  return request<void>({
    url: `/system/notice/${id}`,
    method: 'delete'
  });
}
