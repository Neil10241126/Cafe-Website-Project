import { ref, computed } from 'vue';
// 引入 Pinia 狀態管理
import { defineStore } from 'pinia';
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
// 引入 Composables 方法
import useApi from '@/composables/useApi';

export default defineStore('cart', () => {
  // 取得 alert 方法
  const alert = useAlertStore();
  const { apiResAlert, apiErrAlert } = alert;

  // 取得 loading 方法
  const loaderStore = useLoadingStore();
  const { isLoadingOn, isLoadingOff } = loaderStore;

  // 取得 useApi 方法
  const { fetchCart, fetchAdd, fetchDeleteItem, fetchChangeNum } = useApi();

  // 定義購物車列表的狀態
  const cartList = ref([]);

  // 取得購物車 GET
  function getCart() {
    fetchCart()
      .then((res) => {
        cartList.value = res.data.data;
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 加入購物車 POST
  function addToCart(id, qty = 1) {
    isLoadingOn('isLoading');
    const data = {
      product_id: id,
      qty,
    };
    fetchAdd({ data })
      .then((res) => {
        getCart();
        apiResAlert(res.data.message);
        isLoadingOff('isLoading');
      })
      .catch((err) => {
        apiErrAlert(err.response.data.message);
        isLoadingOff('isLoading');
      });
  }

  // 刪除單一品項 Delete
  function delCartItem(cartId) {
    // 參數為購物車的 id，非產品 id。
    fetchDeleteItem(cartId)
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
    fetchChangeNum(id, { data })
      .then((res) => {
        apiResAlert(res.data.message);
        getCart();
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 處理金額浮點數
  const Round = computed(() => (total) => {
    return Math.round(total);
  });

  return {
    cartList,
    getCart,
    addToCart,
    delCartItem,
    changeNum,
    Round,
  };
});
