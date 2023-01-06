class LoginPage {

  elem = {
    "userEmail": "input[formcontrolname='email']",
    "userPassword": "input[formcontrolname='password']",
    "login": "button[class*='login']"
  }
  
  getUserEmail() { return cy.get(this.elem.userEmail) }
  getUserPassword() { return cy.get(this.elem.userPassword) }
  getLoginButton() { return cy.get(this.elem.login) }

  login(userEmail, password) {
    cy.visit('/login').wait(500)
    .then(() => {
      this.getUserEmail().type(userEmail)
      this.getUserPassword().type(password)
      this.getLoginButton().click()  
    })
  }
}
export default LoginPage
