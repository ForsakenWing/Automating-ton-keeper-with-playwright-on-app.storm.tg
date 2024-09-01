import { test } from '../../src/fixtures/mobile-fixture';

// Placeholder for actual TC, should be derived from test-01.spec.ts
test('Open storm presale', async ({ page }) => {
    await page.getByRole('link', { name: 'Storm Presale' }).click();
});
