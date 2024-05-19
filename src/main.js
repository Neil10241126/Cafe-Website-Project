import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { register } from 'swiper/element/bundle';

import App from './App.vue';
import router from './router';

import './assets/all.scss';
import 'bootstrap/dist/js/bootstrap';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(register);
app.mount('#app');
