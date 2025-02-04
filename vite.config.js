import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',

    
  },
  base: '/' // Change this if your S3 website is not at root level
});

/*
// Ensure assets are being processed
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
*/