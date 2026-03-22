import type { IBaseEntity, IdType } from '../../common';
import type { SocialSource } from '../../enums';

/**
 * 社交账号绑定
 */
export interface ISocial extends IBaseEntity {
  /** 主键 */
  id: IdType;
  /** 用户ID */
  userId: IdType;
  /** 租户ID */
  tenantId: IdType;
  /** 认证的唯一ID */
  authId: string;
  /** 用户来源 */
  source: string;
  /** 用户的授权令牌 */
  accessToken: string;
  /** 用户的授权令牌的有效期 */
  expireIn: number;
  /** 刷新令牌 */
  refreshToken: string;
  /** 用户的 open id */
  openId: string;
  /** 授权的第三方账号 */
  userName: string;
  /** 授权的第三方昵称 */
  nickName: string;
  /** 授权的第三方邮箱 */
  email: string;
  /** 授权的第三方头像地址 */
  avatar: string;
  /** 平台的授权信息 */
  accessCode: string;
  /** 用户的 unionid */
  unionId: string;
  /** 授予的权限 */
  scope: string;
  /** 个别平台的授权信息 */
  tokenType: string;
  /** id token */
  idToken: string;
  /** 小米平台用户的附带属性 */
  macAlgorithm: string;
  /** 小米平台用户的附带属性 */
  macKey: string;
  /** 用户的授权code */
  code: string;
  /** Twitter平台用户的附带属性 */
  oauthToken: string;
  /** Twitter平台用户的附带属性 */
  oauthTokenSecret: string;
}

// 重新导出 SocialSource 类型
export type { SocialSource };
