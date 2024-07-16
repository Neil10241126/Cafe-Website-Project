import { ref, reactive } from 'vue';
// 引入 Pinia 狀態管理
import { defineStore } from 'pinia';
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
// 引入 Composables 方法
import useApi from '@/composables/useApi';

export default defineStore('product', () => {
  // 取得 alert 方法
  const alertStore = useAlertStore();
  const { apiErrAlert } = alertStore;

  // 取得 loading 方法
  const loaderStore = useLoadingStore();
  const { isLoadingOn, isLoadingOff } = loaderStore;

  // 取得 useApi 方法
  const { fetchProdcuts, fetchProductItem } = useApi();

  // 定義產品資料
  const products = ref([]); // 產品原始列表
  const tempProduct = ref({}); // 單一產品
  // 渲染產品列表
  const productsList = reactive({
    全部: [],
    淺烘焙: [],
    中烘焙: [],
    深烘焙: [],
  });

  // sort 價格排序
  function sort(cate, value) {
    if (value === 'sortByDescending') {
      // 降冪
      productsList[cate].sort((a, b) => b.price - a.price);
    } else if (value === 'sortByAscending') {
      // 升冪
      productsList[cate].sort((a, b) => a.price - b.price);
    }
  }

  // 取特定產品 : filter
  function filter(cate) {
    const result =
      cate !== '全部' ? products.value.filter((item) => item.category === cate) : products.value;
    return result;
  }

  // 更新 produtsList 資料內容
  function updateProducts(cate, page = 1) {
    const pageCount = 6; // 每頁顯示 6 筆資料
    const start = pageCount * (page - 1); // 開始索引值
    const end = pageCount * page; // 結束索引值
    const data = filter(cate);

    productsList[cate] = data.slice(start, end);
  }

  // 取得全部產品列表 GET
  function getProducts() {
    fetchProdcuts()
      .then((res) => {
        products.value = res.data.products;
        ['全部', '淺烘焙', '中烘焙', '深烘焙'].forEach((cate) => updateProducts(cate));
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
    productsList,
    sort,
    filter,
    updateProducts,
    getProducts,
    getProductItem,
  };
});
