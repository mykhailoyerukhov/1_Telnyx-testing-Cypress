class LoginPage {
    visit() {
        cy.visit('https://portal.telnyx.com/')
    }
    getUsernameField() {
        return cy.get('input[name="email"]'); // Локатор для поля имени пользователя
      }
    getPasswordField() {
    return cy.get('input[name="password"]'); // Локатор для поля пароля
  }
  getLoginButton() {
    return cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-fullWidth.frontend-customer-portal-1ksoys'); // Локатор для кнопки входа
  }
  login(username, password) {
    this.getUsernameField().type(username);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }
}
export default new LoginPage();