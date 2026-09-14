import { test } from '@playwright/test'

test('verify facebook application', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@id="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()
})

//x-path------>Locator

//id------------>//input[@id="username"]
//name---------->//input[@name="password"]
//class--------->//button[@class="btn"]
//attribute and value------>//input[@type="text"]
//visible text--------//button[text()="Submit"]