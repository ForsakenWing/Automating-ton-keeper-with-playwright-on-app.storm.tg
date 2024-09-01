import { test, expect } from '../src/fixtures';

test('Open storm presale', async ({ page }) => {
    await page.getByRole('link', { name: 'Storm Presale' }).click();
});
