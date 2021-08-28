// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**正确的示例*/
// Cypress.Commands.add('dataCy', (value) => {
//   return cy.get()
// })
const cookie = 'fooEEN0XYJsNRITwXQkBzA';
let url = `http://new.cargoware.com/#/dashboard?sessionId=${cookie}&branchId=1&language=zh`
let PortaddButton = '新增';
const Tips = ''
let PortAddPopup = 'div[aria-label="添加基础港口"]';
let PortaddinputFrame = '.el-input__inner';
let PortaddInputPortSearchButton = '.el-button.el-button--primary.el-button--mini:eq(0)';
let CheckBox = '.ag-icon.ag-icon-checkbox-unchecked';
let LJ_url = /http:\/\/new\.cargoware\.com\/api\/mdm\-service\/seaPort\/portList(\?total=.*)|(\/template\?.*)/
let fixbutton = '确定';
Cypress.Commands.add('Login', (() => {
  cy.clearCookie('Authorization')
  cy.setCookie('Authorization', cookie, { log: false })///设置登录令牌
  cy.setCookie('language', 'zh', { log: false })///设置登录后的国际化
  cy.setCookie('sidebarStatus','0',{ log: false })///这个缓存目前不清楚是干啥的
}))
Cypress.Commands.add('IsTargetPage', (url) => {
  cy.visit(url)
  cy.url().should('eq', url, '验证当前页面是否为要测试的页面')
})
Cypress.Commands.add('IsAddsuccess', ((Tips, options) => {
  var { Tips, Tipss} = options
  const a = Cypress.$(".el-message.el-message--success>p").length
  if (a === 1) {
    if (Tips === '删除成功') {
      return cy.get('.el-message.el-message--success').contains('p.el-message__content', options.Tips)
    } else if (Tips === '新增成功') {
      return cy.get('.el-message.el-message--success').contains('p.el-message__content', options.Tips)
    }
    // return cy.get('.el-message.el-message--success').contains('p.el-message__content', this.TCYZ)
  }
  else {
    return Tips

  }
}))
Cypress.Commands.add('OP_Parent_element', () => {
  return cy.get('div.triggers')
})
Cypress.Commands.add('Port_add_button', () => {
  return cy.OP_Parent_element()
    .contains(PortaddButton)
})
Cypress.Commands.add('Port_add_popup_OP','测试', () => {
  return cy.get(PortAddPopup)
})
Cypress.Commands.add('Portadd_input_Frame', () => {
  return cy.get(PortaddinputFrame)
})
Cypress.Commands.add('Port_add_popup_OP_search_button', () => {
  return cy.get(PortaddInputPortSearchButton)
})
Cypress.Commands.add('LJ', () => {
  return cy.intercept(LJ_url)
})
Cypress.Commands.add('Data_area_box', () => {
  return cy.get(CheckBox)
})
Cypress.Commands.add('fix_button', () => {
  return cy.contains(fixbutton)
})
Cypress.Commands.add('fix_butto1n', () => {
  return cy.contains(fixbutton)
})