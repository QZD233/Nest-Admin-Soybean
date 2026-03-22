import { request } from '@/service/request';

/** 获取缓存监控信息 */
export function fetchCacheGetInfo() {
  return request<Api.Monitor.CacheInfo>({
    url: '/monitor/cache',
    method: 'get'
  });
}

/** 获取缓存名称列表 */
export function fetchCacheGetNames() {
  return request<Api.Monitor.CacheName[]>({
    url: '/monitor/cache/getNames',
    method: 'get'
  });
}

/** 获取缓存键名列表 */
export function fetchCacheGetKeys(cacheName: string) {
  return request<string[]>({
    url: `/monitor/cache/getKeys/${cacheName}`,
    method: 'get'
  });
}

/** 获取缓存内容 */
export function fetchCacheGetValue(cacheName: string, cacheKey: string) {
  return request<Api.Monitor.CacheValue>({
    url: `/monitor/cache/getValue/${cacheName}/${cacheKey}`,
    method: 'get'
  });
}

/** 清理缓存名称 */
export function fetchCacheClearCacheName(cacheName: string) {
  return request<void>({
    url: `/monitor/cache/clearCacheName/${cacheName}`,
    method: 'delete'
  });
}

/** 清理缓存键名 */
export function fetchCacheClearCacheKey(cacheKey: string) {
  return request<void>({
    url: `/monitor/cache/clearCacheKey/${cacheKey}`,
    method: 'delete'
  });
}

/** 清理全部缓存 */
export function fetchCacheClearCacheAll() {
  return request<void>({
    url: '/monitor/cache/clearCacheAll',
    method: 'delete'
  });
}
