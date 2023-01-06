import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
import CnaChecklistPage from "../pages/CNA_ChecklistPage"

import moment from 'moment'

const loginPage = new LoginPage()
const homePage = new HomePage()
const checklistPage = new CnaChecklistPage()

describe('AYA Healthcare Example Test', function () {
  const userEmail = "dcc9701@gmail.com"
  const userName = "David Cooper"
  const userPassword = "Aya-dcc9701"

  it('Submit a filled-in CNA Checklist', function () {
    loginPage.login(userEmail, userPassword)
    homePage.openChecklists()

    checklistPage.setWorkSettings('Clinic', 3)
    checklistPage.setEquipment('Pulse Oximeter', 4)
    checklistPage.setProcedures('Phlebotomy', 4)
    checklistPage.setComputerizedCharting('McKesson', 3)

    checklistPage.setAgeSpecificCompetency('Child')
    checklistPage.setAgeSpecificCompetency('Adolescent')
    checklistPage.setAgeSpecificCompetency('Young Adult')

    // Assert AggreeAndSubmit button is disabled until signature name & date are entered.
    checklistPage.getAgreeAndSubmitButton().should('be.disabled')
    checklistPage.signAndDate(userName, moment().format('MM DD YYYY'))
    cy.wrap(null).then(() => {
      checklistPage.getAgreeAndSubmitButton().should('be.enabled')
    })

    // Assert "Are you sure? dialog is displayed when choose to Cancel, then Confirm cancellation.
    checklistPage.getCancelButton().click()
    .then(() => {
      cy.contains('Are you sure?').should('be.visible')
      checklistPage.getYesDiscardChangesButton().should('be.visible')
      checklistPage.getYesDiscardChangesButton().click()
    })
    .then(() => {
      // Finally, assert we are returned to the previous page, then logout.
      homePage.getChecklistsStartButton().should('be.visible')
      homePage.logout()
    })

  })

})
