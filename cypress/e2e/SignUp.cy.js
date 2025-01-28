import SignUp from '../pageobjects/signup'

describe('Signing up', () => {
  beforeEach(() => {
    cy.fixture('users.json').then(function (fixture) {
      this.fixture = fixture;
    });
    SignUp.visitSignupPage();
    cy.viewport(1280, 720)
  })
  it.skip('Signing up with valid credentials', function() {
    // SignUp.fillDataAndClickSignup('fake@company.com', 'Jacob', 'Wasowski', 'qwe123RTYasdQW!')
    
    // using data from fixture
    SignUp.fillDataAndClickSignup(this.fixture.valid_credentials.email, this.fixture.valid_credentials.first_name, this.fixture.valid_credentials.last_name, this.fixture.valid_credentials.password)

    // check that the error message pops-up
    cy.get('.c-UUKrH.c-UUKrH-kDyeyw-type-error').should('be.visible')
  });

  it.skip('Sign up with invalid credentials - short password', function() {
    SignUp.fillDataAndClickSignup(this.fixture.invalid_credentials.invalid_email.email, this.fixture.valid_credentials.first_name, this.fixture.valid_credentials.last_name, this.fixture.invalid_credentials.password_short.password)
    
    cy.get('#passwordMinLength').should('be.visible')
    cy.get('#passwordMinLength').should('include.text', 'Password must be at least 12 characters.')
  });

  it.skip('Sign up with invalid credentials - wrong email', function() {
    SignUp.fillDataAndClickSignup(this.fixture.invalid_credentials.wrong_email_format.email, this.fixture.valid_credentials.first_name, this.fixture.valid_credentials.last_name, this.fixture.valid_credentials.password)

    cy.get('.c-UUKrH.c-UUKrH-kDyeyw-type-error').should('include.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
  });
  it('Sign up with invalid credentials - without numbers in password', function() {
    SignUp.fillDataAndClickSignup(this.fixture.invalid_credentials.wrong_email_format.email, this.fixture.valid_credentials.first_name, this.fixture.valid_credentials.last_name, this.fixture.invalid_credentials.password_no_numbers.password)
    cy.get('.c-UUKrH.c-UUKrH-kDyeyw-type-error').should('be.visible')
    cy.get('#passwordOneNumber').should('include.text', 'Password must contain at least one number.')
  })
})
