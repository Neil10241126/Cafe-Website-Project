import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('product', () => {
  const products = ref([]);
  const tempProduct = ref({});

  // filter 取特定產品
  function filter(cate) {
    const result = products.value.filter((item) => item.category === cate);
    return result;
  }

  // sort 價格排序
  function sort(value) {
    if (value === 'sortByDescending') { // 降冪
      products.value.sort((a, b) => b.price - a.price);
    } else if (value === 'sortByAscending') { // 升冪
      products.value.sort((a, b) => a.price - b.price);
    }
  }

  // 取得全部產品列表
  function getProducts() {
    axios.get(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/products/all`)
      .then((res) => { products.value = res.data.products; })
      .catch((err) => alert(err.response.data.message));
  }

  // 取得特定產品
  function getProductItem(id) {
    axios.get(`${VITE_API_URL}/v2/api/${VITE_API_NAME}/product/${id}`)
      .then((res) => { tempProduct.value = res.data.product; })
      .catch((err) => alert(err.response.data.message));
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
