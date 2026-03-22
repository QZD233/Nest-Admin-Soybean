import { BusinessException } from 'src/shared/exceptions/business.exception';
import { ResponseCode } from 'src/shared/response/response.interface';

/**
 * 断言工具类
 *
 * 提供常用的条件检查和异常抛出方法，用于统一错误处理模式。
 * 遵循 "快速失败" (Fail-Fast) 原则。
 *
 * @example
 * ```typescript
 * // 检查数据是否存在
 * Assert.notNull(user, '用户不存在');
 *
 * // 检查条件
 * Assert.isTrue(user.status === '0', '用户已被禁用');
 *
 * // 检查权限
 * Assert.hasPermission(currentUser.id === targetUser.id || isAdmin, '无权操作');
 * ```
 */
export class Assert {
  /**
   * 断言值不为 null 或 undefined
   * @param value 要检查的值
   * @param message 错误消息
   * @param code 错误码（默认：DATA_NOT_FOUND）
   */
  static notNull<T>(value: T | null | undefined, message: string, code?: ResponseCode): asserts value is T {
    BusinessException.throwIfNull(value, message, code ?? ResponseCode.DATA_NOT_FOUND);
  }

  /**
   * 断言数组不为空
   * @param value 要检查的数组
   * @param message 错误消息
   * @param code 错误码（默认：DATA_NOT_FOUND）
   */
  static notEmpty<T>(value: T[] | null | undefined, message: string, code?: ResponseCode): asserts value is T[] {
    BusinessException.throwIfEmpty(value ?? [], message, code ?? ResponseCode.DATA_NOT_FOUND);
  }

  /**
   * 断言条件为真
   * @param condition 条件
   * @param message 错误消息（条件为 false 时抛出）
   * @param code 错误码（默认：BUSINESS_ERROR）
   */
  static isTrue(condition: boolean, message: string, code?: ResponseCode): asserts condition {
    BusinessException.throwIf(!condition, message, code ?? ResponseCode.BUSINESS_ERROR);
  }

  /**
   * 断言条件为假
   * @param condition 条件
   * @param message 错误消息（条件为 true 时抛出）
   * @param code 错误码（默认：BUSINESS_ERROR）
   */
  static isFalse(condition: boolean, message: string, code?: ResponseCode): void {
    BusinessException.throwIf(condition, message, code ?? ResponseCode.BUSINESS_ERROR);
  }

  /**
   * 断言数据存在（检查 ID 或其他标识）
   * @param value 要检查的值
   * @param entityName 实体名称（用于错误消息）
   */
  static exists<T>(value: T | null | undefined, entityName: string): asserts value is T {
    BusinessException.throwIfNull(value, `${entityName}不存在`, ResponseCode.DATA_NOT_FOUND);
  }

  /**
   * 断言有权限操作
   * @param hasPermission 是否有权限
   * @param message 错误消息（默认：'无权操作'）
   */
  static hasPermission(hasPermission: boolean, message = '无权操作'): void {
    BusinessException.throwIf(!hasPermission, message, ResponseCode.PERMISSION_DENIED);
  }

  /**
   * 断言租户匹配
   * @param entityTenantId 实体的租户ID
   * @param currentTenantId 当前租户ID
   * @param entityName 实体名称
   */
  static tenantMatch(entityTenantId: string | null, currentTenantId: string, entityName: string): void {
    BusinessException.throwIf(
      entityTenantId !== currentTenantId,
      `${entityName}不存在或无权访问`,
      ResponseCode.DATA_NOT_FOUND,
    );
  }

  /**
   * 断言数据未被使用
   * @param isInUse 是否正在使用
   * @param message 错误消息
   */
  static notInUse(isInUse: boolean, message: string): void {
    BusinessException.throwIf(isInUse, message, ResponseCode.DATA_IN_USE);
  }

  /**
   * 断言数据不重复
   * @param exists 是否已存在
   * @param message 错误消息
   */
  static notExists(exists: boolean, message: string): void {
    BusinessException.throwIf(exists, message, ResponseCode.DATA_ALREADY_EXISTS);
  }

  /**
   * 断言操作有效（用于检查业务规则）
   * @param isValid 是否有效
   * @param message 错误消息
   */
  static validOperation(isValid: boolean, message: string): void {
    BusinessException.throwIf(!isValid, message, ResponseCode.OPERATION_FAILED);
  }

  /**
   * 断言参数有效
   * @param isValid 是否有效
   * @param message 错误消息
   */
  static validParam(isValid: boolean, message: string): void {
    BusinessException.throwIf(!isValid, message, ResponseCode.PARAM_INVALID);
  }

  /**
   * 断言字符串不为空
   * @param value 字符串值
   * @param message 错误消息
   */
  static notBlank(value: string | null | undefined, message: string): asserts value is string {
    BusinessException.throwIf(!value || value.trim() === '', message, ResponseCode.PARAM_INVALID);
  }

  /**
   * 断言数值在范围内
   * @param value 数值
   * @param min 最小值
   * @param max 最大值
   * @param message 错误消息
   */
  static inRange(value: number, min: number, max: number, message: string): void {
    BusinessException.throwIf(value < min || value > max, message, ResponseCode.PARAM_INVALID);
  }
}
