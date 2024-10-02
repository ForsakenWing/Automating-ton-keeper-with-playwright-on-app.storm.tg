import { test } from '@playwright/test';

test('Open second test course', async ({ page }) => {
    await page.goto(
        'https://academy.dev.stormtrade.dev/#tgWebAppData=query_id%3DAAGzIp0FAAAAALMinQUP8is1%26user%3D%257B%22id%22%253A94184115%252C%22first_name%22%253A%22Andrey%22%252C%22last_name%22%253A%22%22%252C%22username%22%253A%22Andrey3160%22%252C%22language_code%22%253A%22en%22%252C%22is_premium%22%253Atrue%252C%22allows_write_to_pm%22%253Atrue%257D%26auth_date%3D1723548093%26hash%3D95df945b65e4ebd7f827643c449bb7c2904c2ea51e0e5c31ed914735a8f79ecf',
    );
    await page.getByText('second test course').first().click();
});
