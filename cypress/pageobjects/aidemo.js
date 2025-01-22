class AIDemo {
    visit() {
        cy.visit('https://telnyx.com/')
    }

    goToAImodel() {
        return cy.get('h3.c-PJLV.c-rMlRu').eq(0).scrollIntoView()
    }

    pickModelandWritePrompt(text) {
        cy.get('button.c-ewUecD.PJLV').click()
        cy.get('[id^="radix"][id$="-:ru:"]').click({force: true});
        cy.get('[aria-label="google/gemma-2b-it"]').click({force: true});
        cy.get('button.c-ltigS.c-ltigS-ihxnEQS-css').click()
        cy.get('textarea[id*="r0"]').type(text)
        cy.get('textarea[id*="r0"]').type('{enter}')
    }


}
export default new AIDemo();