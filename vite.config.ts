import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
/// <reference types="vitest" />

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts']
  }
})
