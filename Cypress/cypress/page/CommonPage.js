/// <reference types="cypress" />
/**所有页面公用的基本类方法*/
export default class CommonPage {
    constructor() {
        this.TCYZ = ''
    }
    /**
     * 打开浏览器在浏览器塞进cookie
     */
    Login() {
        cy.clearCookie('Authorization')
        cy.setCookie('Authorization', '0FOQC29q4opTS1-seou9XQ')
    }
    /**判断当前首页是否为要测试的地址*/
    IsTargetPage() {
        cy.visit(this.url)
        cy.url().should('eq', this.url, '验证当前页面是否为要测试的页面')
    }
    /**弹窗提示验证是否成功*/
    set IsAddsuccess(TCYZ) {
        this.TCYZ = TCYZ
    }
    get IsAddsuccess() {
        if (cy.get('.el-message.el-message--success').should('exist')) {
            if (this.TCYZ === '删除成功') {
                return cy.get('.el-message.el-message--success').contains('p.el-message__content', this.TCYZ)
            } else if (this.TCYZ === '新增成功') {
                return cy.get('.el-message.el-message--success').contains('p.el-message__content', this.TCYZ)
            }
            // return cy.get('.el-message.el-message--success').contains('p.el-message__content', this.TCYZ)
        }
        else {
            return cy.get('.el-message.el-message--success').should('exist')

        }

    }
}