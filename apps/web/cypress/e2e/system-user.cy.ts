/**
 * 用户管理模块 E2E 测试
 *
 * @description
 * 测试用户列表、新增、编辑、删除等功能
 */

describe('用户管理', () => {
  beforeEach(() => {
    // 使用 API 登录
    cy.loginByApi('admin', 'admin123');
    cy.visit('/system/user');
  });

  describe('用户列表', () => {
    it('应该正确显示用户列表', () => {
      // 应该显示数据表格
      cy.get('.n-data-table').should('be.visible');
      // 应该有表头
      cy.get('.n-data-table-th').should('have.length.greaterThan', 0);
      // 应该有数据行
      cy.get('.n-data-table-tr').should('have.length.greaterThan', 0);
    });

    it('应该显示部门树', () => {
      // 左侧应该有部门树
      cy.get('[data-cy="dept-tree"]').should('be.visible');
    });

    it('应该支持分页', () => {
      // 应该显示分页器
      cy.get('.n-pagination').should('be.visible');
    });
  });

  describe('搜索功能', () => {
    it('应该支持按用户名搜索', () => {
      cy.get('[data-cy="search-username"]').type('admin');
      cy.get('[data-cy="search-button"]').click();
      // 搜索后应该过滤结果
      cy.get('.n-data-table-tr').should('contain', 'admin');
    });

    it('应该支持重置搜索条件', () => {
      cy.get('[data-cy="search-username"]').type('admin');
      cy.get('[data-cy="reset-button"]').click();
      // 输入框应该被清空
      cy.get('[data-cy="search-username"]').should('have.value', '');
    });
  });

  describe('新增用户', () => {
    it('应该打开新增用户弹窗', () => {
      cy.get('[data-cy="add-user-button"]').click();
      // 应该显示弹窗
      cy.get('.n-modal').should('be.visible');
      cy.get('.n-modal-header').should('contain', '新增');
    });

    it('应该验证必填字段', () => {
      cy.get('[data-cy="add-user-button"]').click();
      // 直接点击确定
      cy.get('[data-cy="submit-button"]').click();
      // 应该显示验证错误
      cy.get('.n-form-item-feedback').should('be.visible');
    });
  });

  describe('编辑用户', () => {
    it('应该能打开编辑弹窗', () => {
      // 点击第一行的编辑按钮
      cy.get('[data-cy="edit-button"]').first().click();
      // 应该显示编辑弹窗
      cy.get('.n-modal').should('be.visible');
      cy.get('.n-modal-header').should('contain', '编辑');
    });
  });

  describe('删除用户', () => {
    it('应该显示删除确认框', () => {
      // 点击第一行的删除按钮
      cy.get('[data-cy="delete-button"]').first().click();
      // 应该显示确认框
      cy.get('.n-dialog').should('be.visible');
    });
  });

  describe('导出功能', () => {
    it('应该支持导出用户列表', () => {
      cy.get('[data-cy="export-button"]').click();
      // 检查是否开始下载（通过网络请求）
      cy.intercept('GET', '**/user/export**').as('exportRequest');
    });
  });
});
