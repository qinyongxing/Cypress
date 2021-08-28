describe("测试生成动态测试", () => {
    ["1", "2", "3"].forEach((L) => {
        context(`测试组${L}`, () => {
            ["1", "2", "3"].forEach((LL) => {
                it(`测试用例${L}-${LL}`, () => {
                    cy.log(L);
                });
            });
        });
    });
});
describe("测试断言风格", () => {
    context("测试断言风格", () => {
        it("can subtract numbers", () => {
            cy.wrap(-7).then(($p) => {
                assert.equal($p, -7, "这是备注");
            });
        });
        it("can add numbers", () => {
            cy.wrap(-7).then(($p) => {
                expect($p).to.eq(-7, "这是备注");
            });
        });
        it("can add numbers", () => {
            cy.wrap(-7).should("eq", -7, "这是备注");
        });
    });
});
