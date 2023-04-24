import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//插件引入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
const postcssPresetEnv = require('postcss-preset-env');

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), postcssPresetEnv()],
  // 配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  css: {
    postcss: {},
  },
});
