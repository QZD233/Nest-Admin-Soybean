import { request } from '@/service/request';

/** OSS 配置列表 */
export function fetchOssConfigFindAll(params?: Api.System.OssConfigSearchParams) {
  return request<Api.System.OssConfigList>({
    url: '/resource/oss/config/list',
    method: 'get',
    params
  });
}

/** OSS 配置详情 */
export function fetchOssConfigFindOne(id: CommonType.IdType) {
  return request<Api.System.OssConfig>({
    url: `/resource/oss/config/${id}`,
    method: 'get'
  });
}

/** 创建 OSS 配置 */
export function fetchOssConfigCreate(data: Api.System.OssConfigOperateParams) {
  return request<void>({
    url: '/resource/oss/config',
    method: 'post',
    data
  });
}

/** 更新 OSS 配置 */
export function fetchOssConfigUpdate(data: Api.System.OssConfigOperateParams) {
  return request<void>({
    url: '/resource/oss/config',
    method: 'put',
    data
  });
}

/** 删除 OSS 配置 */
export function fetchOssConfigRemove(ids: CommonType.IdType | string) {
  return request<void>({
    url: `/resource/oss/config/${ids}`,
    method: 'delete'
  });
}

/** 修改 OSS 配置状态 */
export function fetchOssConfigChangeStatus(data: { ossConfigId: number; status: string }) {
  return request<void>({
    url: '/resource/oss/config/changeStatus',
    method: 'put',
    data
  });
}
