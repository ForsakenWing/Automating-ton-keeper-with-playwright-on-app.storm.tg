import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
    expect: {
        timeout: 10 * 1000,
        toHaveScreenshot: { maxDiffPixels: 100 },
    },
    reporter: [['list'], ['html']],
    globalSetup: './global-setup',
    fullyParallel: true,
    workers: 8,
    use: {
        headless: false,
        screenshot: 'on',
        trace: 'on',
    },
    projects: [
        {
            name: 'Desktop-Chrome',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
            },
        },
        // add edge
        {
            name: 'Desktop-Edge',
            use: {
                ...devices['Desktop Edge'],
                channel: 'msedge',
            },
        },
        // Not supported yet
        // {
        //     name: 'Iphone13-Chrome',
        //     use: {
        //         ...devices['iPhone 13'],
        //         browserName: 'chromium',
        //         channel: 'chrome',
        //     },
        // },
    ],
    testDir: './tests',
});
