import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
const postcssPresetEnv = require('postcss-preset-env');

// const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcssPresetEnv(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      //指定symbolid 格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
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
