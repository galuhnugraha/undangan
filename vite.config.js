import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/BMSApi': {
        target: 'http://36.67.190.179:7085/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
