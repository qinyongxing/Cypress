/// <reference types="cypress" />
describe("测试promise", () => {
  context("测试promise1", () => {
    it(
      "waits for promises to resolve",
      {
        defaultCommandTimeout: 5500,
      },
      () => {
        let waited = true;
        function waitOneSecond() {
          return new Cypress.Promise.resolve()
          ((resolve, reject) => {
            setTimeout(() => {
              if (waited == true) {
                waited = true;
                resolve("Foo");
              }
              reject("Bar");
            }, 1000);
          });
        }
        cy.wrap("456").then(() => {
          return waitOneSecond()
            .then(
              value => {
                cy.log("1");
                return("返回1");
                // return "321";
              },
              reson => {
                expect(reson).to.eq("Bar");
                expect(waited).to.be.true;
              }
            )
            .then(
              value => {
                cy.log(value);
                // return "321";
              }
            );
        });
        // .then(
        //   con => {
        //     // cy.log(con)
        //     return "3213";
        //   },
        //   conp => {
        //     // cy.log(con)
        //     return "3213";
        //   }
        // )
        // .then(cons => {
        //   cy.log(cons);
        // });
      }
    );
  });
});
