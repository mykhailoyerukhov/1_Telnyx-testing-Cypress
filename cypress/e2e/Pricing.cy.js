describe('scrolls categories and show prices', () => {
  it('scrolls categories and show prices', () => {
    
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
    cy.wait(1000)
    // To Pricing page
    cy.get('.c-ghTrAK.c-ghTrAK-iifzHmW-css').click()
    cy.wait(1000)

    // To Messaging API page
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(0).click()
    cy.wait(1500)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Telnyx customers typically save 30-70% on SMS and MMS when switching from another provider. For larger customers we offer competitive contract pricing.')
    // pricing options
    cy.get('.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    //sender types
    cy.get('.c-PJLV.c-fNZqWL.c-PJLV-cHtIMp-dark-false.c-jezaen').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    //Carrier fees outbound
    cy.get('caption.c-buvHyO.c-buvHyO-idGZmCD-css.c-PJLV.c-rMlRu.c-egnMbo').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    //Carrier fees inbound
    cy.get('caption.c-buvHyO.c-buvHyO-idGZmCD-css.c-PJLV.c-rMlRu.c-egnMbo').eq(4).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Download pricing
    cy.get('#download-pricing').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(2000)
    cy.go('back')

    // SIP Trunking
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(1).click()
    cy.wait(2000)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Get flexible and transparent pricing for SIP Trunking, with the option to pay as you go or volume-based pricing.')
    // Pricing options
    cy.get('strong.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Pay as you go
    cy.get('#pay-as-you-go').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Recieve inbound calls
    cy.get('caption.c-buvHyO.c-buvHyO-idGZmCD-css.c-PJLV.c-rMlRu.c-egnMbo').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Optional features
    cy.get('caption.c-buvHyO.c-buvHyO-idGZmCD-css.c-PJLV.c-rMlRu.c-egnMbo').eq(1).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    cy.go('back')

    // Voice API pricing
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(2).click()
    cy.wait(1500)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Get flexible and transparent pricing for Voice API, with the option to pay as you go or volume-based pricing.')
    cy.get('.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Pay as you go
    cy.get('#pay-as-you-go').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Optionial features
    cy.get('caption.c-buvHyO.c-buvHyO-idGZmCD-css.c-PJLV.c-rMlRu.c-egnMbo').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Text to speech
    cy.get('th.c-buvHyO.c-buvHyO-iguQErH-css.c-hDtzLV.c-PJLV.c-ihLeEO').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    cy.go('back')

    // Global numbers
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(3).click()
    cy.wait(2000)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Get flexible pricing for Local, National and Toll-free Numbers, with the option to pay as you go or volume-based pricing.')
    // Pricing options
    cy.get('strong.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Pay as you go
    cy.get('#pay-as-you-go').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Volume-based pricing
    cy.get('section.c-PJLV.c-PJLV-kDbYnL-backgroundColor-black.c-PJLV-jgXkCI-spacingBottom-contrasting.c-PJLV-cXVmvU-spacingTop-contrasting').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // See pricing for other products
    cy.get('#2F88zS6zsPbtfTZpHvoISM').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    cy.go('back')

    // Video API
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(4).click()
    cy.wait(3000)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Get flexible and transparent pricing for Video API, with the option to pay as you go or volume-based pricing.')
    // Pricing options
    cy.get('strong.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Video API feature pricing
    cy.get('caption.c-buvHyO.c-buvHyO-idGZmCD-css.c-PJLV.c-rMlRu.c-egnMbo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    cy.go('back')

    // Number Lookup API
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(5).click()
    cy.wait(3000)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Get flexible and transparent pricing for Number Lookup API, with the option to pay as you go or volume-based pricing.')
    // Pricing options
    cy.get('strong.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Pay as you go services
    cy.get('#pay-as-you-go').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Volume-based pricing
    cy.get('section.c-PJLV.c-PJLV-kDbYnL-backgroundColor-black.c-PJLV-jgXkCI-spacingBottom-contrasting.c-PJLV-cXVmvU-spacingTop-contrasting').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // See other
    cy.get('#oBOfZtz9l1RLLm66KfWhP').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    cy.go('back')

    // Verify API pricing
    cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(6).click()
    cy.wait(3000)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Get flexible and transparent pricing for Verify API, with the option to pay as you go or volume-based pricing.')
    // Pricing options
    cy.get('strong.c-PJLV.c-fNZqWL').eq(0).scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Pay as you go
    cy.get('#pay-as-you-go').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Volume-based
    cy.get('section.c-PJLV.c-PJLV-kDbYnL-backgroundColor-black.c-PJLV-jgXkCI-spacingBottom-contrasting.c-PJLV-cXVmvU-spacingTop-contrasting').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // See other
    cy.get('#Ol0tTA5m1foauHZbdLLmQ').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    // Verify API
    cy.get('#1GG7tvZN7b2jjT4kFLbsUl').scrollIntoView({ behavior: 'smooth', block: 'start' });
    cy.wait(1500)
    cy.go('back')

    // cy.get('.c-dnmyni.c-dnmyni-gNVRtg-backgroundColor-green').eq(7).click()
    // cy.wait(3000)
    // cy.scrollTo(0, '100%')
    // cy.go('back')

    // cy.get('.c-dnmyni.c-dnmyni-cjsPWI-backgroundColor-citron').click()
    // cy.wait(3000)
    // cy.scrollTo(0, '100%')
    // cy.go('back')

    // cy.get('.c-dnmyni.c-dnmyni-gSajfo-backgroundColor-blue').eq(0).click()
    // cy.wait(3000)
    // cy.scrollTo(0, '100%')
    // cy.go('back')

    // cy.get('.c-dnmyni.c-dnmyni-gSajfo-backgroundColor-blue').eq(1).click()
    // cy.wait(3000)
    // cy.scrollTo(0, '100%')
    // cy.go('back')

    // cy.get('.c-dnmyni.c-dnmyni-dwsAeM-backgroundColor-tan').eq(0).click()
    // cy.wait(3000)
    // cy.scrollTo(0, '100%')
    // cy.go('back')

    // cy.get('.c-dnmyni.c-dnmyni-dwsAeM-backgroundColor-tan').eq(1).click()
    // cy.wait(3000)
    // cy.scrollTo(0, '100%')
    // cy.go('back')


  })
})