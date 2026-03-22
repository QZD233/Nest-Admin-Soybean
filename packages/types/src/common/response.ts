/**
 * 通用 API 响应
 */
export interface IApiResponse<T = unknown> {
  /** 状态码 */
  code: number;
  /** 消息 */
  msg: string;
  /** 数据 */
  data: T;
}

/**
 * 成功响应
 */
export type ISuccessResponse<T = unknown> = IApiResponse<T> & {
  code: 200;
};

/**
 * 错误响应
 */
export interface IErrorResponse {
  code: number;
  msg: string;
  data?: null;
}
