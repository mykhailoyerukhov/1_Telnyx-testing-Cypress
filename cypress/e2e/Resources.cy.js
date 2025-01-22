describe('Applies filters and finds header', () => {
  it('Applies filters and finds header', () => {
    
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
    cy.wait(2000)
    // Resources Menu
    cy.get('[id^="radix-"][id$=":R2l6jm:"]').click()
    cy.wait(1000)
    // To Resources
    cy.get('a[href="/resources"]').eq(0).click()
    cy.wait(1000)

    // Most popular. Articles
    cy.get('h3.c-PJLV.c-fKwEGa.c-PJLV-kmbBBS-dark-true').eq(0).scrollIntoView()
    cy.wait(2000)
    cy.get('[id="4yndycqHOwBxC67xGOvCr9:R4utm:"]').click()
    cy.wait(2000)
    cy.go('back')
    cy.wait(2000)

    // Search input
    cy.get('input[id="search"]').click()
    cy.wait(2000)
    cy.get('input[id="search"]').type('API {enter}' );
    cy.wait(2000)
    cy.go('back')

    // Go to Tags and Filters
    cy.get('h2.c-PJLV.c-fKwEGa').eq(0).scrollIntoView()
    cy.wait(2000)
    cy.get('div.c-mWqCo').eq(0).click()
    cy.wait(1000)
    cy.get('div.c-mWqCo').eq(15).click()
    cy.wait(1000)
    cy.get('ul.c-cUhiIV.c-blfhhp').scrollIntoView()
    cy.wait(1000)
    cy.get('button.c-mWqCo').eq(2).click()
    cy.wait(2000)
    cy.get('p.c-PJLV.c-rMlRu.c-gDudWt.c-gDudWt-demOBw-dark-false').eq(0).should('have.text', 'Meet Verify: Our new API for Two Factor Authentication')

  })
})