import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';
import loadEnv from './loadEnv';

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  loadEnv(mode);
  return {
    base: process.env.NODE_ENV === 'production' ? `/${process.env.REPOSITORY_NAME}/` : '/',
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // swiper-container、swiper-slide 是我们自訂議的元素
            isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
          },
        },
      }),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
      }),
      VueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            // substr 是被淘汰語法，因此要改 slice
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
          },
        },
      },
    },
    // server: {
    //   // port: 3030,
    //   proxy: {
    //     './db.json': {
    //       target: 'http://localhost:3000', // json-server 的預設執行端口
    //       // target: import.meta.url, // 動態監聽當前開啟網址
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/db\.json/, ''),
    //     },
    //   },
    // },
  };
});
