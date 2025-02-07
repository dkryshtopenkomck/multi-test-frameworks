import LoginPage from '../page-objects/login-page';
import {Selector} from "testcafe";

fixture('Login Test').page('https://seleniumbase.io/demo_page');

test
    .meta({
        ID: 'test id',
        SEVERITY: 'blocker',
        STORY: 'story id',
        TEST_RUN: 'test run id or identifier'
    })
    .before(async t => {
        // before test code
    })('Successful Login', async t => {
        await LoginPage.login('your_username', 'your_password');
    });

// test("Failed test", async (t) => {
//     const test = Selector('#test');
//     await t.expect(1).eql(2);
// })

test.skip("Skipped test", async (t) => {
})
