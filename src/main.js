import { createApp } from 'vue';
import { createPinia } from 'pinia';
// 引入 Swiper
import { register } from 'swiper/element/bundle';
// 引入 vueLoading
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import App from './App.vue';
import router from './router';

import './assets/all.scss';
import 'bootstrap/dist/js/bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(register);
app.use(LoadingPlugin);

app.mount('#app');
