import { test, expect } from '../src/fixtures';

test('Running local browser', async ({ page }) => {
    await page.goto('https://app.storm.tg/');
    await expect(page).toHaveURL(/.*trade\/TON_USDT/);
    await page.waitForTimeout(5000);
});
