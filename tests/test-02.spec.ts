import { test, expect } from '../src/fixtures';

test('Open tournaments', async ({ page }) => {
    await page.getByRole('link', { name: 'Tournaments' }).click();
});
