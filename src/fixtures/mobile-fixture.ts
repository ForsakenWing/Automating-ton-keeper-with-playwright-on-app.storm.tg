import { AppFactory } from '@mobile-pages/app';
import { test as base } from './fixture';

export const test = base.extend<{
    app: AppFactory;
}>({
    app: async ({ page }, use) => {
        const app = new AppFactory(page);
        await use(app);
    },
});
