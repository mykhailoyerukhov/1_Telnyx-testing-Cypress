

describe('Signing up', () => {
  it('Signing up', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)

    cy.get('[href="/sign-up"]').eq(0)
    // cy.pause()
    cy.get('[href="/sign-up"]').eq(0).click({force: true})

    cy.get('div.nsm7Bb-HzV7m-LgbsSe-bN97Pc-sM5MNb').click()
    cy.wait(1000)

    cy.get('.rFrNMe.X3mtXb.UOsO2.ToAxb.zKHdkd.sdJrJc.Tyc9J').type('mykhailo.yerukhov@gmail.com')
    // cy.get('input').eq(0).type('fake@company.com')
    // // cy.pause()
    // cy.get('input').eq(1).type('Jacob')
    // // cy.pause()
    // cy.get('input').eq(2).type('Wasowski')
    // // cy.pause()
    // cy.get('input').eq(3).type('qwe123RTY!')
    // // cy.pause()
    // cy.get('input').eq(4).click()
    // cy.get('button').eq(8).should('have.text', 'SIGN UPSIGN UP')

  })
})