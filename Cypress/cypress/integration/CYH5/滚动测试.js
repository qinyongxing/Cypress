/// <reference types="cypress" />
describe("打开海港", () => {
    context("港口测试", () => {
        beforeEach("", () => {
            cy.Login();
            cy.IsTargetPage("http://new.cargoware.com/#/Information/SeaPort");
            cy.window().then(($l) => {
                $l.window.localStorage.setItem(
                    "CargoBranchId_99_250000099",
                    "2"
                ); ///设置登录后的分公司为哪一个分公司
            });
        });
        it(
            "新增测试",
            {
                animationDistanceThreshold: 5,
                waitForAnimations: true,
                scrollBehavior: "top",
            },
            () => {
                cy.Port_add_button().click();
                cy.Port_add_popup_OP().within(() => {
                    cy.Portadd_input_Frame().type("SH");
                    cy.LJ().as("addport");
                    cy.Port_add_popup_OP_search_button().click();
                    cy.wait("@addport").then(() => {
                        cy.get(
                            "div.ag-body-viewport.ag-layout-normal"
                        ).scrollTo("100%", "0%");
                        cy.get(
                            'div.ag-body-viewport.ag-layout-normal:eq(0) div[col-id="isoCode"]'
                        ).then(($l) => {
                            console.log($l.toArray.toString);
                        });
                    });
                });
            }
        );
    });
});
