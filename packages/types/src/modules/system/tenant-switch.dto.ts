/**
 * 可切换租户选项
 */
export interface ITenantSelectItem {
  /** 租户ID */
  tenantId: string;
  /** 企业名称 */
  companyName: string;
  /** 状态 */
  status: string;
}

/**
 * 租户切换响应
 */
export interface ITenantSwitchResponse {
  /** 是否成功 */
  success: boolean;
  /** 租户ID */
  tenantId: string;
  /** 企业名称 */
  companyName: string;
}

/**
 * 租户恢复响应
 */
export interface ITenantRestoreResponse {
  /** 是否成功 */
  success: boolean;
  /** 原租户ID */
  originalTenantId: string;
}

/**
 * 租户切换状态
 */
export interface ITenantSwitchStatus {
  /** 是否已切换 */
  isSwitched: boolean;
  /** 当前租户ID */
  currentTenantId: string;
  /** 当前企业名称 */
  currentCompanyName?: string;
  /** 原租户ID */
  originalTenantId?: string;
}
