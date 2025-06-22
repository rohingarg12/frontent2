import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/frontent/', // your repo name with trailing slash
  plugins: [react()]
})
