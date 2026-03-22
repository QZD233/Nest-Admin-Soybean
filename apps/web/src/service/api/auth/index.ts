import { request } from '@/service/request';

/** 用户登录 */
export function fetchAuthLogin(data: Api.Auth.LoginParams) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/login',
    method: 'post',
    data,
    headers: {
      isEncrypt: 'true',
      isToken: false
    }
  });
}

/** 退出登录 */
export function fetchAuthLogout() {
  return request<void>({
    url: '/auth/logout',
    method: 'post'
  });
}

/** 获取当前用户信息 */
export function fetchUserGetInfo() {
  return request<Api.Auth.UserInfo>({
    url: '/system/user/getInfo',
    method: 'get'
  });
}

/** 获取验证码 */
export function fetchAuthGetCaptcha() {
  return request<Api.Auth.CaptchaInfo>({
    url: '/auth/code',
    method: 'get',
    headers: {
      isToken: false
    }
  });
}

/** 获取租户列表 */
export function fetchAuthGetTenantList() {
  return request<Api.Auth.LoginTenant>({
    url: '/auth/tenant/list',
    method: 'get',
    headers: {
      isToken: false
    }
  });
}

/** 获取加密公钥 */
export function fetchAuthGetPublicKey() {
  return request<string>({
    url: '/auth/publicKey',
    method: 'get',
    headers: {
      isToken: false
    }
  });
}

/** 用户注册 */
export function fetchAuthRegister(data: Api.Auth.RegisterParams) {
  return request<void>({
    url: '/auth/register',
    method: 'post',
    data,
    headers: {
      isEncrypt: 'true',
      isToken: false
    }
  });
}

/** 社交登录回调 */
export function fetchAuthSocialCallback(data: Api.Auth.SocialLoginForm) {
  return request<Api.Auth.LoginToken>({
    url: '/auth/social/callback',
    method: 'post',
    data,
    headers: {
      isToken: false
    }
  });
}
