import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  timeout: process.env.CI ? 60 * 1000 : 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  maxFailures: process.env.CI ? 2 : 1,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: process.env.CI ? [['html'], ['list']] : 'list',
  use: {
    actionTimeout: 0,
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    colorScheme: 'dark',
    browserName: 'chromium',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
  },
})
