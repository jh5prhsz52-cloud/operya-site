import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps every asset path relative, so the same build works
// unchanged on github.io/<repo>/ and on the operya.cloud apex domain.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
