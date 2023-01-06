class CnaChecklistPage {

  elem = {
    // These locators use template evaluation for variable substitution of ${field} & ${value}.
    "workSettings": `\`//input[contains(@name,'Work Settings') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,    // Need the clickable parent.
    "activitiesOfDailyLiving": `\`//input[contains(@name,'Activities of Daily Living') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "equipment": `\`//input[contains(@name,'Equipment') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "infectionControl": `\`//input[contains(@name,'Infection Control') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "procedures": `\`//input[contains(@name,'Procedures') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "professionalSkillsAndKnowledge": `\`//input[contains(@name,'Professional Skills and Knowledge') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "recordingAndReporting": `\`//input[contains(@name,'Recording and Reporting') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "computerizedCharting": `\`//input[contains(@name,'Computerized Charting') and contains(@name,'\${field}') and contains(@value,'\${value}')]/..\``,
    "ageSpecificCompetency": `\`//input[contains(@name,'Age Specific Competency') and contains(@name,'\${field}')]/../..\``,              // Need the grand-parent.

    "signatureName": "input[name='signature']",
    "signatureDate": "input[name='signedDate']",

    "agreeAndSubmitButton": "button[data-qa-id*='agree_and_submit_button']",
    "cancelButton": "button[data-qa-id*='cancel_button']",
    "yesDiscardChangesButton": "//span[contains(text(),'YES DISCARD CHANGES')]/.."     // Need the clickable parent.
  }
  
  setWorkSettings(field, value) { return cy.xpath(eval(this.elem.workSettings)).click() }
  setActivitiesOfDailyLiving(field, value) { return cy.xpath(eval(this.elem.activitiesOfDailyLiving)).click() }
  setEquipment(field, value) { return cy.xpath(eval(this.elem.equipment)).click() }
  setInfectionControl(field, value) { return cy.xpath(eval(this.elem.infectionControl)).click() }
  setProcedures(field, value) { return cy.xpath(eval(this.elem.procedures)).click() }
  setProfessionalSkillsAndKnowledge(field, value) { return cy.xpath(eval(this.elem.professionalSkillsAndKnowledge)).click() }
  setRecordingAndReporting(field, value) { return cy.xpath(eval(this.elem.recordingAndReporting)).click() }
  setComputerizedCharting(field, value) { return cy.xpath(eval(this.elem.computerizedCharting)).click() }
  setAgeSpecificCompetency(field) { return cy.xpath(eval(this.elem.ageSpecificCompetency)).click() }

  getSignatureName() { return cy.get(this.elem.signatureName) }
  getSignatureDate() { return cy.get(this.elem.signatureDate) }

  getAgreeAndSubmitButton() { return cy.get(this.elem.agreeAndSubmitButton) }
  getCancelButton() { return cy.get(this.elem.cancelButton) }
  getYesDiscardChangesButton() { return cy.xpath(this.elem.yesDiscardChangesButton) }

  signAndDate(name, date) {
    this.getSignatureName().type(name)
    this.getSignatureDate().type(date)
  }
}
export default CnaChecklistPage
