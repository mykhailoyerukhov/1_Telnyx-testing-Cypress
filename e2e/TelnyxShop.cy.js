describe('Login', () => {
  it('Login', () => {
    
    cy.visit('https://telnyx.com/')
    cy.wait(2000)
    cy.get('[href="https://shop.telnyx.com"]').eq(0).invoke('attr', 'target', '_self').click({force: true})
    cy.wait(2000)
    cy.get('[id="quick-add-template--14828910772302__featured-collection-06960027533390-submit"]').scrollIntoView().click()
    cy.wait(2000)
    cy.get('.icon.icon-close').eq(0).click()
    cy.wait(200)
    cy.get('.quick-add__submit.button.button--full-width.button--secondary').eq(1).click()
    cy.wait(2000)
    cy.get('.icon.icon-close').eq(0).click()
    cy.wait(1000)
    cy.get('.quick-add__submit.button.button--full-width.button--secondary').eq(2).click()
    cy.get('[id="CartDrawer-Checkout"]').click()

    cy.wait(1000)

    //address
    cy.get('[id="email"]').type('fake@email.com')
    cy.get('[id="TextField0"]').type('Jacob')
    cy.get('[id="TextField1"]').type('Wazowski')
    cy.get('[id="TextField2"]').type('Kyiv city, first street, apt. 23/1')
    cy.get('[id="TextField4"]').type('Kyiv')
    cy.get('[id="TextField5"]').type('37400')
    cy.wait(1000)
    cy.get('[id="number"][data-card-fields="number"]').type('4441111321344513')
    cy.wait(1000)
    cy.get('[id="expiry"]').eq(0).type('07/25')
    cy.get('[id="TextField6"]').type('380507418965')

    //card
    cy.wait(5000)
    //can't imput payment numbers
    // cy.get('[id="number"][data-card-fields="number"]').type('4441111321344513')







  })
})