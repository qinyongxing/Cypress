/// <reference types="cypress" />
describe('打开海港', () => {
    context('港口测试', () => {
        beforeEach('', () => {
            cy.Login()
            cy.IsTargetPage('http://new.cargoware.com/#/Information/SeaPort')
        })
        it('新增测试', () => {
            cy.Port_add_button().click()
            cy.Port_add_popup_OP().within(() => {
                cy.Portadd_input_Frame().type('SZCHA')
                cy.LJ().as('addport')
                cy.wait('@addport')
                cy.Port_add_popup_OP_search_button().click()
                cy.wait("@addport").then(() => {
                    cy.Data_area_box().eq(5).click().then(() => {
                        cy.fix_button().click()
                    })
                })
                // cy.fix_button().click()
            }).then(() => {
                cy.get('.el-message.el-message--success>p')
                    .then(($p) => {
                        cy.IsAddsuccess('新增成功').should('have.text', '新增成功', '是否新增成功2')
                        // const a = Cypress.$($p).length
                        // console.log(Cypress.$($p))
                        // Cypress.log({ name: '3213', message: Cypress.$($p) })


                    })
                // .contains('p.el-message__content', '新增成功')  
                // .should(($el)=>{
                // expect($el).to.contain('新增成功','是否新增成功2')
                // })
                // cy.IsAddsuccess('新增成功').should('have.text', '新增成功', '是否新增成功2')
            }) 


        })
        
    })
})