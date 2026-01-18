import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const tokens = JSON.parse(readFileSync('./core/design-tokens.json', 'utf-8'));

export default defineConfig({
  plugins: [
    // Pug
    pugPlugin({
      basedir: resolve(__dirname, 'core/pug'),
      locals: {
        tokens: tokens,
      },
    }),

    // 画像圧縮（JPG/PNG）
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          resolve(__dirname, 'core/scss'),
          resolve(__dirname, 'node_modules'),
        ],
      },
    },
  },

  resolve: {
    alias: {
      '@core': resolve(__dirname, 'core'),
      '@': resolve(__dirname, 'src'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
