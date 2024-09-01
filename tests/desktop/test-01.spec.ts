import { test } from '../../src/fixtures/desktop-fixtures';

test('Open vaults', async ({ app: { landingPage, vaultsPage } }) => {
    await landingPage.openVaultsPage();
    await vaultsPage.toHaveURL();
});
