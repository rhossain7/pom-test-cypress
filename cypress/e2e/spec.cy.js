import home from '../pages/Home'
import about from '../pages/About'
import help from '../pages/Help'
import timeFrame from '../pages/TimeFrame'
import specifyBudget from '../pages/SpecifyBudget'


describe('Multistep form flow test', () => {
  it('should fillup the form and goto next phase', () => {

    const name  = 'Reedwan'
    const email = 'reedwan@rootnext.com'
    const aboutCompanyText = 'Rootnext is next level company!'

    cy.visit('/')

    home.typeName(name)
    home.typeEmail(email)
    home.clickNext()

    about.typeBrandCompany(aboutCompanyText)
    about.clickNext()

    help.select_ui_design()
    help.select_grab_beer()
    help.clickNext()

    timeFrame.mark_check_box()
    timeFrame.clickNext()

    specifyBudget.mark_check_box()
    specifyBudget.clickSubmit()
    specifyBudget.elements.error_msg().should('exist')
    
  })
})   