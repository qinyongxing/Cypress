/// <reference types="cypress" />
describe("首页测试", () => {
    it("打开首页", () => {
        cy.Login();
        cy.IsTargetPage("http://new.cargoware.com/#/dashboard");
    });
});
