import { test} from '../../src/fixtures/mobile-fixtures';

// Placeholder for actual TC, should be derived from test-01.spec.ts
test('Open tournaments', async ({ page }) => {
    await page.getByRole('link', { name: 'Tournaments' }).click();
});
