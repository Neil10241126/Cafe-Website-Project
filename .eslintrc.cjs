module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'vite-plugin-vue-devtools'
    ],
  },
  plugins: ['vue'],
  rules: {
    'vue/linebreak-style': 'off',
    'vue/no-unused-vars': 'error', // 禁止未使用的變數
    'vue/max-len': [ // 限制文字最大長度
      'error',
      {
        template: 100,
        code: 160, // 限制 JS 相關程式碼長度
        tabWidth: 2,
        ignoreUrls: true, // 忽略 Url 屬性長度
        ignoreHTMLAttributeValues: true, // 忽略 HTML 屬性長度
      },
    ],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: true,
        peerDependencies: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        variables: false,
      }
    ],
    'no-shadow': 'off',
  },
};
