import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';
// 引入 Pinia 狀態管理
import useCartStore from '@/stores/cart';
import alertStore from '@/stores/alert';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('order', () => {
  // 初始化路由
  const router = useRouter();

  // 取得購物車資料
  const cartStore = useCartStore();
  const { getCart } = cartStore;

  // 取得 alert 方法
  const alert = alertStore();
  const { apiResAlert, apiErrAlert } = alert;

  // 啟用優惠券 POST
  function useCoupon(code) {
    const data = {
      code,
    };
    axios.post(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/coupon`, { data })
      .then((res) => {
        apiResAlert(res.data.message);
        getCart();
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 生成訂單 POST
  function submitOrder(userData) {
    axios.post(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/order`, { data: userData })
      .then((res) => {
        apiResAlert(res.data.message);
        router.push(`/payment/${res.data.orderId}`);
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  return {
    useCoupon,
    submitOrder,
  };
});
