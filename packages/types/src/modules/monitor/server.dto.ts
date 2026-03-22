/**
 * CPU 信息
 */
export interface ICpuInfo {
  /** 核心数 */
  cpuNum: number;
  /** 用户使用率 */
  used: number;
  /** 系统使用率 */
  sys: number;
  /** 空闲率 */
  free: number;
}

/**
 * 内存信息
 */
export interface IMemInfo {
  /** 总内存 */
  total: number;
  /** 已用内存 */
  used: number;
  /** 剩余内存 */
  free: number;
  /** 使用率 */
  usage: number;
}

/**
 * 系统信息
 */
export interface ISysInfo {
  /** 服务器名称 */
  computerName: string;
  /** 服务器IP */
  computerIp: string;
  /** 操作系统 */
  osName: string;
  /** 系统架构 */
  osArch: string;
  /** 项目路径 */
  userDir?: string;
}

/**
 * Node.js 信息
 */
export interface INodeInfo {
  /** Node 名称 */
  name: string;
  /** Node 版本 */
  version: string;
  /** 启动时间 */
  startTime: string;
  /** 运行时长 */
  runTime: string;
  /** 安装路径 */
  home: string;
  /** 总内存 */
  total: number;
  /** 最大内存 */
  max: number;
  /** 空闲内存 */
  free: number;
  /** 已用内存 */
  used?: number;
  /** 使用率 */
  usage: number;
  /** 运行参数 */
  inputArgs?: string;
}

/**
 * 磁盘信息
 */
export interface ISysFile {
  /** 盘符路径 */
  dirName: string;
  /** 文件系统 */
  sysTypeName: string;
  /** 盘符类型 */
  typeName: string;
  /** 总大小 */
  total: string;
  /** 剩余大小 */
  free: string;
  /** 已用大小 */
  used: string;
  /** 使用率 */
  usage: number;
}

/**
 * 服务器监控信息
 */
export interface IServerInfo {
  /** CPU 信息 */
  cpu: ICpuInfo;
  /** 内存信息 */
  mem: IMemInfo;
  /** 系统信息 */
  sys: ISysInfo;
  /** Node.js 信息 */
  node?: INodeInfo;
  /** 磁盘信息 */
  sysFiles: ISysFile[];
}
