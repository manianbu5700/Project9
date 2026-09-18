# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webTable.spec.js >> webtable Handling
- Location: tests\webTable.spec.js:3:5

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_SOCKET_TYPE
Call log:
  - navigating to "https://qavbox.github.io/demo/webtable/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Oops." [level=1] [ref=e5]
    - paragraph [ref=e6]: Firefox doesn’t know how to communicate with the server.
    - paragraph
  - button "Try Again" [active] [ref=e8]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('webtable Handling', async ({ page }) => {
> 4  |     await page.goto('https://qavbox.github.io/demo/webtable/')
     |                ^ Error: page.goto: NS_ERROR_UNKNOWN_SOCKET_TYPE
  5  |     //row Data
  6  |     const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
  7  |     // console.log(rowData)
  8  |     await rowData.forEach(value => console.log(value))
  9  |     await expect(rowData).toEqual([
  10 |         'Tiger Nixon',
  11 |         'System Architect',
  12 |         'Edinburgh',
  13 |         '61',
  14 |         '2011/04/25',
  15 |         '$320,800'
  16 |     ])
  17 |     await expect(rowData).toContain('Tiger Nixon')
  18 |     //column Data
  19 |     const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
  20 |     await expect(columnData).toContain('Garrett Winters')
  21 |     //single Data
  22 |     const data = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
  23 |     await expect(data).toEqual('San Francisco')
  24 | 
  25 | })
```