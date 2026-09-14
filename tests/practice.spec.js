import { test } from '@playwright/test'

test('Practice alert in frame', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/iframe/')
    const frame = await page.frameLocator('//iframe[@name="employeetable"]')
    await page.once('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Alert Handling", dialog.message())
    })
    await frame.locator('//button[@id="addBtn"]').click()
})