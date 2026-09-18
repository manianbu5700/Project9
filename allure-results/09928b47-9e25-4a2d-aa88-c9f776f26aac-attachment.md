# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactin.spec.js >> POM
- Location: tests\adactin.spec.js:4:5

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_SOCKET_TYPE
Call log:
  - navigating to "https://adactinhotelapp.com/", waiting until "load"

```

# Test source

```ts
  1  | export class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page
  4  |         this.username = page.locator('//input[@id="username"]')
  5  |         this.password = page.locator('//input[@id="password"]')
  6  |         this.button = page.locator('//input[@id="login"]')
  7  | 
  8  |     }
  9  | 
  10 |     async visitUrl() {
> 11 |         await this.page.goto('https://adactinhotelapp.com/')
     |                         ^ Error: page.goto: NS_ERROR_UNKNOWN_SOCKET_TYPE
  12 |     }
  13 |     async enterUsername(uname) {
  14 |         await this.username.fill(uname)
  15 |     }
  16 |     async enterPassword(pword) {
  17 |         await this.password.fill(pword)
  18 |     }
  19 |     async clickButton() {
  20 |         await this.button.click()
  21 |     }
  22 | }
```