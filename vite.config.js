import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
  server: {
    port: 4000,
  },
  base: './',
});
