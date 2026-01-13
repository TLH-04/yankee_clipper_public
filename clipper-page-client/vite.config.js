import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yankee_clipper_public/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
