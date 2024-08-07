import { createRouter, createWebHashHistory } from 'vue-router';
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useProductStore from '@/stores/product';
import useCartStore from '@/stores/cart';
import useLoadingStore from '@/stores/loading';
import useUserStore from '@/stores/user';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
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
        path: 'signin/:isAdmin',
        name: 'Signin',
        component: () => import('../views/Front/SigninView.vue'),
        beforeEnter(to, from, next) {
          const route = to.params.isAdmin;
          if (route === 'admin' || route === 'user') {
            next();
          } else {
            next({ name: 'Home' }); // 重新導向回首頁
          }
        },
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/Front/CartView.vue'),
        async beforeEnter() {
          // 轉跳前，取得非同步資料
          const cartStore = useCartStore();
          await cartStore.getCart();
        },
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
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('../views/Front/SettingView.vue'),
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
      {
        path: 'orders',
        component: () => import('../views/Dashboard/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/AdminCoupons.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    // 始終滾動至頂部
    return { top: 0 };
  },
});

router.beforeEach(async () => {
  // 取得 user 資料、方法
  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);
  const { checkToken } = userStore;

  // 若登入狀態為 true 需驗證 accessToken 是否過期
  if (user.value.loginState && user.value.isAdmin === false) {
    await checkToken('user');
  } else if (user.value.loginState && user.value.isAdmin === true) {
    await checkToken('admin');
  }
});

router.afterEach(async () => {
  // 取得 product 資料、方法
  const productStore = useProductStore();
  const { products } = storeToRefs(productStore);
  const { getProducts } = productStore;

  // 取得 cart 資料、方法
  const cartStore = useCartStore();
  const { cartList } = storeToRefs(cartStore);
  const { getCart } = cartStore;

  // 取得 loading 方法
  const loaderStore = useLoadingStore();
  const { isLoadingOn, isLoadingOff } = loaderStore;

  // 設置讀取效果時間
  const delay = new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  // 轉跳後，若未取得非同步數據，則先取得數據並執行 loading 載入
  if (products.value.length === 0 || cartList.value.length === 0) {
    isLoadingOn('isFullLoading');
    // 執行所有非同步，若載入時間低於 1.5秒，則運行 1.5秒 loading 效果
    await Promise.all([getProducts(), getCart(), delay]);
    isLoadingOff('isFullLoading');
  }
});

export default router;
