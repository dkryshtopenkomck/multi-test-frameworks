class LoginPage {
  private textInputField: string;
  private preFilledInputField: string;
  private submitButton: string;

  constructor() {
    this.textInputField = "#myTextInput";
    this.preFilledInputField = "#myTextInput2";
    this.submitButton = "#myButton";
  }

  navigate() {
    cy.visit("https://seleniumbase.io/demo_page");
  }

  login(username, password) {
    cy.get(this.textInputField).type(username);
    cy.get(this.preFilledInputField).type(password);
    cy.get(this.submitButton).click();
  }
}

export default new LoginPage();
