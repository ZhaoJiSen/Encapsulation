import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 路径别名
    },
    extensions: ['.js', '.ts', '.json', '.vue']
  },
  server: {
    port: 8080
  }
});
