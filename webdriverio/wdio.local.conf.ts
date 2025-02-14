import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless',             // Run Chrome in headless mode
                    'window-size=1920,1080',  // Set window size for headless mode
                    '--no-sandbox',           // Ensure no sandboxing for Docker
                    '--disable-extensions',   // Disable extensions
                ],
            }
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '--headless',            // Run Firefox in headless mode
                    '--no-sandbox',          // Ensure no sandboxing for Docker
                    '--disable-extensions',  // Disable extensions
                    '--disable-plugins',     // Disable plugins
                    'window-size=1920,1080', // Set window size for headless mode (Firefox)
                    '--private',             // Start Firefox in private browsing mode
                ],
            }
        }
    ]
}
