import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('wasm')).toHaveText('Wasm add function reports that 1 + 1 = 2')
})
