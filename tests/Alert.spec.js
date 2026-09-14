import { test } from '@playwright/test'

test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html#google_vignette')
    await page.on('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Simple Alert :", dialog.message())
    })
    await page.locator('//button[@onclick="alertbox()"]').click()
    await page.waitForTimeout(3000)

    await page.locator('(//a[@class="analystic"])[2]').click() //-------->for show alert button

    // await page.once('dialog', async (dialog) => {
    //     await dialog.dismiss()
    //     console.log("Confirmation Alert :", dialog.message())
    // })

    await page.locator('//button[@onclick="confirmbox()"]').click()

    await page.locator('(//a[@class="analystic"])[3]').click()

    // await page.once('dialog', async (dialog) => {
    //     await dialog.accept('Hii Buddy')
    //     console.log("Prompt Alert :", dialog.message())
    // })

    await page.locator('//button[@onclick="promptbox()"]').click()

})