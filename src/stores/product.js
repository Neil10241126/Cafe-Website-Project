import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
// 引入 Pinia 狀態管理
import alertStore from '@/stores/alert';
// import useLoadingStore from '@/stores/loading';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('product', () => {
  // 取得 alert 方法
  const alert = alertStore();
  const { apiErrAlert } = alert;

  // 取得 loading 方法
  // const loadingStore = useLoadingStore();
  // const { $loading } = loadingStore;
  // const loader = $loading.show();

  // 定義產品資料
  const products = ref([]);
  const tempProduct = ref({});

  // 取特定產品 : filter
  function filter(cate) {
    const result = products.value.filter((item) => item.category === cate);
    // return getProductPage(result)[page];
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
    // $loading.show({
    //   canCancel: true,
    // });
    axios
      .get(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/products/all`)
      .then((res) => {
        products.value = res.data.products;
        // loader.hide();
      })
      .catch((err) => apiErrAlert(err.response.data.message));
  }

  // 取得特定產品 GET
  function getProductItem(id) {
    axios
      .get(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/product/${id}`)
      .then((res) => {
        tempProduct.value = res.data.product;
      })
      .catch((err) => apiErrAlert(err.response.data.message));
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
