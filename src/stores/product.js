import { ref } from 'vue';
// 引入 Pinia 狀態管理
import { defineStore } from 'pinia';
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
// 引入 helpers 方法
import { fetchProdcuts, fetchProductItem } from '@/helpers/api';

export default defineStore('product', () => {
  // 取得 alert 方法
  const alertStore = useAlertStore();
  const { apiErrAlert } = alertStore;

  // 取得 loading 方法
  const loaderStore = useLoadingStore();
  const { isLoadingOn, isLoadingOff } = loaderStore;

  // 定義產品資料
  const products = ref([]); // 產品列表
  const tempProduct = ref({}); // 單一產品

  // 取特定產品 : filter
  function filter(cate) {
    const result = products.value.filter((item) => item.category === cate);
    return result;
  }

  // sort 價格排序
  function sort(value) {
    if (value === 'sortByDescending') {
      // 降冪
      products.value.sort((a, b) => b.price - a.price);
    } else if (value === 'sortByAscending') {
      // 升冪
      products.value.sort((a, b) => a.price - b.price);
    }
  }

  // 取得全部產品列表 GET
  function getProducts() {
    fetchProdcuts()
      .then((res) => {
        products.value = res.data.products;
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 取得特定產品 GET
  function getProductItem(id) {
    isLoadingOn('isFullLoading');

    fetchProductItem(id)
      .then((res) => {
        tempProduct.value = res.data.product;
        isLoadingOff('isFullLoading');
      })
      .catch((err) => {
        apiErrAlert(err.response.data.message);
        isLoadingOff('isFullLoading');
      });
  }

  return {
    products,
    tempProduct,
    getProducts,
    getProductItem,
    filter,
    sort,
  };
});
