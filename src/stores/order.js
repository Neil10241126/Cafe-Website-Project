import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 引入 Pinia 狀態管理
import { defineStore, storeToRefs } from 'pinia';
import useCartStore from '@/stores/cart';
import useAlertStore from '@/stores/alert';
// 引入 Composables 方法
import useApi from '@/composables/useApi';

export default defineStore(
  'order',
  () => {
    // 初始化路由
    const router = useRouter();

    // 取得 cart 方法
    const cartStore = useCartStore();
    const { finalTotal, total } = storeToRefs(cartStore);
    const { getCart } = cartStore;

    // 取得 alert 方法
    const alert = useAlertStore();
    const { apiResAlert, apiErrAlert } = alert;

    // 取得 useApi 方法
    const { fetchCreate, fetchCoupon } = useApi();

    // 定義訂單資料
    const tempOrder = ref({});

    // 啟用優惠券 POST
    function useCoupon(code) {
      const data = {
        code,
      };
      fetchCoupon({ data })
        .then((res) => {
          apiResAlert(res.data.message);
          getCart();
        })
        .catch((err) => apiErrAlert(err.response.data.message));
    }

    // 生成訂單 POST
    function submitOrder(userData) {
      finalTotal.value = total.value;

      fetchCreate({ data: userData })
        .then((res) => {
          apiResAlert(res.data.message);
          getCart();
          router.push(`/payment/${res.data.orderId}`);
        })
        .catch((err) => apiErrAlert(err.response.data.message));
    }

    return {
      tempOrder,
      useCoupon,
      submitOrder,
    };
  },
  { persist: true }
);
