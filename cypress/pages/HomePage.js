class HomePage {

  elem = {
    "appProgressBarChecklists": "//div[@class='progress-bar-container']/*/span[contains(text(),'Checklists')]",
    "checklistStart": "button[class*='app-assessment'] span[class*='button-wrapper'",
    "logoutItem": "//span[contains(text(),'Log out')]",
  }
  
  getAppProgressBarChecklists() { return cy.xpath(this.elem.appProgressBarChecklists) }
  getChecklistsStartButton() { return cy.get(this.elem.checklistStart) }
  getLogoutItem() { return cy.xpath(this.elem.logoutItem) }

  openChecklists() {
    this.getAppProgressBarChecklists().click()
    this.getChecklistsStartButton().click()
  }

  logout() {
    this.getLogoutItem().click()
  }
}
export default HomePage
