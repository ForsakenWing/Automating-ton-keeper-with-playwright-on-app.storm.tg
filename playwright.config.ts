import { defineConfig, devices } from 'playwright/test';

export default defineConfig({
    expect: {
        timeout: 30 * 1000,
    },
    reporter: [['list'], ['html']],
    globalSetup: './global-setup',
    fullyParallel: true,
    workers: 8,
    use: {
        headless: false,
        screenshot: 'on',
    },
    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
            },
        },
        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
            },
        },
        {
            name: 'webkit',
            use: {
                browserName: 'webkit',
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
