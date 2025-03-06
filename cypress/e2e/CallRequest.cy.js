import MainPage from '../pageobjects/mainpage.ts'

describe('Fill form to get a call', () => {
    beforeEach(() => {
        cy.fixture('users.json').then(function(fixture) {
            this.fixture = fixture;
        });
        MainPage.visit();
        cy.viewport(1280, 720);
    });
    it.skip('Applying a form without hCaptcha', function() {
        MainPage.fillCallbackFormValidCred()
        MainPage.checkFormIsSent()

    });
    it('Applying a form with invalid credentials', function() {
        MainPage.fillCallbackFormInvalidCred()
        MainPage.checkDomainErrorMessage()
        MainPage.checkPhoneNumberErrorMessage()
        MainPage.checkEmailErrorMessage()
    });
    it('Applying with a form with empty fields', function() {
        MainPage.submitCallBackForm()
        cy.get('#business_name_message').should('include.text', 'This field is required.')

    });


});