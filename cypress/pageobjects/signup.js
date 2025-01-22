class SignUp {
    visit() {
        cy.visit('https://telnyx.com/sign-up')
    }
    getUserNameField() {
        return cy.get('#email')
    }
    getFirstNameField() {
        return cy.get('#first_name')
    }
    getLastNameField() {
        return cy.get('#last_name')
    }
    getPasswordField() {
        return cy.get('#password')
    }
    getCheckBoxTermsField() {
        return cy.get('#terms_and_conditions')
    }
    getCheckboxMarketingField() {
        return cy.get('#subscription_opt_in')
    }
    getSignUpButtonField() {
        return cy.get('button[type="submit"]').eq(0)
    }
    signUp(username, firstname, lastname, password) {
        this.getUserNameField().type(username);
        this.getFirstNameField().type(firstname);
        this.getLastNameField().type(lastname);
        this.getPasswordField().type(password);
        this.getCheckBoxTermsField().click();
        this.getSignUpButtonField().click();
    }

}
export default new SignUp();