import type { IBaseEntity, IdType, RecordNullable } from '../../common';
import type { TplCategory, GenType, QueryType, HtmlType, JavaType } from '../../enums';
import type { IPaginationParams, IPaginationResponse } from '../../common/pagination';

/**
 * 代码生成业务字段
 */
export interface IGenTableColumn extends IBaseEntity {
  /** 列描述 */
  columnComment?: string;
  /** 编号 */
  columnId?: IdType;
  /** 列名称 */
  columnName?: string;
  /** 列类型 */
  columnType?: string;
  /** 字典类型 */
  dictType?: string;
  /** 是否编辑字段 */
  edit?: boolean;
  /** 显示类型 */
  htmlType?: HtmlType;
  /** 是否自增 */
  increment?: boolean;
  /** 是否为插入字段 */
  insert?: boolean;
  /** 是否编辑字段（字符串） */
  isEdit?: string;
  /** 是否自增（字符串） */
  isIncrement?: string;
  /** 是否为插入字段（字符串） */
  isInsert?: string;
  /** 是否列表字段（字符串） */
  isList?: string;
  /** 是否主键（字符串） */
  isPk?: string;
  /** 是否查询字段（字符串） */
  isQuery?: string;
  /** 是否必填（字符串） */
  isRequired?: string;
  /** JAVA字段名 */
  javaField: string;
  /** JAVA类型 */
  javaType?: JavaType;
  /** 是否列表字段 */
  list?: boolean;
  /** 是否主键 */
  pk?: boolean;
  /** 是否查询字段 */
  query?: boolean;
  /** 查询方式 */
  queryType?: QueryType;
  /** 是否必填 */
  required?: boolean;
  /** 排序 */
  sort?: number;
  /** 是否基类字段 */
  superColumn?: boolean;
  /** 归属表编号 */
  tableId?: IdType;
  /** 可用字段 */
  usableColumn?: boolean;
}

/**
 * 代码生成业务表
 */
export interface IGenTable extends IBaseEntity {
  /** 生成业务名 */
  businessName: string;
  /** 实体类名称(首字母大写) */
  className: string;
  /** 表列信息 */
  columns?: IGenTableColumn[];
  /** 是否单表（增删改查） */
  crud?: boolean;
  /** 数据源名称 */
  dataName: string;
  /** 生成作者 */
  functionAuthor: string;
  /** 生成功能名 */
  functionName: string;
  /** 生成路径（不填默认项目路径） */
  genPath?: string;
  /** 生成代码方式 */
  genType?: GenType;
  /** 菜单 id 列表 */
  menuIds?: IdType[];
  /** 生成模块名 */
  moduleName: string;
  /** 其它生成选项 */
  options?: string;
  /** 生成包路径 */
  packageName: string;
  /** 上级菜单ID字段 */
  parentMenuId?: IdType;
  /** 上级菜单名称字段 */
  parentMenuName?: string;
  /** 主键信息 */
  pkColumn?: IGenTableColumn;
  /** 本表关联父表的外键名 */
  subTableFkName?: string;
  /** 关联父表的表名 */
  subTableName?: string;
  /** 表描述 */
  tableComment: string;
  /** 编号 */
  tableId?: IdType;
  /** 表名称 */
  tableName: string;
  /** 使用的模板 */
  tplCategory?: TplCategory;
  /** 是否tree树表操作 */
  tree?: boolean;
  /** 树编码字段 */
  treeCode?: string;
  /** 树名称字段 */
  treeName?: string;
  /** 树父编码字段 */
  treeParentCode?: string;
  /** 额外参数 */
  params: Record<string, unknown>;
}

/**
 * 代码生成表搜索参数
 */
export type IGenTableSearchParams = RecordNullable<Pick<IGenTable, 'dataName' | 'tableName' | 'tableComment'>> &
  IPaginationParams & {
    params?: {
      beginTime?: string;
      endTime?: string;
    };
  };

/**
 * 代码生成表列表响应
 */
export type IGenTableListResponse = IPaginationResponse<IGenTable>;

/**
 * 数据库表搜索参数
 */
export type IGenTableDbSearchParams = RecordNullable<Pick<IGenTable, 'dataName' | 'tableName' | 'tableComment'>> &
  IPaginationParams;

/**
 * 数据库表列表响应
 */
export type IGenTableDbListResponse = IPaginationResponse<Pick<IGenTable, 'tableName' | 'tableComment'> & IBaseEntity>;

/**
 * 代码生成表预览
 */
export type IGenTablePreview = Record<string, string>;

/**
 * 代码生成表信息
 */
export interface IGenTableInfo {
  /** 字段信息 */
  rows: IGenTableColumn[];
  /** 生成信息 */
  tables: IGenTable[];
  /** 基本信息 */
  info: IGenTable;
}
