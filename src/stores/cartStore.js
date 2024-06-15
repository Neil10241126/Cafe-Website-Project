import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
// 其他 Pinia
import alertStore from '@/stores/alert';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('cart', () => {
  const alert = alertStore();
  const { apiResAlert, apiErrAlert } = alert;

  const cartList = ref([]);

  // 取得購物車 GET
  function getCart() {
    axios.get(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/cart`)
      .then((res) => { cartList.value = res.data.data; })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 加入購物車 POST
  function addToCart(id, qty = 1) {
    const data = {
      product_id: id,
      qty,
    };
    axios.post(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/cart`, { data })
      .then((res) => {
        apiResAlert(res.data.message);
        getCart();
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 刪除單一品項 Delete
  function delCartItem(cartId) { // 參數為購物車的 id，非產品 id。
    axios.delete(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/cart/${cartId}`)
      .then((res) => {
        apiResAlert(res.data.message);
        getCart();
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 修改數量 Put
  function changeNum(id, qty) {
    const data = {
      product_id: id,
      qty,
    };
    axios.put(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/cart/${id}`, { data })
      .then((res) => {
        apiResAlert(res.data.message);
        getCart();
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  return {
    cartList,
    getCart,
    addToCart,
    delCartItem,
    changeNum,
  };
});
