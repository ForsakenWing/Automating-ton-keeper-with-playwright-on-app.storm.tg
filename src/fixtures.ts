// fixtures.ts
import { test as base, BrowserContext, Page } from '@playwright/test';
import { BrowserContextOptions } from 'playwright';
import * as path from 'path';
import dotenv from 'dotenv';

dotenv.config();

function firefoxContextOptions({ pathToExtension }: { pathToExtension: string }) {
    return {
        firefoxUserPrefs: {
            // Set preferences to allow installation of unsigned extensions, if needed
            'xpinstall.signatures.required': false,
            'devtools.debugger.remote-enabled': true,
            'extensions.autoDisableScopes': 0,
            'extensions.logging.enabled': true,
            'devtools.chrome.enabled': true,
            'extensions.enabledAddons': 'wallet@tonkeeper.com', // Specify your extension ID
            // Add any other preferences you need to control
        },
        args: ['-install-extension', pathToExtension + '/tonkeeper.xpi'],
    } as BrowserContextOptions;
}

function chromeContextOptions({ pathToExtension }: { pathToExtension: string }) {
    return {
        args: ['--disable-extensions-except=' + pathToExtension, '--load-extension=' + pathToExtension, '--no-sandbox'],
    } as BrowserContextOptions;
}

const getBrowserContextOptions = (browserName: string) => {
    switch (browserName) {
        case 'firefox':
            return firefoxContextOptions;
        case 'chromium':
        case 'edge':
            return chromeContextOptions;
        default:
            throw new Error('Unsupported browser: ' + browserName);
    }
};

export const test = base.extend<{
    context: BrowserContext;
    page: Page;
}>({
    page: [
        async ({ playwright, browserName }, use, workerInfo) => {
            const userDataDir = path.resolve(
                __dirname,
                `${process.cwd()}/user-data/${workerInfo.project.name}/${workerInfo.workerIndex}`
            );
            // Launch the browser with the extension loaded using a persistent context
            const pathToTonKeeper = `${process.cwd()}/tonKeeper/${browserName}`;
            const contextOptions = getBrowserContextOptions(browserName)({ pathToExtension: pathToTonKeeper });
            const context = await playwright[browserName].launchPersistentContext(userDataDir, contextOptions);
            // Perform authentication or other setup tasks
            const page = await context.pages()[0];
            // add pause
            // Adjust this URL if needed
            await page.goto('https://app.storm.tg/');
            await page.getByRole('button', { name: 'connect wallet' }).first().click();
            await page.getByRole('button', { name: 'Tonkeeper' }).click();
            const pagePromise = context.waitForEvent('page');
            await page.getByRole('button', { name: 'Browser Extension' }).click();
            const newPage = await pagePromise;
            await newPage.waitForLoadState('load', { timeout: 5000 });
            await newPage.getByRole('button', { name: 'Get started' }).click();
            const pagePromise2 = context.waitForEvent('page');
            await newPage.getByText('Existing Wallet').click();
            const tonKeeperPage = await pagePromise2;
            let phrasesInputs = tonKeeperPage.locator('input');
            await expect(phrasesInputs).toHaveCount(24);
            const allPhrasedInputs = await phrasesInputs.all();
            const phrases = JSON.parse(process.env.PHRASES);
            for (const [index, input] of allPhrasedInputs.entries()) {
                await input.fill(phrases[index]);
            }
            await tonKeeperPage.click('button');
            await tonKeeperPage.getByRole('button', { name: 'Continue' }).click();
            const passwordLocators = tonKeeperPage.locator('input');
            await expect(passwordLocators).toHaveCount(2);
            const [password, confirmPassword] = await passwordLocators.all();
            await password.fill('12345678');
            await confirmPassword.fill('12345678');
            await tonKeeperPage.click('button');
            const tonKeeperPageClosedPromise = tonKeeperPage.waitForEvent('close');
            await tonKeeperPageClosedPromise;
            const pagePromise3 = context.waitForEvent('page');
            const [_, extensionPage] = await Promise.all([
                page.getByRole('button', { name: 'Retry' }).click(),
                pagePromise3,
            ]);
            await extensionPage.getByRole('button', { name: 'Connect wallet' }).click();
            await use(page);
            await page.close();
        },
        { timeout: 45000, scope: 'test' },
    ],
});

export const expect = test.expect;
