import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['qrcode']
  },
  build: {
    commonjsOptions: {
      include: [/qrcode/, /node_modules/]
    }
  }
});
