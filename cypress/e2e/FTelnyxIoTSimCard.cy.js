describe('Filling a form to choose the best tariff', () => {
  it('Filling a form to choose the best tariff', () => {
    
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
    cy.wait(2000)

    cy.get('button[id^="radix"][id*="Rl6jm"]').click()
    cy.wait(2000)
    cy.get('div.c-bgnUrM').eq(20).click()
    cy.wait(1000)

    // SIM Calculator
    cy.get('#iot-sim-card-calculator').scrollIntoView()
    cy.wait(1000)
    // Numbers of SIM
    cy.get('#iot-sim-savings-calculator__number-of-sim-cards').type('12')
    cy.get('#iot-sim-card-calculator').scrollIntoView()
    cy.wait(1000)
    cy.get('span.c-khZXrc.c-PJLV.c-ihLeEO.c-gAJMRD.c-khZXrc-fvDRxk-direction-ltr').eq(0).click()
    cy.wait(1000)
    // Number of Mbs
    cy.get('#iot-sim-savings-calculator__number-of-mb-per-month').type('25000')
    cy.get('#iot-sim-card-calculator').scrollIntoView()
    cy.get('span.c-khZXrc.c-PJLV.c-ihLeEO.c-gAJMRD.c-khZXrc-fvDRxk-direction-ltr').eq(0).click()

    // Country
    cy.get('button.c-hvmQSv.c-gACVrx').eq(1).click()

    // scripts. pointer-events. 
  })
})