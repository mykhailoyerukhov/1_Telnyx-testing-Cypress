
import LoginPage from '../pageobjects/login'

describe('Login', () => {
  beforeEach(() => {
    cy.fixture('users.json').then(function(fixture) {
      this.fixture = fixture;
    });
    LoginPage.visitLoginPage();
    cy.viewport(1280, 720);
  });

  it('logging in with valid credentials', function() {
    LoginPage.fillUserdataAndClickLogin(this.fixture.valid_credentials.email, this.fixture.valid_credentials.password)

    // here should be login url of a login page, but I couldn't log into Telnyx's system
    cy.url().should('eq', 'https://portal.telnyx.com/#/login/sign-in')

  });

  it('login with empty data', function() {
    LoginPage.clickLogin()
    cy.wait(3000)
    LoginPage.clickLogin()
    cy.get('.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.frontend-customer-portal-ehawra').should('be.visible')
  });

  it('login with invalid credentials', function() {
    LoginPage.fillUserdataAndClickLogin(this.fixture.invalid_credentials.invalid_email.email, this.fixture.invalid_credentials.password_no_specials.password)

    cy.get('.MuiAlert-message.frontend-customer-portal-1xsto0d').should('be.visible')
    cy.get('.MuiAlert-message.frontend-customer-portal-1xsto0d').should('include.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.')
  });

  it('login with wrong email format', function() {
    LoginPage.fillUserdataAndClickLogin(this.fixture.invalid_credentials.wrong_email_format.email, this.fixture.invalid_credentials.password_no_specials.password)

    cy.get('.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.MuiFormHelperText-filled.frontend-customer-portal-ehawra').should('be.visible')
    cy.get('.MuiFormHelperText-root.Mui-error.MuiFormHelperText-sizeMedium.MuiFormHelperText-contained.MuiFormHelperText-filled.frontend-customer-portal-ehawra').should('include.text', 'Please enter a valid email address.')
  });
});