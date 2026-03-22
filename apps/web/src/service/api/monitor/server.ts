import { request } from '@/service/request';

/** 获取服务器信息 */
export function fetchServerGetInfo() {
  return request<Api.Monitor.ServerInfo>({
    url: '/monitor/server',
    method: 'get'
  });
}
