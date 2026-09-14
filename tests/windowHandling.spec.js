import { test } from '@playwright/test'

test('window Handling', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page'),
    page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]//following-sibling::div[@data-asin="B0FQFNQ5LX"]//descendant::h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″)")]')])

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)

})

//const arr=[10,20,30,40,50]
//const [a,b]=arr


//Dynamic Xpath

//ancestor
//parent
//preceding-sibling
//child
//following-sibling
//descendant

//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_0"]
//following-sibling::div[@data-asin="B0FQFNQ5LX"]
//descendant::h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″)")]