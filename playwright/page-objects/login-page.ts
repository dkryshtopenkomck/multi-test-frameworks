import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly textInputField: Locator;
    readonly preFilledInputField: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textInputField = page.locator('#myTextInput');
        this.preFilledInputField = page.locator('#myTextInput2');
        this.submitButton = page.locator('#myButton');
    }

    async navigate() {
        await this.page.goto('https://example.com/login');
    }

    async login(username: string, password: string): Promise<void> {
        await this.textInputField.fill(username);
        await this.preFilledInputField.fill(password);
        await this.submitButton.click();
    }

    async verifyLoginSuccess(): Promise<void> {
        await expect(this.page).toHaveURL(/dashboard/);
    }
}
