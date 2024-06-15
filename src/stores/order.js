import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import axios from 'axios';
// 其他 Pinia
import alertStore from '@/stores/alert';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('order', () => {
  const router = useRouter();
  const alert = alertStore();
  const { apiResAlert, apiErrAlert } = alert;

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
    submitOrder,
  };
});
