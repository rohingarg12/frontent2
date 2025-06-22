import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/frontent2/',  // repo name with slash
  plugins: [react()]
})
