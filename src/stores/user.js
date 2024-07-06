import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';

export default defineStore(
  'user',
  () => {
    // 初始化路由
    const router = useRouter();

    // 取得 alert 方法
    const alertStore = useAlertStore();
    const { apiResAlert } = alertStore;

    // 定義 user 資料
    const user = ref({
      loginState: false,
      userInfo: {},
    });

    // 用戶登出
    const signout = () => {
      // 將 token 存入 cookie，並設定 expires 讓 token 過期
      const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      document.cookie = `accessToken=${accessToken}; expires=${new Date().toUTCString()}; path=/`;
      apiResAlert('登出成功');
      router.push('/');
    };

    // 確認 token 是否失效
    const checkToken = () => {
      const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );

      if (accessToken) {
        user.value.loginState = true;
      } else {
        user.value = {
          loginState: false,
          userInfo: {},
        };
      }
    };

    return {
      user,
      signout,
      checkToken,
    };
  },
  { persist: true }
);
