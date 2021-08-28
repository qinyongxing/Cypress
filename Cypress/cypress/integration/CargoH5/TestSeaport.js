/// <reference types="cypress"/>
import SeaportPage from "../../page/SeaPort";
describe('打开海港', () => {
    context('海港—港口页签测试', () => {
        before('实例化对象', () => {
            SeaportIntance.Login()
            SeaportIntance.IsTargetPage()
        })
        beforeEach('登录验证', () => {
            SeaportIntance.Login()
        })
        afterEach('重新加载页面', () => {
            cy.reload(true, { log: false })
        })
        const SeaportIntance = new SeaportPage()
        it.only('新增海港测试', () => {
            SeaportIntance.IsAddsuccess = '新增成功'
            SeaportIntance.Port_add_button.click()
            SeaportIntance.Port_add_popup().within(() => {
                SeaportIntance.Portadd_input_Frame.type(SeaportIntance.Port)
                SeaportIntance.LJ.as('CX')
                SeaportIntance.Port_add_input_port_search_button.click()
                SeaportIntance.Display_Area.within(() => {
                    cy.wait(['@CX'])
                    SeaportIntance.Check_box.eq(5).click()
                })
                SeaportIntance.fix_button.click()
            })
            cy.should()
            SeaportIntance.IsAddsuccess.should('have.text', '新增成功', '是否新增成功')
        })
        it('查询测试', () => {
            SeaportIntance.Port_input_frame
            SeaportIntance.LJ.as('Searchaddport')
            SeaportIntance.Port_search_Button.click()
            cy.wait(['@Searchaddport']).its("response.body.data.list.0.code")
            // .should('eq',SeaportIntance.Port)
        })

    })
})
