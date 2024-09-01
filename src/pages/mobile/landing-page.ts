import { Page, Locator } from 'playwright';

export class LandingPage {
    public readonly navMenuDropDownBtn: Locator;
    public readonly navMenu: NavMenu;

    constructor(public readonly page: Page) {
        this.navMenuDropDownBtn = this.page.getByLabel('btn');
        this.navMenu = new NavMenu(this.page);
    }

    async clickNavMenuDropDown() {
        await this.navMenuDropDownBtn.click();
    }

    async openVaultsPage(provideIn: 'USDT' | 'NOT' | 'TON' = 'USDT') {
        await this.clickNavMenuDropDown();
        await this.navMenu.vaultsBtn.click();
        await this.page
            .getByRole('link')
            .filter({ hasText: 'Provide in' })
            .getByText(new RegExp(String.raw`\s${provideIn}`))
            .click();
    }
}

class NavMenu {
    public readonly tradeBtn: Locator;
    public readonly vaultsBtn: Locator;
    public readonly stormPresaleBtn: Locator;
    public readonly tournamentsBtn: Locator;
    public readonly moreBtn: Locator;

    constructor(public readonly page: Page) {
        this.tradeBtn = this.page.getByRole('button', { name: 'Trade' });
        this.vaultsBtn = this.page.getByRole('button', { name: 'Vaults' });
        this.stormPresaleBtn = this.page.getByRole('button', { name: 'Storm Presale' });
        this.tournamentsBtn = this.page.getByRole('button', { name: 'Tournaments' });
        this.moreBtn = this.page.getByRole('button', { name: 'More' });
    }
}
