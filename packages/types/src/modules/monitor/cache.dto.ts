import type { IBaseEntity } from '../../common';

/**
 * Redis 信息
 */
export interface IRedisInfo {
  /** Redis 版本 */
  redis_version: string;
  /** 运行模式 */
  redis_mode: string;
  /** 端口 */
  tcp_port: number;
  /** 客户端数 */
  connected_clients: number;
  /** 运行时间(天) */
  uptime_in_days: number;
  /** 使用内存 */
  used_memory_human: string;
  /** 使用 CPU */
  used_cpu_user_children: string;
  /** 内存配置 */
  maxmemory_human: number;
  /** AOF 是否开启 */
  aof_enabled: string;
  /** RDB 是否成功 */
  rdb_last_bgsave_status: string;
  /** Key 数量 */
  dbSize: number;
  /** 网络入口 */
  instantaneous_input_kbps: number;
  /** 网络出口 */
  instantaneous_output_kbps: number;
}

/**
 * 命令统计
 */
export interface ICommandStat {
  name: string;
  value: number;
}

/**
 * 缓存信息
 */
export interface ICacheInfo extends IBaseEntity {
  /** Redis 信息 */
  info: IRedisInfo;
  /** 数据库大小 */
  dbSize: number;
  /** 命令统计 */
  commandStats: ICommandStat[];
}

/**
 * 缓存名称
 */
export interface ICacheName extends IBaseEntity {
  /** 缓存名称 */
  cacheName: string;
  /** 备注 */
  remark: string;
}

/**
 * 缓存内容
 */
export interface ICacheContent extends IBaseEntity {
  /** 缓存名称 */
  cacheName: string;
  /** 缓存键名 */
  cacheKey: string;
  /** 缓存内容 */
  cacheValue: string;
}
