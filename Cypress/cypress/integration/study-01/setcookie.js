/// <reference types="cypress" />
describe('设置COOKIE', () => {
    it('设置cookie', () => {
        const { _, $ } = Cypress
        var SY=new Array(3).fill('@MDM').concat(new Array(5).fill('@SYS'))
        cy.intercept('GET','http://new.cargoware.com/api/mdm-service/seaPort/portList/template?likeName=**').as('CX')
        cy.intercept('GET', ' http://new.cargoware.com/api/mdm-service/**').as('MDM')
        cy.intercept('GET', 'http://new.cargoware.com/api/sys-service/**').as('SYS')
        // cy.intercept({method:'GET',url:'http://new.cargoware.com/api/mdm-service/**',staticResponse:{statusCode:'200'}}).as('INIT')
        cy.clearCookie('Authorization')
        cy.setCookie('Authorization', 'dXrBVR8LJaBYTBaJJcEFog')
        cy.visit('/')
       cy.wait(SY)
            .then(($l) => {
                cy.get('.el-button.el-button--primary.el-button--mini:eq(1)').click()
                cy.get('div[aria-label="添加基础港口"]').within(()=>{
                    cy.get('.el-input__inner').type('IND2S')
                    cy.get('.el-button.el-button--primary.el-button--mini:eq(0)').click()
                    cy.wait('@CX').its('response.body.data.platform')
                    .should(($CX)=>{
                        expect($CX[0].interchangeCode,`验证查询接口是否和页面输入${$CX[0].interchangeCode}的一致`).eq('IND2S')
                    })
                })
                // cy.get('.hamburger.is-active').click()
                // cy.wrap($l[0]).its('request.body')
                //    .should('eq','GET')
            })
    })
})