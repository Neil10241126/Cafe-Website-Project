// 引入 Pinia 狀態管理
import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

// 配置 SweetAlert2 的 Toast 設置
const Toast = Swal.mixin({
  toast: true, // 啟用 toast 模式，顯示在右上角的小提示框
  position: 'top-end', // 設置提示框的位置為右上角
  showConfirmButton: false, // 隱藏確認按鈕
  timer: 2000, // 設置提示框自動關閉的時間為 2000 毫秒（2 秒）
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
    });
  }

  return {
    apiResAlert,
    apiErrAlert,
  };
});
