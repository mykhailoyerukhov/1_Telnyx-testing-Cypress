describe('Login', () => {
  it('Login', () => {
    
    // cy.intercept('**/*.css', { statusCode: 200, body: '' });
    // cy.intercept('**/*.js', { statusCode: 200, body: '' });

    cy.visit('https://developers.telnyx.com/', {
       waitUntil: 'domcontentloaded'
    })

    cy.wait(10000)

    cy.get('#Email').type('Fakefakefake@fakefakefake.com')
    // Зайти с главной страницы на developers.
    // cy.visit('https://telnyx.com/')
    // cy.wait(2000)

    // cy.viewport(1280, 720)
    // cy.get('[id^="radix-"][id$=":R356jm:"]').click()
    // cy.wait(1000)

    // cy.get('#4Wtu2QvkjYV2LB9b4brqCG').invoke('removeAttr', 'target').click()
    // cy.window().then((win) => {
    //   const openStub = cy.stub(win, 'open').as('windowOpen');
    // });
    
    // cy.get('a').click();
    // cy.get('@windowOpen').should('not.be.called');
    // cy.wait(5000)
    // cy.get('.mktoField.mktoEmailField.mktoHasWidth.mktoRequired').type('fake123email@fakefakefake.com')
    // cy.wait(1000)
    // cy.get('.mktoButton').contains('Subscribe').click()


  })
})