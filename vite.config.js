import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable history API fallback
    historyApiFallback: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
