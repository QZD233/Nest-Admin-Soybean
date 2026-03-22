/**
 * 基础登录表单
 */
export interface ILoginForm {
  /** 客户端 ID */
  clientId?: string;
  /** 授权类型 */
  grantType?: string;
  /** 租户ID */
  tenantId?: string;
  /** 验证码 */
  code?: string;
  /** 唯一标识 */
  uuid?: string;
}

/**
 * 密码登录表单
 */
export interface IPwdLoginForm extends ILoginForm {
  /** 用户名 */
  username?: string;
  /** 密码 */
  password?: string;
}

/**
 * 社交登录表单
 */
export interface ISocialLoginForm extends ILoginForm {
  /** 授权码 */
  socialCode?: string;
  /** 授权状态 */
  socialState?: string;
  /** 来源 */
  source?: string;
}

/**
 * 注册表单
 */
export interface IRegisterForm extends ILoginForm {
  /** 用户名 */
  username?: string;
  /** 密码 */
  password?: string;
  /** 确认密码 */
  confirmPassword?: string;
  /** 用户类型 */
  userType?: string;
}

/**
 * 登录令牌数据
 */
export interface ILoginToken {
  /** 授权令牌 */
  access_token?: string;
  /** 应用id */
  client_id?: string;
  /** 授权令牌 access_token 的有效期 */
  expire_in?: number;
  /** 用户 openid */
  openid?: string;
  /** 刷新令牌 refresh_token 的有效期 */
  refresh_expire_in?: number;
  /** 刷新令牌 */
  refresh_token?: string;
  /** 令牌权限 */
  scope?: string;
}

/**
 * 验证码响应
 */
export interface ICaptchaCode {
  /** 是否开启验证码 */
  captchaEnabled: boolean;
  /** 唯一标识 */
  uuid?: string;
  /** 验证码图片 */
  img?: string;
}

/**
 * 登录租户信息
 */
export interface ILoginTenant {
  /** 租户开关 */
  tenantEnabled: boolean;
  /** 租户列表 */
  voList: ITenantOption[];
}

/**
 * 租户选项
 */
export interface ITenantOption {
  /** 企业名称 */
  companyName: string;
  /** 域名 */
  domain: string;
  /** 租户编号 */
  tenantId: string;
}
