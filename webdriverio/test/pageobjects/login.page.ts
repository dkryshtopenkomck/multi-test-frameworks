import Page from "./page";

class LoginPage extends Page {
  /**
   * Define elements
   */
  get textInputField() {
    return $("#myTextInput");
  }
  get preFilledInputField() {
    return $("#myTextInput2");
  }
  get submitButton() {
    return $("#myButton");
  }

  /**
   * Define or overwrite page methods
   */
  open() {
    return super.open("https://seleniumbase.io/demo_page");
  }

  async login(username: string, password: string): Promise<void> {
    await this.textInputField.waitForDisplayed();
    await this.textInputField.setValue(username);
    await this.preFilledInputField.setValue(password);
    await this.submitButton.click();
  }
}

export default new LoginPage();
