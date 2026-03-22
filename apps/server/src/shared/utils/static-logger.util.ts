import { Logger as NestLogger } from '@nestjs/common';

/**
 * 静态日志工具
 *
 * 用于在装饰器、工具函数等无法通过依赖注入获取 Logger 的场景
 * 提供与 NestJS Logger 一致的 API
 *
 * @example
 * ```typescript
 * import { StaticLogger } from 'src/shared/utils';
 *
 * // 在装饰器中使用
 * StaticLogger.warn('Cache read error', 'SystemCacheable');
 *
 * // 在工具函数中使用
 * StaticLogger.error('Export failed', 'ExportTable');
 * ```
 */
export class StaticLogger {
  private static readonly defaultContext = 'Application';

  /**
   * 记录详细日志
   */
  static verbose(message: string, context?: string): void {
    NestLogger.verbose(message, context || this.defaultContext);
  }

  /**
   * 记录调试日志
   */
  static debug(message: string, context?: string): void {
    NestLogger.debug(message, context || this.defaultContext);
  }

  /**
   * 记录信息日志
   */
  static log(message: string, context?: string): void {
    NestLogger.log(message, context || this.defaultContext);
  }

  /**
   * 记录警告日志
   */
  static warn(message: string, context?: string): void {
    NestLogger.warn(message, context || this.defaultContext);
  }

  /**
   * 记录错误日志
   */
  static error(message: string, trace?: string, context?: string): void {
    NestLogger.error(message, trace, context || this.defaultContext);
  }

  /**
   * 创建带有特定上下文的日志实例
   */
  static create(context: string) {
    return {
      verbose: (message: string) => this.verbose(message, context),
      debug: (message: string) => this.debug(message, context),
      log: (message: string) => this.log(message, context),
      warn: (message: string) => this.warn(message, context),
      error: (message: string, trace?: string) => this.error(message, trace, context),
    };
  }
}
