import type { IUser, IRole } from '../system';

/**
 * 当前用户信息
 */
export interface IUserInfo {
  /** 用户信息 */
  user?: IUser & {
    /** 所属角色 */
    roles?: IRole[];
  };
  /** 角色列表 */
  roles: string[];
  /** 菜单权限 */
  permissions: string[];
}

/**
 * 用户个人信息响应
 */
export interface IUserProfile {
  /** 用户信息 */
  user: IUser;
  /** 角色组名称 */
  roleGroup: string;
  /** 岗位组名称 */
  postGroup: string;
}

/**
 * 修改密码参数
 */
export interface IChangePasswordParams {
  /** 旧密码 */
  oldPassword: string;
  /** 新密码 */
  newPassword: string;
}
