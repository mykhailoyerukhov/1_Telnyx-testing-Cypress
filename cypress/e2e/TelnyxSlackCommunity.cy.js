describe('Login', () => {
  it('Login', () => {
    
    cy.visit('https://telnyx.com/')
    cy.wait(2000)

    cy.viewport(1280, 720)
    cy.get('[id^="radix-"][id$=":R356jm:"]').invoke('attr', 'target', '_self').click()
    cy.wait(1000)

    cy.get('[data-href="https://joinslack.telnyx.com/"]').click()
    cy.pause()
  })
})