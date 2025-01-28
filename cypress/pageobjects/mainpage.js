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


    get emailField() {return cy.xpath('//*[@id="email" and contains(@placeholder, "Enter business email")]')};
    get subscribeBtn() {return cy.get('.c-fOQMKa.c-fOQMKa-jtQvir-background-dark.c-fOQMKa-izROKD-cv').eq(1)}
    subscribeOnBusinessNewsletter(email) {
        this.emailField.type(email)
        this.subscribeBtn.click({force: true})
    }
    
    
}
export default new MainPage();