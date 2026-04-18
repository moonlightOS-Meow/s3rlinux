import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  base: '/',
  build: {
    outDir: '../dist-v2',
    emptyOutDir: true,
  },
  plugins: [react()],
})
