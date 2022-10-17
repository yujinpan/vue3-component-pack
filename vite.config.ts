/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const alias = {
  '@': resolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  root: 'dev',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias,
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // resolve start path for "~", like: "~external/style/var.scss"
        importer: (url: string) => {
          return {
            file: parseAlias(url.startsWith('~') ? url.slice(1) : url, alias),
          };
        },
      },
    },
  },
  // https://vitest.dev/config/
  test: {
    dir: 'src',
  },
});

function parseAlias(file: string, alias: Record<string, string>) {
  const key = Object.keys(alias).find(
    (item) => file.startsWith(item + '/') || file === item,
  );
  if (key) {
    if (key === file) {
      return alias[key];
    } else {
      return file.replace(key, alias[key]);
    }
  }
  return file;
}
