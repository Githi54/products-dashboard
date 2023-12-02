import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path' 
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__filename) 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@app': path.resolve(__dirname, './src/app'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@data': path.resolve(__dirname, './data'),
    }
  },
})
