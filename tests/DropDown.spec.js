import { test } from '@playwright/test'

test('DropDown Handling', async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns/#google_vignette')
    const singleDropdown = await page.locator('//select[@id="fruits"]')
    await singleDropdown.selectOption({ label: "Mango" })
    const text = await singleDropdown.locator('option:checked').textContent()
    console.log(text)

    const multiDropDown = await page.locator('//select[@id="superheros"]')
    await multiDropDown.selectOption([{ index: 3 }, { value: "sg" }, { label: "Captain America" }])
    const multiText = await multiDropDown.locator('option:checked').allTextContents()
    console.log(multiText)


})

//Dropdown Methods

//index------>{index:0}
//value------>{value:"1"}
//label------>{label:"Orange"}