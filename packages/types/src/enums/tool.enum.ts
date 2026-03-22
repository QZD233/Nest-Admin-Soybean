/**
 * 工具模块枚举定义
 */

/**
 * 生成模板类型
 *
 * - crud: 单表操作
 * - tree: 树表操作
 */
export type TplCategory = 'crud' | 'tree';

/**
 * 生成代码方式
 *
 * - 0: zip压缩包
 * - 1: 自定义路径
 */
export type GenType = '0' | '1';

/**
 * 查询方式
 */
export type QueryType = 'EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'LIKE' | 'BETWEEN';

/**
 * 显示类型
 */
export type HtmlType =
  | 'input'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'datetime'
  | 'imageUpload'
  | 'fileUpload'
  | 'editor';

/**
 * Java类型
 */
export type JavaType = 'Long' | 'String' | 'Integer' | 'Double' | 'BigDecimal' | 'Date' | 'Boolean';
