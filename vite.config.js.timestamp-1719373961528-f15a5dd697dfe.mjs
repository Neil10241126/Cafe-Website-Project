// vite.config.js
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'file:///C:/Users/NeiL/Desktop/Cafe-Website-Project/node_modules/vite/dist/node/index.js';
import vue from 'file:///C:/Users/NeiL/Desktop/Cafe-Website-Project/node_modules/@vitejs/plugin-vue/dist/index.mjs';
import VueDevTools from 'file:///C:/Users/NeiL/Desktop/Cafe-Website-Project/node_modules/vite-plugin-vue-devtools/dist/vite.mjs';
import eslintPlugin from 'file:///C:/Users/NeiL/Desktop/Cafe-Website-Project/node_modules/vite-plugin-eslint/dist/index.mjs';

// loadEnv.js
import dotenv from 'file:///C:/Users/NeiL/Desktop/Cafe-Website-Project/node_modules/dotenv/lib/main.js';
import path from 'path';
import fs from 'fs';

const getCurrentTimeString = () => {
  const now = /* @__PURE__ */ new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? '\u4E0B\u5348' : '\u4E0A\u5348';
  hours %= 12;
  hours = hours || 12;
  const hoursStr = String(hours).padStart(2, '0');
  return `${ampm}${hoursStr}:${minutes}:${seconds}`;
};
const customLog = (tag, message, tagColor = '\x1B[36m', messageColor = '\x1B[32m') => {
  const timeString = getCurrentTimeString();
  console.log(
    `\x1B[90m%s\x1B[0m ${tagColor}\x1B[1m%s\x1B[0m ${messageColor}%s\x1B[0m`,
    timeString,
    `[${tag}]`,
    message
  );
};
const loadEnv_default = (mode) => {
  const basePath = path.resolve(process.cwd(), '.env');
  const envPath = `${basePath}.${mode}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const envConfig = dotenv.config({
    path: finalPath,
  });
  if (envConfig.error) {
    customLog(
      'vite',
      '\u7121\u6CD5\u8B80\u53D6\u5230\u74B0\u5883\u8B8A\u6578(Environment Variables)\u6A94\u6848\u3002'
    );
    customLog(
      'vite',
      '\u8ACB\u5728\u7D42\u7AEF\u6A5F\u8F38\u5165\u300Ccp .env.example .env\u300D \u5EFA\u7ACB\u74B0\u5883\u8B8A\u6578\u6A94\u6848\u3002'
    );
    customLog(
      'vite',
      '\u76EE\u524D\u50C5\u652F\u63F4 .env\u3001.env.development\u3001.env.production \u4E09\u7A2E\u6A21\u5F0F\u3002'
    );
  }
};

// vite.config.js
const __vite_injected_original_import_meta_url =
  'file:///C:/Users/NeiL/Desktop/Cafe-Website-Project/vite.config.js';
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
const vite_config_default = defineConfig(({ mode }) => {
  loadEnv_default(mode);
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
        '@': fileURLToPath(new URL('./src', __vite_injected_original_import_meta_url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : '';
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
          },
        },
      },
    },
  };
});
export { vite_config_default as default };
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibG9hZEVudi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE5laUxcXFxcRGVza3RvcFxcXFxDYWZlLVdlYnNpdGUtUHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmVpTFxcXFxEZXNrdG9wXFxcXENhZmUtV2Vic2l0ZS1Qcm9qZWN0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9OZWlML0Rlc2t0b3AvQ2FmZS1XZWJzaXRlLVByb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcbmltcG9ydCBsb2FkRW52IGZyb20gJy4vbG9hZEVudic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBJTlZBTElEX0NIQVJfUkVHRVggPSAvW1xceDAwLVxceDFGXFx4N0Y8PiojXCJ7fXxeW1xcXWA7PzomPSskLF0vZztcbmNvbnN0IERSSVZFX0xFVFRFUl9SRUdFWCA9IC9eW2Etel06L2k7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGxvYWRFbnYobW9kZSk7XG4gIHJldHVybiAoe1xuICAgIGJhc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBgLyR7cHJvY2Vzcy5lbnYuUkVQT1NJVE9SWV9OQU1FfS9gIDogJy8nLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSh7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAvLyBzd2lwZXItY29udGFpbmVyXHUzMDAxc3dpcGVyLXNsaWRlIFx1NjYyRlx1NjIxMVx1NEVFQ1x1ODFFQVx1OEEwMlx1OEI3MFx1NzY4NFx1NTE0M1x1N0QyMFxuICAgICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiBbJ3N3aXBlci1jb250YWluZXInLCAnc3dpcGVyLXNsaWRlJ10uaW5jbHVkZXModGFnKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLmpzJywgJ3NyYy8qKi8qLnZ1ZScsICdzcmMvKi5qcycsICdzcmMvKi52dWUnXSxcbiAgICAgIH0pLFxuICAgICAgVnVlRGV2VG9vbHMoKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9ibG9iL21hc3Rlci9zcmMvdXRpbHMvc2FuaXRpemVGaWxlTmFtZS50c1xuICAgICAgICAgIHNhbml0aXplRmlsZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBEUklWRV9MRVRURVJfUkVHRVguZXhlYyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlTGV0dGVyID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcnO1xuICAgICAgICAgICAgLy8gc3Vic3RyIFx1NjYyRlx1ODhBQlx1NkREOFx1NkM3MFx1OEE5RVx1NkNENVx1RkYwQ1x1NTZFMFx1NkI2NFx1ODk4MVx1NjUzOSBzbGljZVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZHJpdmVMZXR0ZXJcbiAgICAgICAgICAgICsgbmFtZS5zbGljZShkcml2ZUxldHRlci5sZW5ndGgpLnJlcGxhY2UoSU5WQUxJRF9DSEFSX1JFR0VYLCAnJylcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmVpTFxcXFxEZXNrdG9wXFxcXENhZmUtV2Vic2l0ZS1Qcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOZWlMXFxcXERlc2t0b3BcXFxcQ2FmZS1XZWJzaXRlLVByb2plY3RcXFxcbG9hZEVudi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTmVpTC9EZXNrdG9wL0NhZmUtV2Vic2l0ZS1Qcm9qZWN0L2xvYWRFbnYuanNcIjtpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IGdldEN1cnJlbnRUaW1lU3RyaW5nID0gKCkgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBsZXQgaG91cnMgPSBub3cuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhub3cuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBzZWNvbmRzID0gU3RyaW5nKG5vdy5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdcdTRFMEJcdTUzNDgnIDogJ1x1NEUwQVx1NTM0OCc7XG4gIGhvdXJzICU9IDEyO1xuICBob3VycyA9IGhvdXJzIHx8IDEyO1xuICBjb25zdCBob3Vyc1N0ciA9IFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgJzAnKTtcbiAgcmV0dXJuIGAke2FtcG19JHtob3Vyc1N0cn06JHttaW51dGVzfToke3NlY29uZHN9YDtcbn07XG5cbmNvbnN0IGN1c3RvbUxvZyA9ICh0YWcsIG1lc3NhZ2UsIHRhZ0NvbG9yID0gJ1xceDFiWzM2bScsIG1lc3NhZ2VDb2xvciA9ICdcXHgxYlszMm0nKSA9PiB7XG4gIGNvbnN0IHRpbWVTdHJpbmcgPSBnZXRDdXJyZW50VGltZVN0cmluZygpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmxvZyhgXFx4MWJbOTBtJXNcXHgxYlswbSAke3RhZ0NvbG9yfVxceDFiWzFtJXNcXHgxYlswbSAke21lc3NhZ2VDb2xvcn0lc1xceDFiWzBtYCwgdGltZVN0cmluZywgYFske3RhZ31dYCwgbWVzc2FnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAobW9kZSkgPT4ge1xuICBjb25zdCBiYXNlUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLmVudicpO1xuICBjb25zdCBlbnZQYXRoID0gYCR7YmFzZVBhdGh9LiR7bW9kZX1gO1xuICBjb25zdCBmaW5hbFBhdGggPSBmcy5leGlzdHNTeW5jKGVudlBhdGgpID8gZW52UGF0aCA6IGJhc2VQYXRoO1xuXG4gIGNvbnN0IGVudkNvbmZpZyA9IGRvdGVudi5jb25maWcoeyBwYXRoOiBmaW5hbFBhdGggfSk7XG5cbiAgaWYgKGVudkNvbmZpZy5lcnJvcikge1xuICAgIGN1c3RvbUxvZygndml0ZScsICdcdTcxMjFcdTZDRDVcdThCODBcdTUzRDZcdTUyMzBcdTc0QjBcdTU4ODNcdThCOEFcdTY1NzgoRW52aXJvbm1lbnQgVmFyaWFibGVzKVx1NkE5NFx1Njg0OFx1MzAwMicpO1xuICAgIGN1c3RvbUxvZygndml0ZScsICdcdThBQ0JcdTU3MjhcdTdENDJcdTdBRUZcdTZBNUZcdThGMzhcdTUxNjVcdTMwMENjcCAuZW52LmV4YW1wbGUgLmVudlx1MzAwRCBcdTVFRkFcdTdBQ0JcdTc0QjBcdTU4ODNcdThCOEFcdTY1NzhcdTZBOTRcdTY4NDhcdTMwMDInKTtcbiAgICBjdXN0b21Mb2coJ3ZpdGUnLCAnXHU3NkVFXHU1MjREXHU1MEM1XHU2NTJGXHU2M0Y0IC5lbnZcdTMwMDEuZW52LmRldmVsb3BtZW50XHUzMDAxLmVudi5wcm9kdWN0aW9uIFx1NEUwOVx1N0EyRVx1NkEyMVx1NUYwRlx1MzAwMicpO1xuICB9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxTQUFTLGVBQWUsV0FBVztBQUU3VixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFHeEIsT0FBTyxrQkFBa0I7OztBQ1B5UixPQUFPLFlBQVk7QUFDclUsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sUUFBUTtBQUVmLElBQU0sdUJBQXVCLE1BQU07QUFDakMsUUFBTSxNQUFNLG9CQUFJLEtBQUs7QUFDckIsTUFBSSxRQUFRLElBQUksU0FBUztBQUN6QixRQUFNLFVBQVUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hELFFBQU0sVUFBVSxPQUFPLElBQUksV0FBVyxDQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEQsUUFBTSxPQUFPLFNBQVMsS0FBSyxpQkFBTztBQUNsQyxXQUFTO0FBQ1QsVUFBUSxTQUFTO0FBQ2pCLFFBQU0sV0FBVyxPQUFPLEtBQUssRUFBRSxTQUFTLEdBQUcsR0FBRztBQUM5QyxTQUFPLEdBQUcsSUFBSSxHQUFHLFFBQVEsSUFBSSxPQUFPLElBQUksT0FBTztBQUNqRDtBQUVBLElBQU0sWUFBWSxDQUFDLEtBQUssU0FBUyxXQUFXLFlBQVksZUFBZSxlQUFlO0FBQ3BGLFFBQU0sYUFBYSxxQkFBcUI7QUFFeEMsVUFBUSxJQUFJLHFCQUFxQixRQUFRLG9CQUFvQixZQUFZLGFBQWEsWUFBWSxJQUFJLEdBQUcsS0FBSyxPQUFPO0FBQ3ZIO0FBRUEsSUFBTyxrQkFBUSxDQUFDLFNBQVM7QUFDdkIsUUFBTSxXQUFXLEtBQUssUUFBUSxRQUFRLElBQUksR0FBRyxNQUFNO0FBQ25ELFFBQU0sVUFBVSxHQUFHLFFBQVEsSUFBSSxJQUFJO0FBQ25DLFFBQU0sWUFBWSxHQUFHLFdBQVcsT0FBTyxJQUFJLFVBQVU7QUFFckQsUUFBTSxZQUFZLE9BQU8sT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRW5ELE1BQUksVUFBVSxPQUFPO0FBQ25CLGNBQVUsUUFBUSxpR0FBcUM7QUFDdkQsY0FBVSxRQUFRLG1JQUF5QztBQUMzRCxjQUFVLFFBQVEsK0dBQW1EO0FBQUEsRUFDdkU7QUFDRjs7O0FEbENxTSxJQUFNLDJDQUEyQztBQVd0UCxJQUFNLHFCQUFxQjtBQUMzQixJQUFNLHFCQUFxQjtBQUczQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxrQkFBUSxJQUFJO0FBQ1osU0FBUTtBQUFBLElBQ04sTUFBTSxRQUFRLElBQUksYUFBYSxlQUFlLElBQUksUUFBUSxJQUFJLGVBQWUsTUFBTTtBQUFBLElBQ25GLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxRQUNGLFVBQVU7QUFBQSxVQUNSLGlCQUFpQjtBQUFBO0FBQUEsWUFFZixpQkFBaUIsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLGNBQWMsRUFBRSxTQUFTLEdBQUc7QUFBQSxVQUM3RTtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxNQUNELGFBQWE7QUFBQSxRQUNYLFNBQVMsQ0FBQyxlQUFlLGdCQUFnQixZQUFZLFdBQVc7QUFBQSxNQUNsRSxDQUFDO0FBQUEsTUFDRCxZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUN0RDtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQTtBQUFBLFVBRU4saUJBQWlCLE1BQU07QUFDckIsa0JBQU0sUUFBUSxtQkFBbUIsS0FBSyxJQUFJO0FBQzFDLGtCQUFNLGNBQWMsUUFBUSxNQUFNLENBQUMsSUFBSTtBQUV2QyxtQkFDRSxjQUNBLEtBQUssTUFBTSxZQUFZLE1BQU0sRUFBRSxRQUFRLG9CQUFvQixFQUFFO0FBQUEsVUFFakU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
