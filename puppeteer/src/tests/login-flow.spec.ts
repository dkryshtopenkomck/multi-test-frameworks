import puppeteer, {Browser, Page} from 'puppeteer';
import { LoginPage } from '../page-objects/login-page';

describe('Login Flow', () => {
    let browser: Browser;
    let page: Page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        page = await browser.newPage();
    });

    afterEach(async () => {
        await browser.close();
    });

    it('should log in successfully', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('your_username', 'your_password');
    });

    // it('should fail the test', () => {
    //     expect(1).toBe(2);
    // });

    it.skip('should skip this test', () => {
        console.log('This test is skipped');
    });
});
