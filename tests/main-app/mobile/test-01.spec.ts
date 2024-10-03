import { test } from '@fixtures/mobile-fixture';

test('Open vaults', async ({ app }) => {
    await app.landingPage.openVaultsPage();
    await app.vaultsPage.toHaveURL();
});
