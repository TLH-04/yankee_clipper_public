import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/yankee_clipper_public/',
  build: {
    outDir: path.resolve(__dirname, '../docs'),
    emptyOutDir: true
  }
})
