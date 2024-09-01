import { Page } from '@playwright/test';
import { LandingPage } from './landing-page';
import { VaultsPage } from './vaults-page';

export class AppFactory {
    public readonly landingPage: LandingPage;
    public readonly vaultsPage: VaultsPage;

    constructor(public readonly page: Page) {
        this.landingPage = new LandingPage(page);
        this.vaultsPage = new VaultsPage(page);
    }
}
