// 引入 Pinia 狀態管理
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

// 配置 SweetAlert2 的 Toast 預設設置
const Toast = Swal.mixin({
  toast: true, // 啟用 toast 模式，顯示在右上角的小提示框
  position: 'top-end', // 設置提示框的位置為右上角
  showConfirmButton: false, // 隱藏確認按鈕
  timer: 2000, // 設置提示框自動關閉的時間為 2000 毫秒（2秒）
  timerProgressBar: true, // 顯示計時進度條
  showCloseButton: true, // 顯示關閉按鈕
});

export default defineStore('alert', () => {
  // 定義一個函數，用於顯示 API 成功響應的提示框
  function apiResAlert(response) {
    Toast.fire({
      icon: 'success',
      title: response, // 回傳 API 成功時的內容
    });
  }

  // 定義一個函數，用於顯示 API 錯誤響應的提示框
  function apiErrAlert(error) {
    Toast.fire({
      icon: 'error',
      title: error, // 回傳 API 錯誤時的內容
      timer: 4000, // 設置關閉時間為 4000 毫秒 (4秒)
    });
  }

  // 專門的錯誤處理方法 : 僅 Json Server
  function handleError(err, msg) {
    // 回傳錯誤類型
    const resError = {
      // renderSignin Error :
      'Incorrect password': '密碼錯誤',
      'Cannot find user': '無法找到使用者',
      // renderSignup Error :
      'Email already exists': '電子信箱無法重複註冊',
    };

    // 判斷錯誤是否為空物件
    if (err.response.data.length) {
      apiErrAlert(resError[err.response.data]);
    } else {
      apiErrAlert(msg || '伺服器錯誤');
    }
  }

  return {
    apiResAlert,
    apiErrAlert,
    handleError,
  };
});
