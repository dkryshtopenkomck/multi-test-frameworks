// Imports //

import { Selector, t } from "testcafe";

// Exports //

class LoginPage {
  textInputField: Selector;
  preFilledInputField: Selector;
  submitButton: Selector;

  constructor() {
    this.textInputField = Selector("#myTextInput");
    this.preFilledInputField = Selector("#myTextInput2");
    this.submitButton = Selector("#myButton");
  }

  async login(username: string, password: string) {
    await t
      .typeText(this.textInputField, username)
      .typeText(this.preFilledInputField, password)
      .click(this.submitButton);
  }
}

export default new LoginPage();
