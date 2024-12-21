import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',       // Root di folder ini
  build: {
    outDir: 'dist', // Direktori output hasil build
    emptyOutDir: true,
  },
});
