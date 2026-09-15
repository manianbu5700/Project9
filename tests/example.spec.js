// @ts-check
import { test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('validate amazon application', async ({ page }) => {
  await page.goto('https://amazon.in/');
});


