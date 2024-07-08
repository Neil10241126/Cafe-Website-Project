import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
// 引入 helper 方法
import { renderGetFavorite, renderAddFavorite, renderNewFavorite } from '@/helpers/api';

// 定義 user 狀

export default defineStore(
  'user',
  () => {
    // 初始化路由
    const router = useRouter();

    // 取得 alert 方法
    const alertStore = useAlertStore();
    const { apiResAlert } = alertStore;

    // 取得 loading 方法
    const loaderStore = useLoadingStore();
    const { isLoadingOn, isLoadingOff } = loaderStore;

    // 定義 user 資料
    const user = ref({
      loginState: false,
      userInfo: {},
    });
    // 定義 favorites 資料
    const favorites = ref({
      id: null,
      list: [],
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

    // 取得用戶收藏 GET
    const getFavorite = async (userId) => {
      try {
        const res = await renderGetFavorite(userId);

        // 解構，從回應中取得 id 和 products
        const { id, products } = res.data[0];

        // 將取得的收藏資料存入 favorites
        favorites.value = { id, list: products };
      } catch (err) {
        console.log('getFavorite: ', err);
      }
    };

    // 註冊後新增用戶資料 : 收藏
    const addAttrDate = async (id) => {
      const data = { userId: id, products: [] };

      try {
        await renderNewFavorite(data);
      } catch (err) {
        console.log(err);
      }
    };

    // 加入收藏 PATCH
    const updateFavorite = async () => {
      const { id, list } = favorites.value;
      if (user.value.loginState) {
        try {
          await renderAddFavorite(id, { products: list });
        } catch (err) {
          console.log(err);
        }
      }
    };

    // 加入收藏 : 待改名
    const addFavorite = async (data) => {
      isLoadingOn('isFullLoading');
      // 檢查收藏列表中是否已存在該商品
      const filter = favorites.value.list.find((item) => item.product_id === data.product_id);

      // 若不存在，則加入收藏
      if (!filter) {
        favorites.value.list.push(data);
        await updateFavorite();
        isLoadingOff('isFullLoading');
        apiResAlert('收藏商品成功');
        return;
      }
      // 若已存在，則從收藏列表中移除
      const index = favorites.value.list.findIndex((item) => item.product_id === data.product_id);
      favorites.value.list.splice(index, 1);
      await updateFavorite();
      isLoadingOff('isFullLoading');
      apiResAlert('已取消收藏');
    };

    // 確認 accessToken 是否失效
    const checkToken = () => {
      const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );

      if (!accessToken) {
        // 若用戶 accessToken 失效，清除使用者資料
        user.value = { loginState: false, userInfo: {} };
        favorites.value = { id: null, list: [] };
      }
    };

    return {
      user,
      favorites,
      signout,
      addAttrDate,
      getFavorite,
      addFavorite,
      checkToken,
    };
  },
  { persist: true }
);
