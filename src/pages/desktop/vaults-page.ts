import { Page, Locator } from 'playwright';
import { LandingPage } from './landing-page';
import { expect } from '@fixtures/desktop-fixture';

export class VaultsPage extends LandingPage {
    public readonly aboutVaultBtn: Locator;

    constructor(public readonly page: Page) {
        super(page);
        this.aboutVaultBtn = this.page.getByRole('button', { name: 'About Vault' });
    }

    async clickAboutVaultBtn(): Promise<Page> {
        await this.aboutVaultBtn.click();
        // About Vault page is expected to be here instead
        return this.page;
    }

    async toHaveURL() {
        await expect(this.page).toHaveURL(/.*vault\/USDT/);
    }
}
