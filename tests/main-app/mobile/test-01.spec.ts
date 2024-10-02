import { test } from '@fixtures/mobile-fixture';

test('Open vaults', async ({ app: { landingPage, vaultsPage } }) => {
    await landingPage.openVaultsPage();
    await vaultsPage.toHaveURL();
});
