/**
 * 监控模块 E2E 测试
 *
 * @description
 * 测试在线用户、操作日志、登录日志、服务监控等功能
 */

describe('监控模块', () => {
  beforeEach(() => {
    cy.loginByApi('admin', 'admin123');
  });

  describe('在线用户', () => {
    beforeEach(() => {
      cy.visit('/monitor/online');
    });

    it('应该显示在线用户列表', () => {
      cy.get('.n-data-table').should('be.visible');
    });

    it('应该显示当前登录用户', () => {
      cy.get('.n-data-table-tr').should('contain', 'admin');
    });

    it('应该能搜索在线用户', () => {
      cy.get('[data-cy="search-username"]').type('admin');
      cy.get('[data-cy="search-button"]').click();
    });
  });

  describe('操作日志', () => {
    beforeEach(() => {
      cy.visit('/monitor/operlog');
    });

    it('应该显示操作日志列表', () => {
      cy.get('.n-data-table').should('be.visible');
    });

    it('应该支持按日期范围筛选', () => {
      cy.get('[data-cy="date-range"]').should('be.visible');
    });

    it('应该支持按操作类型筛选', () => {
      cy.get('[data-cy="business-type"]').click();
      cy.get('.n-base-select-option').should('have.length.greaterThan', 0);
    });

    it('应该能查看日志详情', () => {
      cy.get('[data-cy="detail-button"]').first().click();
      cy.get('.n-modal, .n-drawer').should('be.visible');
    });

    it('应该能导出日志', () => {
      cy.get('[data-cy="export-button"]').should('be.visible');
    });

    it('应该能清空日志', () => {
      cy.get('[data-cy="clear-button"]').click();
      cy.get('.n-dialog').should('be.visible');
    });
  });

  describe('登录日志', () => {
    beforeEach(() => {
      cy.visit('/monitor/loginlog');
    });

    it('应该显示登录日志列表', () => {
      cy.get('.n-data-table').should('be.visible');
    });

    it('应该显示登录状态标签', () => {
      // 成功/失败状态
      cy.get('.n-tag').should('be.visible');
    });

    it('应该支持按登录地址搜索', () => {
      cy.get('[data-cy="search-ip"]').should('be.visible');
    });
  });

  describe('服务监控', () => {
    beforeEach(() => {
      cy.visit('/monitor/server');
    });

    it('应该显示服务器信息', () => {
      // CPU 信息
      cy.get('[data-cy="cpu-info"]').should('be.visible');
      // 内存信息
      cy.get('[data-cy="memory-info"]').should('be.visible');
    });

    it('应该显示 JVM 信息', () => {
      cy.get('[data-cy="jvm-info"]').should('be.visible');
    });

    it('应该显示磁盘信息', () => {
      cy.get('[data-cy="disk-info"]').should('be.visible');
    });
  });

  describe('缓存监控', () => {
    beforeEach(() => {
      cy.visit('/monitor/cache');
    });

    it('应该显示缓存信息', () => {
      cy.get('[data-cy="cache-info"]').should('be.visible');
    });

    it('应该显示缓存键名列表', () => {
      cy.get('[data-cy="cache-keys"]').should('be.visible');
    });

    it('应该能清除缓存', () => {
      cy.get('[data-cy="clear-cache-button"]').click();
      cy.get('.n-dialog, .n-message').should('be.visible');
    });
  });
});
