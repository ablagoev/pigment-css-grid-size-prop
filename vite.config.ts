import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { pigment, extendTheme } from '@pigment-css/vite-plugin';

const theme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      theme
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['react-is', 'prop-types'],
  },
});
