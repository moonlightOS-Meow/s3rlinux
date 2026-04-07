import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'website-src',
  build: {
    outDir: 'website-src/dist'
  },
  plugins: [react()],
})
