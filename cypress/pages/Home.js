class Home {

    elements = {

        field_name : () =>  cy.get('#Name'),
        field_email : () =>  cy.get('#Email'),

        btn_next : () =>  cy.get('.next-button'),
        btn_prev : () =>  cy.get('.previous-button'),

    }

    typeName(text) {
        this.elements.field_name().type(text)
    }

    typeEmail(text) {
        this.elements.field_email().type(text)
    }

    clickNext(){
        this.elements.btn_next().click()
    }
}

module.exports = new Home();

