import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// "base" must match the GitHub repo name for GitHub Pages.
// If you move to a custom domain later, change this to '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/foligo-site/',
})
