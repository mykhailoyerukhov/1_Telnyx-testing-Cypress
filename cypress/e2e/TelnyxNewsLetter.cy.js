describe('Subscribes to the Newsletter', () => {
  it('Subscribes to the Newsletter', () => {
    
    // cy.intercept('**/*.css', { statusCode: 200, body: '' });
    // cy.intercept('**/*.js', { statusCode: 200, body: '' });

    cy.visit('https://developers.telnyx.com/')
    cy.viewport(1280, 720)

    cy.wait(1000)

    cy.get('.footer_bfO1').scrollIntoView()
    cy.get('#Email').type('Fakefakefake@fakefakefake.com')
    cy.wait(1000)
    cy.get('button.mktoButton').click()
    cy.wait(1500)

    cy.get('.formArea_sIUT').should('have.text', 'Thank you, you have successfully subscribed to our newsletter!')
    // Thank you, you have successfully subscribed to our newsletter!


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