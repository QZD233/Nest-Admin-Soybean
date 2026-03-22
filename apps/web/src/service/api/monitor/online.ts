import { request } from '@/service/request';

/** 在线用户列表 */
export function fetchOnlineFindAll(params?: Api.Monitor.OnlineUserSearchParams) {
  return request<Api.Monitor.OnlineUserList>({
    url: '/monitor/online/list',
    method: 'get',
    params
  });
}

/** 强退用户 */
export function fetchOnlineDelete(token: string) {
  return request<void>({
    url: `/monitor/online/${token}`,
    method: 'delete'
  });
}

/** 强退当前在线设备 */
export function fetchKickOutCurrentDevice(tokenId: string) {
  return request<boolean>({
    url: `/monitor/online/myself/${tokenId}`,
    method: 'delete'
  });
}

/** 获取在线设备列表 */
export function fetchGetOnlineDeviceList(params?: Api.Monitor.OnlineUserSearchParams) {
  return request<Api.Monitor.OnlineUserList>({
    url: '/monitor/online',
    method: 'get',
    params
  });
}
