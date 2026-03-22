/**
 * 监控模块类型导出
 */

// 操作日志
export { type IOperLog, type IOperLogSearchParams, type IOperLogListResponse } from './oper-log.dto';

// 登录日志
export { type ILoginInfor, type ILoginInforSearchParams, type ILoginInforListResponse } from './login-infor.dto';

// 缓存
export {
  type ICacheInfo,
  type ICacheName,
  type ICacheContent,
  type IRedisInfo,
  type ICommandStat,
} from './cache.dto';

// 在线用户
export { type IOnlineUser, type IOnlineUserSearchParams, type IOnlineUserListResponse } from './online.dto';

// 服务器监控
export {
  type IServerInfo,
  type ICpuInfo,
  type IMemInfo,
  type ISysInfo,
  type INodeInfo,
  type ISysFile,
} from './server.dto';

// 定时任务
export { type IJob, type IJobSearchParams, type IJobListResponse, type IJobOperateParams } from './job.dto';

// 调度日志
export { type IJobLog, type IJobLogSearchParams, type IJobLogListResponse } from './job-log.dto';
