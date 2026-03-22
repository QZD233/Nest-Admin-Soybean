import { request } from '@/service/request';

/** 获取路由菜单 */
export function fetchMenuGetRouters() {
  return request<Api.System.MenuRoute[]>({
    url: '/system/menu/getRouters',
    method: 'get'
  });
}

/** 菜单列表 */
export function fetchMenuFindAll(params?: Api.System.MenuSearchParams) {
  return request<Api.System.Menu[]>({
    url: '/system/menu/list',
    method: 'get',
    params
  });
}

/** 菜单详情 */
export function fetchMenuFindOne(menuId: CommonType.IdType) {
  return request<Api.System.Menu>({
    url: `/system/menu/${menuId}`,
    method: 'get'
  });
}

/** 创建菜单 */
export function fetchMenuCreate(data: Api.System.MenuOperateParams) {
  return request<void>({
    url: '/system/menu',
    method: 'post',
    data
  });
}

/** 更新菜单 */
export function fetchMenuUpdate(data: Api.System.MenuOperateParams) {
  return request<void>({
    url: '/system/menu',
    method: 'put',
    data
  });
}

/** 删除菜单 */
export function fetchMenuRemove(menuId: CommonType.IdType) {
  return request<void>({
    url: `/system/menu/${menuId}`,
    method: 'delete'
  });
}

/** 级联删除菜单 */
export function fetchMenuCascadeRemove(menuIds: string) {
  return request<void>({
    url: `/system/menu/cascade/${menuIds}`,
    method: 'delete'
  });
}

/** 菜单树形选择 */
export function fetchMenuTreeselect() {
  return request<Api.System.MenuTreeNode[]>({
    url: '/system/menu/treeselect',
    method: 'get'
  });
}

/** 角色菜单树 */
export function fetchMenuRoleMenuTreeselect(roleId: CommonType.IdType) {
  return request<{ checkedKeys: number[]; menus: Api.System.MenuTreeNode[] }>({
    url: `/system/menu/roleMenuTreeselect/${roleId}`,
    method: 'get'
  });
}

/** 租户套餐菜单树 */
export function fetchMenuTenantPackageMenuTreeselect(packageId: number) {
  return request<{ checkedKeys: number[]; menus: Api.System.MenuTreeNode[] }>({
    url: `/system/menu/tenantPackageMenuTreeselect/${packageId}`,
    method: 'get'
  });
}
