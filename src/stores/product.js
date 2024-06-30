import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
// 引入 Pinia 狀態管理
import alertStore from '@/stores/alert';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('product', () => {
  // 取得 alert 方法
  const alert = alertStore();
  const { apiErrAlert } = alert;

  // 定義產品資料
  const products = ref([]);
  const tempProduct = ref({});
  // const productsObj = ref({});
  // const isProductsLoaded = ref(false);

  // 資料分頁渲染(物件) : getProductPage(資料, 分頁)
  // const getProductPage = (array) => {
  //   const item = {};
  //   const groupSize = 6; // 每頁顯示 6 筆
  //   let pagenation = 1; // 從第 1 頁開始
  //   for (let i = 0; i < array.length; i += groupSize) {
  //     item[pagenation] = array.slice(i, i + groupSize);
  //     pagenation += 1;
  //   }
  //   return item;
  // };

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
    // if (isProductsLoaded.value) return;
    axios
      .get(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/products/all`)
      .then((res) => {
        products.value = res.data.products;
        // productsObj.value = getProductPage(products.value);
        // isProductsLoaded.value = true;
        // console.log('取得非同步產品資料:');
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
    // productsObj,
    getProducts,
    getProductItem,
    filter,
    sort,
    // getProductPage,
  };
});
