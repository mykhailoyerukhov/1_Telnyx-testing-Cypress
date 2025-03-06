class MainPage {
    visit(){
        cy.visit('https://telnyx.com/')
    }

    clickOnElemnt(selector) {
        cy.get(selector).click()
    }
    validateVisibility(selector) {
        cy.get(selector).should('be.visible')
    }
    validateClickability(selector) {
        cy.get(selector).should('be.clickable')
    }

    // Business subscription
    get emailField() {return cy.get('#email[placeholder*="Enter business email"]')};
    get subscribeBtn() {return cy.get('.c-fOQMKa.c-fOQMKa-jtQvir-background-dark.c-fOQMKa-izROKD-cv').eq(1)}

    subscribeOnBusinessNewsletter(email) {
        this.emailField.type(email)
        this.subscribeBtn.click({force: true})
    };
    
    // Request callback field on the main page
    fillCallbackFormValidCred() {
        cy.fixture('users.json').then((fixtura) => {
            const formData = fixtura.valid_credentials.forCallback

        cy.get('#business_name').type(formData.company_name)
        cy.get('#domain').type(formData.company_domain)
        cy.get('#phone_number').type(formData.phone_number)
        cy.get('#email').type(formData.email)
        cy.get('#terms_and_conditions').click()
        cy.get('.c-fOQMKa.c-fOQMKa-fwzCzT-background-light.c-fOQMKa-cZriAm-cv.c-iWMVBJ').click()
        })    
    };
    submitCallBackForm() {
        cy.get('.c-fOQMKa.c-fOQMKa-fwzCzT-background-light.c-fOQMKa-cZriAm-cv.c-iWMVBJ').click()
    }
    fillCallbackFormInvalidCred() {
        cy.fixture('users.json').then((fixtura) => {
            const formData = fixtura.invalid_credentials.forCallback_invalid

        cy.get('#business_name').type(formData.company_name)
        cy.get('#domain').type(formData.company_domain)
        cy.get('#phone_number').type(formData.phone_number)
        cy.get('#email').type(formData.email)
        cy.get('#terms_and_conditions').click()
        cy.get('.c-fOQMKa.c-fOQMKa-fwzCzT-background-light.c-fOQMKa-cZriAm-cv.c-iWMVBJ').click()
        })    
    }
    checkFormIsSent() {
        cy.get('p.c-PJLV.c-rMlRu').should('include.text', 'One moment please, your personal AI agent will be ready soon.');
    }
    checkDomainErrorMessage() {
        cy.get('#domain_message').should('include.text', 'Please enter a valid Domain name.')
    }
    checkPhoneNumberErrorMessage() {
        cy.get('#phone_number_message').should('include.text', 'Please enter a valid phone number.')
    }
    checkEmailErrorMessage() {
        cy.get('#email_message').should('include.text', 'Please enter a valid email address.')
    }
}
export default new MainPage();