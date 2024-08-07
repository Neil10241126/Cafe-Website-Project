import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
// 引入 Swiper
import { register } from 'swiper/element/bundle';
// 引入 vueLoading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
// 引入 Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

// 引入 Vue Datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import App from './App.vue';
import router from './router';
// 引入 bootstrap
import './assets/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

AOS.init({ delay: 0 });

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component('VueLoading', Loading);
app.component('VueDatePicker', VueDatePicker);

app.use(pinia);
app.use(router);
app.use(register);

app.mount('#app');
