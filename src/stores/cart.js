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

  // 定義購物車列表的狀態:
  const cartList = ref({});
  const finalTotal = ref(0);

  // 定義運費相關條件:
  const shipping = ref(60); // 運費金額 60 元
  const shippingFree = ref(999); // 免運費金額

  // 是否符合免運費條件
  const isShippingFree = computed(() => {
    return Math.round(cartList.value.final_total) > shippingFree.value;
  });

  // 小計金額計算
  const subtotal = computed(() => Math.round(cartList.value.final_total));

  // 總金額計算
  const total = computed(() => {
    const result = Math.round(cartList.value.final_total);

    if (isShippingFree.value) {
      return result;
    }
    return result + shipping.value;
  });

  // 取得購物車 GET
  async function getCart() {
    try {
      const res = await fetchCart();
      cartList.value = res.data.data;
    } catch (err) {
      apiErrAlert(err.response.data.message);
    }
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

  return {
    cartList,
    finalTotal,
    shipping,
    shippingFree,
    isShippingFree,
    subtotal,
    total,
    getCart,
    addToCart,
    delCartItem,
    changeNum,
  };
});
