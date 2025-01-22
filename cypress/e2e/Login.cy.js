
import LoginPage from '../pageobjects/Login'

describe('Login', () => {
  it('Login with invalid credentials', () => {
    LoginPage.visit()
    cy.viewport(1280, 720)
    LoginPage.getLoginButton().click()  
    LoginPage.login('eruxov1231@gmail.com', 'qwe123RTY456uio!')
    cy.get('.MuiAlert-message.frontend-customer-portal-1xsto0d').should('have.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
  })
})