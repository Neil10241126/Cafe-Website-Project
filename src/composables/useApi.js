/* eslint-disable prettier/prettier */
/* eslint-disable vue/max-len */
import axios from 'axios';

// 匯入環境變數
const { VITE_API_URL, VITE_API_NAME } = import.meta.env;
const renderApi = 'https://cafe-json-server.onrender.com/api';
// const jsonAPi = 'http://localhost:3000/';

// User Render 相關 api
const renderUserApi = axios.create({
  baseURL: renderApi,
});

// User Admin 相關 api
const adminApi = axios.create({
  baseURL: VITE_API_URL,
});

// Product 相關 api
const productApi = axios.create({
  baseURL: VITE_API_URL,
});

// cart 相關 api
const cartApi = axios.create({
  baseURL: VITE_API_URL,
});

// Order 相關 api
const orderApi = axios.create({
  baseURL: VITE_API_URL,
});

// Coupon 相關 api
const couponApi = axios.create({
  baseURL: VITE_API_URL,
});

export default function useApi() {
  // User Render 相關 api : [註冊、登入]
  const renderSignup = (userData) => renderUserApi.post(`/signup`, userData);
  const renderSignin = (userData) => renderUserApi.post(`/signin`, userData);

  // Favorite Render 相關 api : [新增、取得、更新]
  const renderNewFavorite = (data) => renderUserApi.post(`/favorites`, data);
  const renderGetFavorite = (userId) => renderUserApi.get(`/favorites?userId=${userId}`);
  const renderAddFavorite = (id, products) => renderUserApi.patch(`/favorites/${id}`, products);

  // Admin login 相關 api : [登入]、[登出]、[驗證]
  const loginAdmin = (userData) => adminApi.post(`/v2/admin/signin`, userData);
  const logoutAdmin = () => adminApi.post(`/v2/logout`);
  const adminCheck = () => adminApi.post(`/v2/api/user/check`);

  // Admin Products 相關 api : [取得]、[新增]、[單一刪除]、[修改]
  const fetchAdminProducts = (page) => adminApi.get(`/v2/api/${VITE_API_NAME}/admin/products?page=${page}`);
  const fetchAddAdminProduct = (data) => adminApi.post(`/v2/api/${VITE_API_NAME}/admin/product`, data);
  const fetchDelAdminProduct = (id) => adminApi.delete(`/v2/api/${VITE_API_NAME}/admin/product/${id}`);
  const fetchUpdateAdminProduct = (id, data) => adminApi.put(`/v2/api/${VITE_API_NAME}/admin/product/${id}`, data);

  // Admin Orders 相關 api : [取得]、[單一刪除]
  const fetchAdminOrders = (page) => adminApi.get(`/v2/api/${VITE_API_NAME}/admin/orders?page=${page}`);
  const fetchDelAdminOrder = (id) => adminApi.delete(`/v2/api/${VITE_API_NAME}/admin/order/${id}`);
  const fetchDelAdminOrderAll = () => adminApi.delete(`/v2/api/${VITE_API_NAME}/admin/orders/all`);

  // adminApi 添加 headers 方法
  const setAdminToken = (token) => { adminApi.defaults.headers.common.Authorization = `${token}` };


  // Product 相關 api : [取得列表、取得品項]
  const fetchProdcuts = () => productApi.get(`/v2/api/${VITE_API_NAME}/products/all`);
  const fetchProductItem = (id) => productApi.get(`/v2/api/${VITE_API_NAME}/product/${id}`);

  // cart 相關 api : [取得、新增、刪除、更新]
  const fetchCart = () => cartApi.get(`/v2/api/${VITE_API_NAME}/cart`);
  const fetchAdd = (data) => cartApi.post(`/v2/api/${VITE_API_NAME}/cart`, data);
  const fetchDeleteItem = (cartId) => cartApi.delete(`/v2/api/${VITE_API_NAME}/cart/${cartId}`);
  const fetchChangeNum = (id, data) => cartApi.put(`/v2/api/${VITE_API_NAME}/cart/${id}`, data);

  // Order 相關 api : [取得、新增、結帳]
  const fetchOrder = (orderId) => orderApi.get(`/v2/api/${VITE_API_NAME}/order/${orderId}`);
  const fetchCreate = (data) => orderApi.post(`/v2/api/${VITE_API_NAME}/order`, data);
  const fetchCheckout = (orderId) => orderApi.post(`/v2/api/${VITE_API_NAME}/pay/${orderId}`);

  // Coupon 相關 api : [取得]
  const fetchCoupon = (data) => couponApi.post(`/v2/api/${VITE_API_NAME}/coupon`, data);

  // Upload 相關 api : [新增]
  const fetchUpload = (formData) => adminApi.post(`/v2/api/${VITE_API_NAME}/admin/upload`, formData);

  return {
    // Call API
    renderSignup,
    renderSignin,
    renderNewFavorite,
    renderGetFavorite,
    renderAddFavorite,
    loginAdmin,
    logoutAdmin,
    adminCheck,
    fetchAdminProducts,
    fetchAddAdminProduct,
    fetchDelAdminProduct,
    fetchUpdateAdminProduct,
    fetchAdminOrders,
    fetchDelAdminOrder,
    fetchDelAdminOrderAll,
    fetchProdcuts,
    fetchProductItem,
    fetchCart,
    fetchAdd,
    fetchDeleteItem,
    fetchChangeNum,
    fetchOrder,
    fetchCreate,
    fetchCheckout,
    fetchCoupon,
    fetchUpload,
    // Methods
    setAdminToken,
  }
}