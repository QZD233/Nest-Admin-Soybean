/**
 * 角色管理模块 E2E 测试
 *
 * @description
 * 测试角色列表、新增、编辑、删除、权限分配等功能
 */

describe('角色管理', () => {
  beforeEach(() => {
    cy.loginByApi('admin', 'admin123');
    cy.visit('/system/role');
  });

  describe('角色列表', () => {
    it('应该正确显示角色列表', () => {
      cy.get('.n-data-table').should('be.visible');
      cy.get('.n-data-table-tr').should('have.length.greaterThan', 0);
    });

    it('应该显示角色状态标签', () => {
      // 应该有启用/禁用状态标签
      cy.get('.n-tag').should('be.visible');
    });
  });

  describe('搜索功能', () => {
    it('应该支持按角色名称搜索', () => {
      cy.get('[data-cy="search-roleName"]').type('管理员');
      cy.get('[data-cy="search-button"]').click();
      cy.get('.n-data-table-tr').should('contain', '管理员');
    });

    it('应该支持按状态筛选', () => {
      cy.get('[data-cy="search-status"]').click();
      cy.get('.n-base-select-option').contains('正常').click();
      cy.get('[data-cy="search-button"]').click();
    });
  });

  describe('新增角色', () => {
    it('应该打开新增角色弹窗', () => {
      cy.get('[data-cy="add-role-button"]').click();
      cy.get('.n-modal').should('be.visible');
    });

    it('应该显示权限树', () => {
      cy.get('[data-cy="add-role-button"]').click();
      // 应该有权限选择树
      cy.get('.n-tree').should('be.visible');
    });
  });

  describe('权限分配', () => {
    it('应该能打开权限分配弹窗', () => {
      cy.get('[data-cy="assign-permission-button"]').first().click();
      cy.get('.n-modal').should('be.visible');
      cy.get('.n-tree').should('be.visible');
    });
  });

  describe('数据权限', () => {
    it('应该能设置数据权限范围', () => {
      cy.get('[data-cy="data-scope-button"]').first().click();
      cy.get('.n-modal').should('be.visible');
      // 应该有数据权限选项
      cy.get('[data-cy="data-scope-select"]').should('be.visible');
    });
  });
});
