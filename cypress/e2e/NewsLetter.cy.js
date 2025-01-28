import MainPage from '../pageobjects/mainpage'
describe('Subscribes to the Newsletter', () => {
  // using fixtures
  beforeEach(() =>  {
    cy.fixture('users.json').then(function (fixture) {
      this.fixture = fixture;
    })
  })
  it('Subscribes to the Newsletter',function () {
    MainPage.visit()
    MainPage.subscribeOnBusinessNewsletter(this.fixture.valid_credentials.email)
    // check that we redirected to signup page if we're not logged in
    cy.url().should('eq', 'https://telnyx.com/sign-up')
  })
})