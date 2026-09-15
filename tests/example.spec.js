// @ts-check
import { test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('validate flipkart', async ({ page }) => {
  await page.goto('https://flipkart.com/');
});


