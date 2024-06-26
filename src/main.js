import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 引入 Swiper
import { register } from 'swiper/element/bundle';
// 引入 VeeValidate 元件跟功能
// import {
//   Field, Form, ErrorMessage, defineRule, configure,
// } from 'vee-validate';
// 引入 VeeValidate 的驗證規則
// import { all } from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
// import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
// import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// use2
// 從 'vee-validate' 引入表單、字段和錯誤訊息組件
// import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup'; // 引入 yup 檢合庫
import { zhtw } from 'yup-locales'; // 引入 yup 繁體中文
import { setLocale } from 'yup'; // 引入  yupp 的 setLocale 設置語系方法

import App from './App.vue';
import router from './router';

import './assets/all.scss';
import 'bootstrap/dist/js/bootstrap';

// 設置 yup 的語系為繁體中文
setLocale(zhtw);

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
// Object.entries(all).forEach(([name, rule]) => {
//   defineRule(name, rule);
// });

// 將當前 VeeValidate 的語系設定為繁體中文
// configure({
//   generateMessage: localize({ zh_TW: zhTW }),
//   validateOnInput: true,
// });
// setLocale('zh_TW');

const app = createApp(App);

// 掛載 Global 的 VeeValidate 元件
// app.component('VField', Field);
// app.component('VForm', Form);
// app.component('ErrorMessage', ErrorMessage);
// 將 yup 添加到全域屬性中
app.provide('$yup', yup);

app.use(createPinia());
app.use(router);
app.use(register);
app.mount('#app');
