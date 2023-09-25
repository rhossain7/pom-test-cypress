class SpecifyBudget {

    elements = {

        slider_bar : () =>  cy.get('.js-irs-1'),
        check_box : () => cy.get('.final > .extra-option-wrap > .checkbox-square > .checkbox-label'),
        error_msg : () => cy.get('.error-message > div'),

        btn_submit : () =>  cy.contains('Send Form'),
        btn_prev : () =>  cy.get('.previous-button'),

    }

    mark_check_box() {
        this.elements.check_box().click()
    }

    clickSubmit(){
        this.elements.btn_submit().click()
    }

    clickPrev(){
        this.elements.btn_prev().click()
    }

}

module.exports = new SpecifyBudget();

