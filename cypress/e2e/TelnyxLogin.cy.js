
describe('Login', () => {
  it('Login', () => {
    cy.visit('https://telnyx.com/')
    cy.viewport(1280, 720)
  
    cy.get('a[href="https://portal.telnyx.com"]').eq(0).invoke('attr', 'target', '_self').click()
    cy.wait(2000)
    //login
    cy.get('input[name="email"]').type('eruxov1231@gmail.com')
    cy.wait(1000)
    cy.get('input[name="password"]').type('qwe123RTY456uio!')
    cy.wait(1000)
    cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-fullWidth.frontend-customer-portal-1ksoys').click()
  })
})