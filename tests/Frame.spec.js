import { test } from '@playwright/test'

test('FrameHandling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
    const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
    await singleFrame.locator('//input[@type="text"]').fill("Hii Buddy")

    await page.locator('//a[@href="#Multiple"]').click()

    const multiFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
    const frame = await multiFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
    await frame.locator('//input[@type="text"]').fill('Hii Bro')

})