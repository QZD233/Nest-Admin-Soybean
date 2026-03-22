import { request } from '@/service/request';

/** 上传 OSS 文件 */
export function fetchOssUploadFile(formData: FormData) {
  return request<Api.System.Oss>({
    url: '/resource/oss/upload',
    method: 'post',
    data: formData
  });
}

/** OSS 文件列表 */
export function fetchOssFindAll(params?: Api.System.OssSearchParams) {
  return request<Api.System.OssList>({
    url: '/resource/oss/list',
    method: 'get',
    params
  });
}

/** 根据 ID 列表查询 OSS 文件 */
export function fetchOssFindByIds(ids: CommonType.IdType | string) {
  return request<Api.System.Oss[]>({
    url: `/resource/oss/listByIds/${ids}`,
    method: 'get'
  });
}

/** OSS 文件详情 */
export function fetchOssFindOne(id: CommonType.IdType) {
  return request<Api.System.Oss>({
    url: `/resource/oss/${id}`,
    method: 'get'
  });
}

/** 删除 OSS 文件 */
export function fetchOssRemove(ids: CommonType.IdType | string) {
  return request<void>({
    url: `/resource/oss/${ids}`,
    method: 'delete'
  });
}
