import { test } from '@playwright/test'
import { LoginPage } from '../page/LoginPage'

test('POM', async ({ page }) => {
    const login = new LoginPage(page)
    await login.visitUrl()
    await login.enterUsername('harishr97')
    await login.enterPassword('12345')
    await login.clickButton()
})