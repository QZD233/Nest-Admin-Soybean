import type { StatusEnum, SexEnum } from '../../enums';
import type { ITenantEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 用户实体
 */
export interface IUser extends ITenantEntity {
  /** 用户ID */
  userId: IdType;
  /** 部门ID */
  deptId?: IdType;
  /** 部门名称 */
  deptName?: string;
  /** 用户账号 */
  userName: string;
  /** 用户昵称 */
  nickName: string;
  /** 用户类型 */
  userType?: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phonenumber?: string;
  /** 用户性别 */
  sex?: SexEnum | string;
  /** 头像地址 */
  avatar?: string;
  /** 密码 */
  password?: string;
  /** 帐号状态 */
  status?: StatusEnum | string;
  /** 最后登录IP */
  loginIp?: string;
  /** 最后登录时间 */
  loginDate?: string;
}

/**
 * 用户查询参数
 */
export interface IUserSearchParams extends IPaginationParams {
  /** 用户账号 */
  userName?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 手机号码 */
  phonenumber?: string;
  /** 帐号状态 */
  status?: StatusEnum | string;
  /** 部门ID */
  deptId?: IdType;
  /** 角色ID */
  roleId?: IdType;
}

/**
 * 用户创建参数
 */
export interface IUserCreateParams {
  /** 部门ID */
  deptId?: IdType;
  /** 用户账号 */
  userName: string;
  /** 用户昵称 */
  nickName: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phonenumber?: string;
  /** 用户性别 */
  sex?: SexEnum | string;
  /** 密码 */
  password: string;
  /** 帐号状态 */
  status?: StatusEnum | string;
  /** 备注 */
  remark?: string;
  /** 角色ID列表 */
  roleIds?: IdType[];
  /** 岗位ID列表 */
  postIds?: IdType[];
}

/**
 * 用户更新参数
 */
export interface IUserUpdateParams extends Partial<Omit<IUserCreateParams, 'password'>> {
  /** 用户ID */
  userId: IdType;
  /** 密码（可选） */
  password?: string;
}

/**
 * 用户个人信息更新参数
 */
export interface IUserProfileUpdateParams {
  /** 用户昵称 */
  nickName?: string;
  /** 用户邮箱 */
  email?: string;
  /** 手机号码 */
  phonenumber?: string;
  /** 用户性别 */
  sex?: SexEnum | string;
}

/**
 * 用户列表响应
 */
export type IUserListResponse = IPaginationResponse<IUser>;

/**
 * 用户详情响应（包含岗位和角色选项）
 */
export interface IUserDetailResponse {
  /** 用户信息 */
  data?: IUser;
  /** 岗位选项列表 */
  posts: IPost[];
  /** 角色选项列表 */
  roles: IRole[];
  /** 用户已分配的岗位ID列表 */
  postIds?: IdType[];
  /** 用户已分配的角色ID列表 */
  roleIds?: IdType[];
}

// 前向声明
import type { IPost } from './post.dto';
import type { IRole } from './role.dto';
