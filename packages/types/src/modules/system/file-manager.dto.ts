import type { IBaseEntity, IdType, RecordNullable } from '../../common';
import type { ShareStatus } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 文件夹
 */
export interface IFileFolder extends IBaseEntity {
  /** 文件夹ID */
  folderId: number;
  /** 父文件夹ID */
  parentId: number;
  /** 文件夹名称 */
  folderName: string;
  /** 文件夹路径 */
  folderPath: string;
  /** 显示顺序 */
  orderNum: number;
  /** 租户ID */
  tenantId: string;
}

/**
 * 文件夹树节点
 */
export interface IFileFolderTreeNode extends IFileFolder {
  /** 子节点 */
  children?: IFileFolderTreeNode[];
}

/**
 * 文件夹搜索参数
 */
export type IFolderSearchParams = RecordNullable<Pick<IFileFolder, 'folderName' | 'parentId'>> & IPaginationParams;

/**
 * 文件夹操作参数
 */
export type IFolderOperateParams = RecordNullable<
  Pick<IFileFolder, 'folderId' | 'parentId' | 'folderName' | 'orderNum' | 'remark'>
>;

/**
 * 文件夹列表响应
 */
export type IFolderListResponse = IPaginationResponse<IFileFolder>;

/**
 * 文件信息
 */
export interface IFileInfo extends IBaseEntity {
  /** 上传ID */
  uploadId: string;
  /** 文件夹ID */
  folderId?: number;
  /** 文件名 */
  fileName: string;
  /** 原始文件名 */
  originalName: string;
  /** 文件大小 */
  fileSize: number;
  /** 文件扩展名 */
  ext: string;
  /** 文件MIME类型 */
  mimeType?: string;
  /** 文件路径 */
  filePath: string;
  /** 文件URL */
  url: string;
  /** 缩略图 */
  thumbnail?: string;
  /** 文件MD5 */
  fileMd5?: string;
  /** 存储类型 */
  storageType: string;
  /** 租户ID */
  tenantId: string;
}

/**
 * 文件搜索参数
 */
export type IFileSearchParams = RecordNullable<{
  folderId?: number;
  fileName?: string;
  ext?: string;
  exts?: string;
  storageType?: string;
}> &
  IPaginationParams;

/**
 * 移动文件参数
 */
export interface IMoveFilesParams {
  uploadIds: string[];
  targetFolderId: number;
}

/**
 * 重命名文件参数
 */
export interface IRenameFileParams {
  uploadId: string;
  newFileName: string;
}

/**
 * 文件详情
 */
export type IFileDetail = IFileInfo;

/**
 * 文件列表响应
 */
export type IFileListResponse = IPaginationResponse<IFileInfo>;

/**
 * 文件分享
 */
export interface IFileShare extends IBaseEntity {
  /** 分享ID */
  shareId: number;
  /** 上传ID */
  uploadId: string;
  /** 分享码 */
  shareCode: string;
  /** 分享密码 */
  password?: string;
  /** 过期时间 */
  expireTime?: string;
  /** 最大下载次数 */
  maxDownload?: number;
  /** 已下载次数 */
  downloadCount: number;
  /** 分享状态 */
  status: ShareStatus;
  /** 租户ID */
  tenantId: string;
}

/**
 * 创建分享参数
 */
export interface ICreateShareParams {
  uploadId: string;
  password?: string;
  expireTime?: string;
  maxDownload?: number;
}

/**
 * 获取分享参数
 */
export interface IGetShareParams {
  shareId: number;
  shareCode: string;
  password?: string;
}

/**
 * 分享信息
 */
export type IShareInfo = Pick<IFileShare, 'shareId' | 'shareCode' | 'password' | 'expireTime' | 'maxDownload'>;

/**
 * 分享详情
 */
export interface IShareDetail extends IFileShare {
  fileInfo: IFileInfo;
}

/**
 * 分享搜索参数
 */
export type IShareSearchParams = RecordNullable<{
  uploadId?: string;
  status?: ShareStatus;
}> &
  IPaginationParams;

/**
 * 分享列表响应
 */
export type IShareListResponse = IPaginationResponse<IFileShare & { fileInfo: IFileInfo }>;

/**
 * 回收站文件信息
 */
export type IRecycleFile = IFileInfo;

/**
 * 回收站搜索参数
 */
export type IRecycleSearchParams = RecordNullable<{
  fileName?: string;
}> &
  IPaginationParams;

/**
 * 回收站列表响应
 */
export type IRecycleListResponse = IPaginationResponse<IRecycleFile>;

/**
 * 文件版本信息
 */
export interface IFileVersion {
  uploadId: string;
  fileName: string;
  size: number;
  version: number;
  isLatest: boolean;
  createTime: string;
  createBy: string;
  updateTime: string;
  url: string;
  ext: string;
}

/**
 * 文件版本历史
 */
export interface IFileVersions {
  currentVersion: number;
  versions: IFileVersion[];
}

/**
 * 恢复版本参数
 */
export interface IRestoreVersionParams {
  fileId: string;
  targetVersionId: string;
}

/**
 * 恢复版本结果
 */
export interface IRestoreVersionResult {
  newVersion: number;
  uploadId: string;
}

/**
 * 文件访问令牌
 */
export interface IFileAccessToken {
  token: string;
  expiresIn: number;
}

/**
 * 存储统计信息
 */
export interface IStorageStats {
  used: number;
  quota: number;
  percentage: number;
  remaining: number;
  companyName: string;
}
