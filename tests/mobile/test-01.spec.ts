import { test } from '../../src/fixtures/mobile-fixtures';

// Placeholder for actual TC, should be derived from test-01.spec.ts
test('Open vaults', async ({ app: { landingPage, vaultsPage } }) => {
    await landingPage.openVaultsPage();
    await vaultsPage.toHaveURL();
});
