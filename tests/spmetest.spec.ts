import { test, expect } from "../src/fixtures";

test("Running local browser", async ({ context, page }) => {
  await page.goto("https://app.storm.tg/");
  await page.getByRole('button', {name: 'connect wallet'}).first().click();
  await page.getByRole('button', { name: 'Tonkeeper' }).click();
  const pagePromise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'Browser Extension' }).click();
  try {
    const newPage = await pagePromise;
    await newPage.waitForLoadState('load', {timeout: 5000});
    await newPage.getByRole('button', { name: 'Connect wallet' }).click();
  } catch (e) {
    console.log("Popup was not found");
  };
  // Get all popups when they open
  await expect(page).toHaveURL("https://app.storm.tg/trade/TON_USDT");
  // set your wallet name here
  await expect(page.getByRole('button', { name: 'Wallet UQDw6...yhxbO' })).toBeVisible();
});
