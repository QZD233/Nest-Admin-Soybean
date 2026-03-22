import { request } from '@/service/request';

/** 客户端列表 */
export function fetchClientFindAll(params?: Api.System.ClientSearchParams) {
  return request<Api.System.ClientList>({
    url: '/system/client/list',
    method: 'get',
    params
  });
}

/** 客户端详情 */
export function fetchClientFindOne(id: CommonType.IdType) {
  return request<Api.System.Client>({
    url: `/system/client/${id}`,
    method: 'get'
  });
}

/** 创建客户端 */
export function fetchClientCreate(data: Api.System.ClientOperateParams) {
  return request<void>({
    url: '/system/client',
    method: 'post',
    data
  });
}

/** 更新客户端 */
export function fetchClientUpdate(data: Api.System.ClientOperateParams) {
  return request<void>({
    url: '/system/client',
    method: 'put',
    data
  });
}

/** 删除客户端 */
export function fetchClientRemove(ids: CommonType.IdType | string) {
  return request<void>({
    url: `/system/client/${ids}`,
    method: 'delete'
  });
}

/** 修改客户端状态 */
export function fetchClientChangeStatus(data: { id: number; status: string }) {
  return request<void>({
    url: '/system/client/changeStatus',
    method: 'put',
    data
  });
}
