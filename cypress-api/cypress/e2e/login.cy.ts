import LoginPage from "../page-objects/login-page";

describe("Login Tests", () => {
  beforeEach(() => {
    LoginPage.navigate();
  });

  it("Successful Login", () => {
    LoginPage.login("your_username", "your_password");
  });

  // it('Failed test', () => {
  //   expect(1).to.equal(2); // This test will fail
  // });

  it.skip("Skipped test", () => {
    // This test is skipped
  });
});
