describe('Choosing values for tariff plan and checks the header', () => {
  it('Choosing values for tariff plan and checks the header', () => {
    
    cy.visit('https://telnyx.com/')

    cy.viewport(1280, 720)
    cy.get('[id^="radix-"][id$=":Rl6jm:"]').click()
    cy.get('#4nV0B2GDlfwnfAwjQ3DuI8').click()

    // new page
    cy.get('#storage-calculator').scrollIntoView()
    cy.wait(3000)
    cy.get('.c-PJLV.c-bzcDeh.c-PJLV-ealYFu-lead-false').type('456')
    cy.wait(3000)
    // cy.pause()
    cy.get('.c-khZXrc.c-PJLV.c-ihLeEO.c-gAJMRD.c-khZXrc-fvDRxk-direction-ltr').eq(0).click()
    cy.get('.c-PJLV.c-bzcDeh.c-PJLV-ealYFu-lead-false').type('789')
    cy.wait(3000)
    // cy.pause()
    cy.get('.c-khZXrc.c-PJLV.c-ihLeEO.c-gAJMRD.c-khZXrc-fvDRxk-direction-ltr').eq(0).click()
    cy.get('#storage-calculator').scrollIntoView()
    cy.get('h3.c-PJLV.c-rMlRu').eq(0).should('have.text', 'Compare costs per month')
    cy.wait(5000)
    // cy.get('#5a7zMe34XNsul0kWr5MyBu').click()
    // cy.wait(1000)
    // cy.pause()

    // telnyxSupport piece
    // cy.get('[aria-labelledby="LblReason_for_Contact__c InstructReason_for_Contact__c"]').select('Support')
    // cy.get('[id="FirstName"]').type('Jacob')
    // cy.get('[id="LastName"]').type('Wazowski')
    // cy.get('[id="Email"]').type('Fake@emails.com')
    // cy.get('[id="Phone_Number_Extension__c"]').select('+380')
    // cy.get('#Phone_Number_Base__c').type('930618565')
    // cy.get('#Website').type('https://fake-website.com')
    // cy.get('#How_did_you_hear_about_Telnyx_Open__c').type('It was an accident')
    // cy.get('#mktoCheckbox_15545_0').click()
    // cy.get('button.mktoButton')



  // // back button
  //   cy.get('.c-khZXrc.c-PJLV.c-ihLeEO.c-gAJMRD.c-khZXrc-eupisv-direction-rtl').click()
  //   cy.get('#storage-calculator', { scrollBehavior: false } ).scrollIntoView()
  //   cy.wait(2000)
  //   cy.get('.c-khZXrc.c-PJLV.c-ihLeEO.c-gAJMRD.c-khZXrc-eupisv-direction-rtl').click()
  //   cy.get('#storage-calculator', { scrollBehavior: false } ).scrollIntoView()
  //   cy.wait(2000)


  })
})