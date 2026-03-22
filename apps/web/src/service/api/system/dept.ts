import { request } from '@/service/request';

/** 部门列表 */
export function fetchDeptFindAll(params?: Api.System.DeptSearchParams) {
  return request<Api.System.Dept[]>({
    url: '/system/dept/list',
    method: 'get',
    params
  });
}

/** 部门详情 */
export function fetchDeptFindOne(id: CommonType.IdType) {
  return request<Api.System.Dept>({
    url: `/system/dept/${id}`,
    method: 'get'
  });
}

/** 创建部门 */
export function fetchDeptCreate(data: Api.System.DeptOperateParams) {
  return request<void>({
    url: '/system/dept',
    method: 'post',
    data
  });
}

/** 更新部门 */
export function fetchDeptUpdate(data: Api.System.DeptOperateParams) {
  return request<void>({
    url: '/system/dept',
    method: 'put',
    data
  });
}

/** 删除部门 */
export function fetchDeptRemove(id: CommonType.IdType) {
  return request<void>({
    url: `/system/dept/${id}`,
    method: 'delete'
  });
}

/** 部门排除节点列表 */
export function fetchDeptFindListExclude(id: CommonType.IdType) {
  return request<Api.System.Dept[]>({
    url: `/system/dept/list/exclude/${id}`,
    method: 'get'
  });
}

/** 部门选择框列表 */
export function fetchDeptOptionselect() {
  return request<Api.System.DeptTreeNode[]>({
    url: '/system/dept/optionselect',
    method: 'get'
  });
}
