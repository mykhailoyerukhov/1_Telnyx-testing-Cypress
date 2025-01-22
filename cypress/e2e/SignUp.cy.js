import SignUp from '../pageobjects/signup'

describe('Signing up', () => {
  it('Signing up with invalid credentials - should show error', () => {
    SignUp.visit()
    cy.viewport(1280, 720)
    SignUp.signUp('fake@company.com', 'Jacob', 'Wasowski', 'qwe123RTYasdQW!')
    cy.get('.c-UUKrH.c-UUKrH-kDyeyw-type-error').should('be.visible')
  })
})