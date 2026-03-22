import { request } from '@/service/request';

/** 数据源列表 */
export function fetchDataSourceList(params?: Api.Tool.DataSourceSearchParams) {
  return request<Api.Tool.DataSourceList>({
    url: '/tool/gen/datasource/list',
    method: 'get',
    params
  });
}

/** 数据源详情 */
export function fetchDataSourceFindOne(id: CommonType.IdType) {
  return request<Api.Tool.DataSource>({
    url: `/tool/gen/datasource/${id}`,
    method: 'get'
  });
}

/** 创建数据源 */
export function fetchDataSourceCreate(data: Api.Tool.DataSourceOperateParams) {
  return request<void>({
    url: '/tool/gen/datasource',
    method: 'post',
    data
  });
}

/** 更新数据源 */
export function fetchDataSourceUpdate(id: number, data: Api.Tool.DataSourceOperateParams) {
  return request<void>({
    url: `/tool/gen/datasource/${id}`,
    method: 'put',
    data
  });
}

/** 删除数据源 */
export function fetchDataSourceDelete(id: CommonType.IdType) {
  return request<void>({
    url: `/tool/gen/datasource/${id}`,
    method: 'delete'
  });
}

/** 测试数据源连接 */
export function fetchDataSourceTestConnection(data: Api.Tool.DataSourceOperateParams) {
  return request<boolean>({
    url: '/tool/gen/datasource/test',
    method: 'post',
    data
  });
}

/** 测试已保存的数据源连接 */
export function fetchDataSourceTestConnectionById(id: CommonType.IdType) {
  return request<boolean>({
    url: `/tool/gen/datasource/${id}/test`,
    method: 'get'
  });
}

/** 获取数据源的表列表 */
export function fetchDataSourceGetTables(id: CommonType.IdType) {
  return request<Api.Tool.TableName[]>({
    url: `/tool/gen/datasource/${id}/tables`,
    method: 'get'
  });
}

/** 获取表的列信息 */
export function fetchDataSourceGetColumns(id: number, tableName: string) {
  return request<Api.Tool.DbColumn[]>({
    url: `/tool/gen/datasource/${id}/tables/${tableName}/columns`,
    method: 'get'
  });
}
