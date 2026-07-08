import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/linearsunrise-blog/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
