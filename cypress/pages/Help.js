class Help {

    elements = {

        optn_ui_design : () =>  cy.get(':nth-child(1) > :nth-child(1) > .checkbox-label'),
        optn_ui_development : () =>  cy.get(':nth-child(2) > :nth-child(1) > .checkbox-label'),
        optn_marketing_site : () =>  cy.get(':nth-child(1) > :nth-child(2) > .checkbox-label'),
        optn_grab_beer : () =>  cy.get(':nth-child(2) > :nth-child(2) > .checkbox-label'),



        btn_next : () =>  cy.get('.next-button'),
        btn_prev : () =>  cy.get('.previous-button'),

    }

    select_ui_design() {
        this.elements.optn_ui_design().click()
    }

    select_ui_development() {
        this.elements.optn_ui_development().click()
    }

    select_marketing_site() {
        this.elements.optn_marketing_site().click()
    }

    select_grab_beer() {
        this.elements.optn_grab_beer().click()
    }


    clickNext(){
        this.elements.btn_next().click()
    }

    clickPrev(){
        this.elements.btn_prev().click()
    }
}

module.exports = new Help();

