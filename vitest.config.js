import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config'; // vite 設定檔

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        // 在這裡加入測試設定... ex: include、exclude、globals、environment、root 等等
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,jsx,tsx}'],
        exclude: [...configDefaults.exclude, 'e2e/*'],
        globals: true,
        environment: 'jsdom',
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
    })
  )
);
