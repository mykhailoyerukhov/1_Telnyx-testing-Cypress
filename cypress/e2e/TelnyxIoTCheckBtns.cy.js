describe('Check images and videos', () => {
  it('Login', () => {
    
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
    cy.wait(2000)
    
    cy.get('button[id^="radix"][id*="Rl6jm"]').click()
    cy.wait(2000)
    cy.get('div.c-bgnUrM').eq(20).click()
    cy.wait(1000)

    cy.get('strong.c-PJLV.c-fNZqWL.c-PJLV-kmbBBS-dark-true').eq(1).scrollIntoView()
    cy.wait(1000)
    // Choose your form factor
    cy.get('[id="radix-:R6batm:-trigger-1"]').click()
    // img src https://images.ctfassets.net/2vm221913gep/34Q9go6jdVKCsM1nWc4jH1/f2808f3de9f2f6542c057aaf893d9621/Product_Detail_Hero_Wireless_IoT-SIM-Card_HIW1__2_.png
    cy.get('img').eq(6).should('have.attr', 'src').and('include', 'https://images.ctfassets.net/2vm221913gep/34Q9go6jdVKCsM1nWc4jH1/f2808f3de9f2f6542c057aaf893d9621/Product_Detail_Hero_Wireless_IoT-SIM-Card_HIW1__2_.png')
    cy.wait(1500)

    // Order your Iot SIM Cards
    cy.get('[id="radix-:R6batm:-trigger-2"]').eq(0).click()
    // video src https://videos.ctfassets.net/2vm221913gep/3A7YfUhW7ufFLbTpisrvvn/56b4777242fc726321c7c46cea070391/How_It_Works_IoTSIM-1_Order-_2x_.mp4
    cy.get('source').should('have.attr', 'src').and('include', 'https://videos.ctfassets.net/2vm221913gep/3A7YfUhW7ufFLbTpisrvvn/56b4777242fc726321c7c46cea070391/How_It_Works_IoTSIM-1_Order-_2x_.mp4')
    cy.wait(1500)

    // Activate your IoT SIM Cards
    cy.get('[id="radix-:R6batm:-trigger-3"]').eq(0).click({force: true})
    // source src https://videos.ctfassets.net/2vm221913gep/2vpwV1pV93Mec0fZsMXgwt/f3ea61c6dd160cec17d79e34d262f2a9/How_It_Works_IoTSIM-2_Activate-_2x_.mp4
    cy.get('source').should('have.attr', 'src').and('include', 'https://videos.ctfassets.net/2vm221913gep/2vpwV1pV93Mec0fZsMXgwt/f3ea61c6dd160cec17d79e34d262f2a9/How_It_Works_IoTSIM-2_Activate-_2x_.mp4')
    cy.wait(1500)

    // Set up reporting & management
    cy.get('[id="radix-:R6batm:-trigger-4"]').eq(0).click({force: true})
    // source src https://videos.ctfassets.net/2vm221913gep/2JYrcOWpq1wcbyq8Lu4soV/b1eb10b1434ac090558898fce17c76c1/How_It_Works_IoTSIM-3_SetUp-_2x_.mp4
    cy.get('source').should('have.attr', 'src').and('include', 'https://videos.ctfassets.net/2vm221913gep/2JYrcOWpq1wcbyq8Lu4soV/b1eb10b1434ac090558898fce17c76c1/How_It_Works_IoTSIM-3_SetUp-_2x_.mp4')

    cy.wait(1500)

    // Launch your IoT application
    cy.get('[id="radix-:R6batm:-trigger-5"]').eq(0).click({force: true})
    // source src https://videos.ctfassets.net/2vm221913gep/4knRwrN23vmswGTRvc3qge/7081bebd4b8fcda532e620bcde70504e/How_It_Works_IoTSIM-4_Launch-_2x_.mp4
    cy.get('source').should('have.attr', 'src').and('include', 'https://videos.ctfassets.net/2vm221913gep/4knRwrN23vmswGTRvc3qge/7081bebd4b8fcda532e620bcde70504e/How_It_Works_IoTSIM-4_Launch-_2x_.mp4')

    cy.wait(1500)



  })
})