import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [sveltekit(), wasm()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
