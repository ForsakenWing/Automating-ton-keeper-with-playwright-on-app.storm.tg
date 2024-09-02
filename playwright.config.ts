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
            testDir: './tests/desktop',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
            },
        },
        // add edge
        {
            name: 'Desktop-Edge',
            testDir: './tests/desktop',
            use: {
                ...devices['Desktop Edge'],
                channel: 'msedge',
            },
        },
        {
            name: 'Iphone13-Chrome',
            testDir: './tests/mobile',
            use: {
                ...devices['iPhone 13'],
                browserName: 'chromium',
                channel: 'chrome',
            },
        },
        {
            name: 'GalaxySIII-msedge',
            testDir: './tests/mobile',
            use: {
                ...devices['Galaxy S III'],
                browserName: 'chromium',
                channel: 'msedge',
            },
        },
    ],
    testDir: './tests',
});
