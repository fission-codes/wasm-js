import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

export default defineConfig({
  build: {
    target: 'esnext'
  },
  resolve: {
    conditions: ['import', 'module', 'browser', 'default']
  },
  plugins: [sveltekit(), wasm()],
})
