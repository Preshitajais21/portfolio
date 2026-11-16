import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base: '/portfolio/' matches the GitHub Pages project-page URL
// (yourusername.github.io/portfolio). If you ever rename the repo or move
// to a user-site repo (yourusername.github.io), change this back to '/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
