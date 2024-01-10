import ReactRefreshPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [ReactRefreshPlugin()],
  optimizeDeps: {
    include: ['@mui/material'],
  },
});


