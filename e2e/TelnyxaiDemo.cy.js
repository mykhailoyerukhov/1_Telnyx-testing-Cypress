describe('Login', () => {
  it('Login', () => {
    
    cy.visit('https://telnyx.com/')
    cy.wait(1000)
    cy.wait(3000); // Подождать 2 секунды
    // cy.get('.c-cUhiIV.c-gSqkCn.c-gSqkCn-hyDcRZ-embed-true.c-gSqkCn-bTyWJq-backgroundColor-white').should('be.visible');
    cy.get('.c-cUhiIV.c-gSqkCn.c-gSqkCn-hyDcRZ-embed-true.c-gSqkCn-bTyWJq-backgroundColor-white').scrollIntoView()
    cy.get('.c-gxWsdK', { timeout: 2000 }).should('be.visible').click()
    cy.wait(2000)
    cy.get('.c-jlZQZq').eq(11).click()

    cy.get('.c-GDXhC')
  
  .trigger('mousedown', { which: 1 })  // Нажатие левой кнопкой
  .trigger('mousemove', { clientX: 500 })  // Задайте положение X для перемещения
  .trigger('mouseup');  // Отпустить кнопку

// При таком разрешении экрана не виден элемент
  cy.viewport(1280, 720); // Задайте нужное разрешение
  cy.get('textarea').eq(3).type('Расскажи о себе')
  cy.wait(5000)
  cy.get('.c-kNXeMZ.c-eRgYBG').click()
  cy.wait(25000)
  cy.viewport(1000, 660)
  //There was an error with your request, please try again


  })
})

