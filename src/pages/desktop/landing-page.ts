import { Page, Locator } from 'playwright';

export class LandingPage {
    public readonly navMenuDropDownBtn: Locator;
    public readonly navMenu: NavMenu;

    constructor(public readonly page: Page) {
        this.navMenuDropDownBtn = this.page.getByLabel('btn');
        this.navMenu = new NavMenu(this.page);
    }

    async openVaultsPage() {
        await this.navMenu.vaultsLink.click();
    }
}

class NavMenu {
    public readonly tradeLink: Locator;
    public readonly vaultsLink: Locator;
    public readonly stormPresaleLink: Locator;
    public readonly tournamentsLink: Locator;
    public readonly moreLink: Locator;

    constructor(public readonly page: Page) {
        this.tradeLink = this.page.getByRole('link', { name: 'Trade' });
        this.vaultsLink = this.page.getByRole('link', { name: 'Vaults' });
        this.stormPresaleLink = this.page.getByRole('link', { name: 'Storm Presale' });
        this.tournamentsLink = this.page.getByRole('link', { name: 'Tournaments' });
        this.moreLink = this.page.getByRole('link', { name: 'More' });
    }
}
