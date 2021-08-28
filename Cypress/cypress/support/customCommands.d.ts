declare namespace Cypress {
    interface Chainable<Subject> {
        Login(): Chainable<any>
        IsTargetPage(url: any): Chainable<any>
        IsAddsuccess(Tips: any, options: any): Chainable<any>
        OP_Parent_element(): Chainable<any>
        Port_add_button(): Chainable<any>
        Port_add_popup_OP(): Chainable<any>
        Portadd_input_Frame(): Chainable<any>
        Port_add_popup_OP_search_button(): Chainable<any>
        LJ(): Chainable<any>
        Data_area_box(): Chainable<any>
        fix_button(): Chainable<any>
        fix_butto1n(): Chainable<any>
  }
}