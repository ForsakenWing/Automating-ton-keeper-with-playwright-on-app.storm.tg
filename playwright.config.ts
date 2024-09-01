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
            name: 'chrome',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
            },
        },
        // add edge
        {
            name: 'edge',
            use: {
                ...devices['Desktop Edge'],
                channel: 'msedge',
            },
        },
    ],
    testDir: './tests',
});
