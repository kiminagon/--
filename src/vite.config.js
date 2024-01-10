import ReactRefreshPlugin from '@vitejs/plugin-react';

export default {
  plugins: [ReactRefreshPlugin()],
  optimizeDeps: {
    include: ['@mui/material'],
  },
};

