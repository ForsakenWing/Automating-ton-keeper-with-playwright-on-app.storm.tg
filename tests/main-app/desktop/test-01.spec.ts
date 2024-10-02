import { test } from '@fixtures/desktop-fixture';

test('Open vaults', async ({ app: { landingPage, vaultsPage } }) => {
    await landingPage.openVaultsPage();
    await vaultsPage.toHaveURL();
});
