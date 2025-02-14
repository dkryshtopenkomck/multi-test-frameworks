import { config as sharedConfig } from './wdio.shared.conf'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chromium',
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    'window-size=1920,1080',
                    '--disable-dev-shm-usage',
                ],
            }
        }]
    }
}
