describe('Open different articles, check their visibility', () => {
  it('Open different articles, check their visibility', () => {
    
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
    cy.wait(1000)

    cy.get('section.c-PJLV.c-PJLV-kDbYnL-backgroundColor-black.c-PJLV-flnndZ-spacingBottom-continuous.c-PJLV-juErlZ-spacingTop-continuous').scrollIntoView()
    cy.wait(2000)

    // Gather Using AI
    cy.get('a[href="/landing/gather-using-ai"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(4000)
    cy.get('h1.c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false.c-eZpJHu').should('have.text', 'Gather using AI')
    cy.wait(1000)
    cy.go('back')
    cy.wait(2000)
    
    // Customer stories liveperson
    cy.get('a[href="/customer-stories/liveperson"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(3000)
    cy.get('iframe').should('be.visible')
    cy.wait(1000)
    cy.go('back')
    cy.wait(1000)

    // MS Teams
    cy.get('a[href="/products/microsoft-teams-phone-for-partners"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(5000)
    cy.get('p.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').should('have.text', 'The leading Operator Connect and Direct Routing solution for Partners. Competitive margins, zero SBC fees and evergreen commissions.')
    cy.wait(1000)
    cy.go('back')
    cy.wait(3000)

    // BI Directional Streaming
    cy.get('a[href="/landing/bi-directional-streaming"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(5000)
    cy.get('.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').should('have.text', 'Leverage bi-directional streaming to deliver faster, more intelligent voice interactions. Unlock seamless integration with AI and TTS for real-time audio processing that transforms customer experiences.')
    cy.wait(2000)
    cy.go('back')

    // Watch UJET Story
    cy.wait(3000)
    cy.get('a[href="/customer-stories/ujet"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(5000)
    cy.get('iframe').should('be.visible')
    cy.wait(2000)
    cy.go('back')

    // Explore WebRTC
    cy.wait(3000)
    cy.get('a[href="/products/webrtc"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(5000)
    cy.get('.c-PJLV.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true').eq(0).should('have.text', 'Easily integrate calling into your web and mobile applications with the power of WebRTC. Our Voice SDKs are available for web, iOS, and Android. Enable real-time PSTN calling for an improved user experience.')
    cy.wait(2000)
    cy.go('back')
    // Watch AudioCodes story
    cy.wait(3000)
    cy.get('a[href="https://telnyx.com/customer-stories/audiocodes"]').eq(0).click({force: true, waitForAnimations: false,   animationDistanceThreshold: 20})
    cy.wait(5000)
    cy.get('iframe').should('be.visible')
    cy.wait(2000)





  })
})

