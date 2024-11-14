describe('Input a prompt and test different demo AI models', () => {
  it('Input a prompt and test different demo AI models', () => {
    
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
    cy.wait(1000)

    cy.get('.c-PJLV.c-rMlRu').eq(1).scrollIntoView()
    cy.get('button.c-ewUecD.PJLV').click()

    cy.get('[id^="radix"][id$="-:ru:"]').click({force: true})
    cy.wait(1000)
    cy.get('[aria-label="google/gemma-2b-it"]').click()
    cy.wait(1000)
    cy.get('button.c-ltigS.c-ltigS-ihxnEQS-css').click()

    cy.get('textarea[id*="r0"]').type('Postman API description {enter}')


  })
})

