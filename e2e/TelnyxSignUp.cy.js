

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://telnyx.com/')

    cy.get('[href="/sign-up"]').eq(0)
    // cy.pause()
    cy.get('[href="/sign-up"]').eq(0).click()
    cy.pause()
    cy.get('input').eq(0).type('fake@company.com')
    // cy.pause()
    cy.get('input').eq(1).type('Jacob')
    // cy.pause()
    cy.get('input').eq(2).type('Wasowski')
    // cy.pause()
    cy.get('input').eq(3).type('qwe123RTY!')
    // cy.pause()
    cy.get('input').eq(4).click()
    cy.pause()
    cy.get('button').eq(8).should('have.text', 'SIGN UPSIGN UP')




  })
})