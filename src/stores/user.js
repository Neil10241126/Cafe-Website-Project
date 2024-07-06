import { defineStore } from 'pinia';
import { ref } from 'vue';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';

export default defineStore(
  'user',
  () => {
    // 取得 alert 方法
    const alertStore = useAlertStore();
    const { apiResAlert, apiErrAlert } = alertStore;

    // 定義 user 資料
    const user = ref({
      loginState: false,
      userInfo: {},
    });

    // 確認 token 是否失效
    const checkToken = () => {
      const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );

      if (accessToken) {
        user.value.loginState = true;
        apiResAlert('token 運作中');
      } else {
        user.value = {
          loginState: false,
          userInfo: {},
        };
        apiErrAlert('請重新登入');
      }
    };

    return {
      user,
      checkToken,
    };
  },
  { persist: true }
);
