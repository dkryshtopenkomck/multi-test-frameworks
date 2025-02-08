import puppeteer, { Page } from 'puppeteer';

export class LoginPage {
    readonly page: Page;
    readonly textInputField: string;
    readonly preFilledInputField: string;
    readonly submitButton: string;

    constructor(page: Page) {
        this.page = page;
        this.textInputField = '#myTextInput';
        this.preFilledInputField = '#myTextInput2';
        this.submitButton = '#myButton';
    }

    async navigate() {
        await this.page.goto('https://seleniumbase.io/demo_page', { waitUntil: 'load' });
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.waitForSelector(this.textInputField);
        await this.page.type(this.textInputField, username);
        await this.page.type(this.preFilledInputField, password);
        await this.page.click(this.submitButton);
    }
}
