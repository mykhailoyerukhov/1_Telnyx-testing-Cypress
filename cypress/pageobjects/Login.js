class LoginPage {
    visitLoginPage() {
        cy.visit('https://portal.telnyx.com/')
    }
    get UsernameField() {
        return cy.get('input[name="email"]'); // Локатор для поля имени пользователя
      }
    get PasswordField() {
    return cy.get('input[name="password"]'); // Локатор для поля пароля
  }
  get LoginButton() {
    return cy.get('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-disableElevation.MuiButton-fullWidth.frontend-customer-portal-1ksoys'); // Локатор для кнопки входа
  }
  fillUserdataAndClickLogin(username, password) {
    this.UsernameField.type(username);
    this.PasswordField.type(password);
    this.LoginButton.click();
  }
  clickLogin() {
    this.LoginButton.click()
  }
}
export default new LoginPage();