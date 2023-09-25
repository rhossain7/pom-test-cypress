class About {

    elements = {

        field_brand_company : () =>  cy.get('#Brand-Company'),

        btn_next : () =>  cy.get('.next-button'),
        btn_prev : () =>  cy.get('.previous-button'),

    }

    typeBrandCompany(text) {
        this.elements.field_brand_company().type(text)
    }


    clickNext(){
        this.elements.btn_next().click()
    }

    clickPrev(){
        this.elements.btn_prev().click()
    }
}

module.exports = new About();

