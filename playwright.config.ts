import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
    expect: {
        timeout: 10 * 1000,
        toHaveScreenshot: { maxDiffPixels: 100 },
    },
    reporter: [['list'], ['html']],
    globalSetup: './global-setup',
    globalTeardown: './global-teardown',
    fullyParallel: true,
    workers: process.env.CI ? '100%' : undefined,
    use: {
        headless: false,
        screenshot: 'on',
        trace: 'on',
        baseURL: 'https://app.storm.tg/',
    },
    projects: [
        {
            name: 'Desktop-Chrome',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
            },
            testMatch: ['**/desktop/*.spec.ts'],
        },
        // add edge
        {
            name: 'Desktop-Edge',
            use: {
                ...devices['Desktop Edge'],
                channel: 'msedge',
            },
            testMatch: ['**/desktop/*.spec.ts'],
        },
        {
            name: 'Iphone13-Chrome',
            use: {
                ...devices['iPhone 13'],
                browserName: 'chromium',
                channel: 'chrome',
            },
            testMatch: ['**/mobile/*.spec.ts'],
        },
        {
            name: 'GalaxySIII-msedge',
            use: {
                ...devices['Galaxy S III'],
                browserName: 'chromium',
                channel: 'msedge',
            },
            testMatch: ['**/mobile/*.spec.ts'],
        },
    ],
    testDir: './tests',
});
