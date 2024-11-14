describe('Login', () => {
  it('Login', () => {
    
    cy.visit('https://telnyx.com/')
    cy.wait(2000)
    cy.contains('Log in').eq(0).invoke('attr', 'target', '_self').click({ force:true})
    cy.get('input').eq(0).type('fake@company.com')
    cy.get('input').eq(1).type('qwe123RTY!')

    cy.get('button').eq(5).should('be.visible').click()
  })
})