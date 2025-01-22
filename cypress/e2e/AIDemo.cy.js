import AIDemo from '../pageobjects/aidemo'
describe('Input a prompt and test different demo AI models', () => {
  it('Input a prompt and test different demo AI models', () => {
    
    AIDemo.visit()

    cy.viewport(1280, 720)
    cy.window().should('have.property', 'document'); // Проверяем наличие объекта `document`

    AIDemo.goToAImodel()
    AIDemo.pickModelandWritePrompt('Postman API demo123')

    cy.get('textarea[placeholder="Enter text here"]').should('not.be.visible')

    // cy.get('.c-PJLV.c-rMlRu').eq(1).scrollIntoView()
    // cy.get('button.c-ewUecD.PJLV').click()

    // cy.get('[id^="radix"][id$="-:ru:"]').click({force: true})
    // cy.wait(1000)
    // cy.get('[aria-label="google/gemma-2b-it"]').click({force: true})
    // cy.wait(1000)
    // cy.get('button.c-ltigS.c-ltigS-ihxnEQS-css').click()

    // cy.get('textarea[id*="r0"]').type('Postman API description {enter}')


  })
})

