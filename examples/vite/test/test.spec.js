import { test, expect } from '@playwright/test'

test('should have 2', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByTestId('test')).toHaveText('2')
})
