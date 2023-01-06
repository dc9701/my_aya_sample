import LoginPage from "../pages/LoginPage"

describe('My First Cypress Test', function () {
  const loginPage = new LoginPage()
  const userEmail = "dcc9701@gmail.com"
  const userPassword = "Aya-dcc9701"

  it('Submit a CNA Checklist', function () {
    loginPage.login(userEmail, userPassword)
  })
})