import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})*/


export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures proper base path; change to '/subdirectory/' if deploying under a subdirectory
  build: {
    outDir: 'dist', // Default output directory
  },
});
