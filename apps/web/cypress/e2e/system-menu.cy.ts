/**
 * 菜单管理模块 E2E 测试
 *
 * @description
 * 测试菜单树、新增、编辑、删除等功能
 */

describe('菜单管理', () => {
  beforeEach(() => {
    cy.loginByApi('admin', 'admin123');
    cy.visit('/system/menu');
  });

  describe('菜单列表', () => {
    it('应该正确显示菜单树形表格', () => {
      cy.get('.n-data-table').should('be.visible');
      // 应该有展开/折叠按钮
      cy.get('.n-data-table-expand-trigger').should('exist');
    });

    it('应该能展开/折叠菜单层级', () => {
      cy.get('.n-data-table-expand-trigger').first().click();
      // 点击后应该显示子菜单
      cy.get('.n-data-table-tr').should('have.length.greaterThan', 1);
    });
  });

  describe('新增菜单', () => {
    it('应该打开新增菜单弹窗', () => {
      cy.get('[data-cy="add-menu-button"]').click();
      cy.get('.n-modal').should('be.visible');
    });

    it('应该能选择菜单类型', () => {
      cy.get('[data-cy="add-menu-button"]').click();
      // 应该有菜单类型选项：目录、菜单、按钮
      cy.get('[data-cy="menu-type"]').should('be.visible');
    });

    it('应该能选择父菜单', () => {
      cy.get('[data-cy="add-menu-button"]').click();
      cy.get('[data-cy="parent-menu"]').click();
      // 应该显示菜单树选择器
      cy.get('.n-tree-select').should('be.visible');
    });

    it('应该能选择图标', () => {
      cy.get('[data-cy="add-menu-button"]').click();
      cy.get('[data-cy="icon-select"]').click();
      // 应该显示图标选择器
      cy.get('.icon-picker').should('be.visible');
    });
  });

  describe('编辑菜单', () => {
    it('应该能编辑菜单信息', () => {
      cy.get('[data-cy="edit-button"]').first().click();
      cy.get('.n-modal').should('be.visible');
      // 应该预填充现有数据
      cy.get('[data-cy="menu-name"]').should('not.have.value', '');
    });
  });

  describe('删除菜单', () => {
    it('应该显示删除确认', () => {
      cy.get('[data-cy="delete-button"]').first().click();
      cy.get('.n-dialog').should('be.visible');
    });

    it('有子菜单时应该提示无法删除', () => {
      // 找到有子菜单的项目尝试删除
      cy.get('.n-data-table-expand-trigger').first().click();
      cy.get('[data-cy="delete-button"]').first().click();
      // 应该有提示信息
      cy.get('.n-dialog, .n-message').should('be.visible');
    });
  });
});
