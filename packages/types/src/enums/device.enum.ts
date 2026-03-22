/**
 * 设备类型枚举
 */
export enum DeviceTypeEnum {
  /** PC端 */
  PC = 'pc',
  /** 移动端 */
  APP = 'app',
  /** 小程序 */
  MINI = 'mini',
  /** 社交登录 */
  SOCIAL = 'social',
}

/**
 * 授权类型枚举
 */
export enum GrantTypeEnum {
  /** 密码登录 */
  PASSWORD = 'password',
  /** 短信登录 */
  SMS = 'sms',
  /** 邮箱登录 */
  EMAIL = 'email',
  /** 小程序登录 */
  XCX = 'xcx',
  /** 社交登录 */
  SOCIAL = 'social',
}

/** 设备类型 */
export type DeviceType = `${DeviceTypeEnum}`;
/** 授权类型 */
export type GrantType = `${GrantTypeEnum}`;
