/// <reference types="Cypress" />
describe('第一个访问页面', () => {
    it('访问页面', () => {
        cy.visit('/')
        cy.pause()
        cy.contains('type').click()
        cy.url().should('include','/commands')
        cy.get('.action-email')
        .type('1074653024@qq.com')
        .should('have.value','1074653024@qq.com')
    })
})