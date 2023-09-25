class TimeFrame {

    elements = {

        slider_bar : () =>  cy.get('.js-irs-1'),
        check_box : () => cy.get('[style="transform: translateX(-2790px); opacity: 1; z-index: 3; transition: opacity 200ms ease 0s;"] > .collaborate-form-step > .form-content > .extra-option-wrap > .checkbox-square > .checkbox-label'),
       


        btn_next : () =>  cy.get('.next-button'),
        btn_prev : () =>  cy.get('.previous-button'),

    }

    mark_check_box() {
        this.elements.check_box().click()
    }

    clickNext(){
        this.elements.btn_next().click()
    }

    clickPrev(){
        this.elements.btn_prev().click()
    }

}

module.exports = new TimeFrame();

