import { defineStore } from 'pinia';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true, // 【toast元件】
  position: 'top-end', // 定位方向
  showConfirmButton: false, // 【確認按鈕】
  timer: 2000, // 持續時間
  timerProgressBar: true, // 【時間條】
  showCloseButton: true, // 【關閉按鈕】
});

export default defineStore('alert', () => {
  function apiResAlert(response) {
    Toast.fire({
      icon: 'success',
      title: response,
    });
  }

  function apiErrAlert(error) {
    Toast.fire({
      icon: 'error',
      title: error,
    });
  }

  return {
    apiResAlert,
    apiErrAlert,
  };
});
