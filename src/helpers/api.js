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

// User 相關 api
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

// User Render 相關 api : [註冊、登入]
export const renderSignup = (userData) => renderUserApi.post(`/signup`, userData);
export const renderSignin = (userData) => renderUserApi.post(`/signin`, userData);

// Favorite Render 相關 api : [新增、取得、更新]
export const renderNewFavorite = (data) => renderUserApi.post(`/favorites`, data);
export const renderGetFavorite = (userId) => renderUserApi.get(`/favorites?userId=${userId}`);
export const renderAddFavorite = (id, products) => renderUserApi.patch(`/favorites/${id}`, products);

// Admin 相關 api : [登入]
export const loginAdmin = (userData) => adminApi.post(`/v2/admin/signin`, userData);

// Product 相關 api : [取得列表、取得品項]
export const fetchProdcuts = () => productApi.get(`/v2/api/${VITE_API_NAME}/products/all`);
export const fetchProductItem = (id) => productApi.get(`/v2/api/${VITE_API_NAME}/product/${id}`);

// cart 相關 api : [取得、新增、刪除、更新]
export const fetchCart = () => cartApi.get(`/v2/api/${VITE_API_NAME}/cart`);
export const fetchAdd = (data) => cartApi.post(`/v2/api/${VITE_API_NAME}/cart`, data);
export const fetchDeleteItem = (cartId) => cartApi.delete(`/v2/api/${VITE_API_NAME}/cart/${cartId}`);
export const fetchChangeNum = (id, data) => cartApi.put(`/v2/api/${VITE_API_NAME}/cart/${id}`, data);

// Order 相關 api : [取得、新增、結帳]
export const fetchOrder = (orderId) => orderApi.get(`/v2/api/${VITE_API_NAME}/order/${orderId}`);
export const fetchCreate = (data) => orderApi.post(`/v2/api/${VITE_API_NAME}/order`, data);
export const fetchCheckout = (orderId) => orderApi.post(`/v2/api/${VITE_API_NAME}/pay/${orderId}`);

// Coupon 相關 api : [取得]
export const fetchCoupon = (data) => couponApi.post(`/v2/api/${VITE_API_NAME}/coupon`, data);
