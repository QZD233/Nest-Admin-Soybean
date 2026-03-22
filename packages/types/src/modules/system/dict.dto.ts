import type { YesNoChar } from '../../enums';
import type { IBaseEntity, IdType, IPaginationParams, IPaginationResponse } from '../../common';

/**
 * 字典类型实体
 */
export interface IDictType extends IBaseEntity {
  /** 字典主键 */
  dictId: IdType;
  /** 字典名称 */
  dictName: string;
  /** 字典类型 */
  dictType: string;
}

/**
 * 字典类型查询参数
 */
export interface IDictTypeSearchParams extends IPaginationParams {
  /** 字典名称 */
  dictName?: string;
  /** 字典类型 */
  dictType?: string;
}

/**
 * 字典类型创建参数
 */
export interface IDictTypeCreateParams {
  /** 字典名称 */
  dictName: string;
  /** 字典类型 */
  dictType: string;
  /** 备注 */
  remark?: string;
}

/**
 * 字典类型更新参数
 */
export interface IDictTypeUpdateParams extends Partial<IDictTypeCreateParams> {
  /** 字典主键 */
  dictId: IdType;
}

/**
 * 字典类型列表响应
 */
export type IDictTypeListResponse = IPaginationResponse<IDictType>;

/**
 * 字典数据实体
 */
export interface IDictData extends IBaseEntity {
  /** 字典编码 */
  dictCode: IdType;
  /** 字典排序 */
  dictSort?: number;
  /** 字典标签 */
  dictLabel: string;
  /** 字典键值 */
  dictValue: string;
  /** 字典类型 */
  dictType: string;
  /** 样式属性 */
  cssClass?: string;
  /** 表格回显样式 */
  listClass?: string;
  /** 是否默认 */
  isDefault?: YesNoChar | string;
}

/**
 * 字典数据查询参数
 */
export interface IDictDataSearchParams extends IPaginationParams {
  /** 字典标签 */
  dictLabel?: string;
  /** 字典类型 */
  dictType?: string;
}

/**
 * 字典数据创建参数
 */
export interface IDictDataCreateParams {
  /** 字典排序 */
  dictSort?: number;
  /** 字典标签 */
  dictLabel: string;
  /** 字典键值 */
  dictValue: string;
  /** 字典类型 */
  dictType: string;
  /** 样式属性 */
  cssClass?: string;
  /** 表格回显样式 */
  listClass?: string;
  /** 是否默认 */
  isDefault?: YesNoChar | string;
  /** 备注 */
  remark?: string;
}

/**
 * 字典数据更新参数
 */
export interface IDictDataUpdateParams extends Partial<IDictDataCreateParams> {
  /** 字典编码 */
  dictCode: IdType;
}

/**
 * 字典数据列表响应
 */
export type IDictDataListResponse = IPaginationResponse<IDictData>;
