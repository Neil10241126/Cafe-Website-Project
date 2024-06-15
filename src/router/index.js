import { createRouter, createWebHashHistory } from 'vue-router';
// Pinia
import useProductStore from '@/stores/productStore';
import useCartStore from '@/stores/cartStore';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    async beforeEnter() { // 轉跳前，取得非同步資料
      const productStore = useProductStore();
      const cartStore = useCartStore();
      await productStore.getProducts();
      await cartStore.getCart();
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Front/HomeView.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Front/ProductsView.vue'),
      },
      {
        path: 'products/:id',
        name: 'Product',
        component: () => import('../views/Front/ProductView.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/Front/AboutView.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/Front/ContactView.vue'),
      },
      {
        path: 'signin',
        name: 'Signin',
        component: () => import('../views/Front/SigninView.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/Front/CartView.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Front/OrderView.vue'),
      },
      {
        path: 'payment/:orderId',
        name: 'Payment',
        component: () => import('../views/Front/PaymentView.vue'),
      },
      {
        path: 'checkout/:orderId',
        name: 'Checkout',
        component: () => import('../views/Front/CheckoutView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardLayout.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/AdminProducts.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
