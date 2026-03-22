import { request } from '@/service/request';

// ==================== 字典类型 ====================

/** 字典类型列表 */
export function fetchDictFindAllType(params?: Api.System.DictTypeSearchParams) {
  return request<Api.System.DictTypeList>({
    url: '/system/dict/type/list',
    method: 'get',
    params
  });
}

/** 字典类型详情 */
export function fetchDictFindOneType(id: CommonType.IdType) {
  return request<Api.System.DictType>({
    url: `/system/dict/type/${id}`,
    method: 'get'
  });
}

/** 创建字典类型 */
export function fetchDictCreateType(data: Api.System.DictTypeOperateParams) {
  return request<void>({
    url: '/system/dict/type',
    method: 'post',
    data
  });
}

/** 更新字典类型 */
export function fetchDictUpdateType(data: Api.System.DictTypeOperateParams) {
  return request<void>({
    url: '/system/dict/type',
    method: 'put',
    data
  });
}

/** 删除字典类型 */
export function fetchDictDeleteType(id: CommonType.IdType) {
  return request<void>({
    url: `/system/dict/type/${id}`,
    method: 'delete'
  });
}

/** 字典类型下拉选项 */
export function fetchDictFindOptionselect() {
  return request<Api.System.DictType[]>({
    url: '/system/dict/type/optionselect',
    method: 'get'
  });
}

/** 刷新字典缓存 */
export function fetchDictRefreshCache() {
  return request<void>({
    url: '/system/dict/type/refreshCache',
    method: 'delete'
  });
}

// ==================== 字典数据 ====================

/** 字典数据列表 */
export function fetchDictFindAllData(params?: Api.System.DictDataSearchParams) {
  return request<Api.System.DictDataList>({
    url: '/system/dict/data/list',
    method: 'get',
    params
  });
}

/** 字典数据详情 */
export function fetchDictFindOneData(id: CommonType.IdType) {
  return request<Api.System.DictData>({
    url: `/system/dict/data/${id}`,
    method: 'get'
  });
}

/** 创建字典数据 */
export function fetchDictCreateDictData(data: Api.System.DictDataOperateParams) {
  return request<void>({
    url: '/system/dict/data',
    method: 'post',
    data
  });
}

/** 更新字典数据 */
export function fetchDictUpdateDictData(data: Api.System.DictDataOperateParams) {
  return request<void>({
    url: '/system/dict/data',
    method: 'put',
    data
  });
}

/** 删除字典数据 */
export function fetchDictDeleteDictData(id: CommonType.IdType) {
  return request<void>({
    url: `/system/dict/data/${id}`,
    method: 'delete'
  });
}

/** 按类型查询字典数据（缓存） */
export function fetchDictFindDataByType(dictType: string) {
  return request<Api.System.DictData[]>({
    url: `/system/dict/data/type/${dictType}`,
    method: 'get'
  });
}
