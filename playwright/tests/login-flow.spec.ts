import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page';

test.beforeEach(async ({ page }) => {
    await page.goto('https://seleniumbase.io/demo_page');
});

test('Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('your_username', 'your_password');
});

// test('Failed test', async ({ page }) => {
//     expect(1).toBe(2); // This test will fail
// });

test.skip('Skipped test', async ({ page }) => {
    // This test is skipped
});
