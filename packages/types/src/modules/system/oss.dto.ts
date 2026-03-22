import type { IBaseEntity, IdType, RecordNullable, EnableStatus, YesOrNoStatus } from '../../common';
import type { OssAccessPolicy } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * OSS 文件
 */
export interface IOss extends IBaseEntity {
  /** 对象存储主键 */
  ossId: IdType;
  /** 租户编号 */
  tenantId: IdType;
  /** 文件名 */
  fileName: string;
  /** 原名 */
  originalName: string;
  /** 文件后缀名 */
  fileSuffix: string;
  /** URL地址 */
  url: string;
  /** 扩展属性 */
  ext1: string;
  /** 服务商 */
  service: string;
  /** 创建者名称 */
  createByName: string;
}

/**
 * OSS 文件搜索参数
 */
export type IOssSearchParams = RecordNullable<Pick<IOss, 'fileName' | 'originalName' | 'fileSuffix' | 'service'>> &
  IPaginationParams;

/**
 * OSS 文件列表响应
 */
export type IOssListResponse = IPaginationResponse<IOss>;

/**
 * OSS 配置
 */
export interface IOssConfig extends IBaseEntity {
  /** 主键 */
  ossConfigId: IdType;
  /** 租户编号 */
  tenantId: IdType;
  /** 配置名称 */
  configKey: string;
  /** accessKey */
  accessKey: string;
  /** 秘钥secretKey */
  secretKey: string;
  /** 桶名称 */
  bucketName: string;
  /** 前缀 */
  prefix: string;
  /** 访问站点 */
  endpoint: string;
  /** 自定义域名 */
  domain: string;
  /** 是否https */
  isHttps: YesOrNoStatus;
  /** 域 */
  region: string;
  /** 桶权限类型 */
  accessPolicy: OssAccessPolicy;
  /** 是否默认 */
  status: EnableStatus;
  /** 扩展字段 */
  ext1: string;
}

/**
 * OSS 配置搜索参数
 */
export type IOssConfigSearchParams = RecordNullable<Pick<IOssConfig, 'configKey' | 'bucketName' | 'region' | 'status'>> &
  IPaginationParams;

/**
 * OSS 配置操作参数
 */
export type IOssConfigOperateParams = RecordNullable<
  Pick<
    IOssConfig,
    | 'ossConfigId'
    | 'configKey'
    | 'accessKey'
    | 'secretKey'
    | 'bucketName'
    | 'prefix'
    | 'endpoint'
    | 'domain'
    | 'isHttps'
    | 'region'
    | 'accessPolicy'
    | 'status'
    | 'remark'
  >
>;

/**
 * OSS 配置列表响应
 */
export type IOssConfigListResponse = IPaginationResponse<IOssConfig>;
