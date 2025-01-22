describe('Check various options of the coverage map', () => {
  it('Check various options of the coverage map', () => {
    
    cy.visit('https://telnyx.com/')

    // cy.get('.c-hvmQSv.c-gACVrx').eq(0).click()
    cy.get('.c-hvmQSv.c-gACVrx').eq(0).contains('Communications')
    cy.wait(5000)
    cy.get('.c-hvmQSv.c-gACVrx').eq(0).contains('Communications').click({force: true})
    cy.wait(5000)


  })
})