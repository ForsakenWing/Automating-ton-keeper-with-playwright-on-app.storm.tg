import { test, expect } from '../src/fixtures';

test('Open vaults', async ({ page }) => {
    await page.getByRole('link', { name: 'Vaults' }).click();
    await expect(page).toHaveURL(/.*vault\/USDT/);
});
