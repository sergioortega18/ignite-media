import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ignite-media/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});