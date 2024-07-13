import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore, storeToRefs } from 'pinia';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
import useProductStore from '@/stores/product';
// 引入 Composables 方法
import useApi from '@/composables/useApi';

// 定義 user 狀

export default defineStore(
  'user',
  () => {
    // 初始化路由
    const router = useRouter();

    // 取得 alert 方法
    const alertStore = useAlertStore();
    const { apiResAlert, handleError } = alertStore;

    // 取得 loading 方法
    const loaderStore = useLoadingStore();
    const { isLoadingOn, isLoadingOff } = loaderStore;

    // 取得 product 資料
    const productStore = useProductStore();
    const { products } = storeToRefs(productStore);

    // 取得 useApi 方法
    const { renderGetFavorite, renderAddFavorite, renderNewFavorite } = useApi();

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
      // 若用戶登出，清除使用者資料
      user.value = { loginState: false, userInfo: {} };
      favorites.value = { id: null, list: [] };

      apiResAlert('登出成功');
      router.push('/');
    };

    // 取得用戶收藏 GET
    const getFavorite = async (userId) => {
      const res = await renderGetFavorite(userId);

      // 解構，從回應中取得 id 和 products
      const { id, list } = res.data[0];
      // 將取得的收藏資料存入 favorites
      favorites.value = { id, list };
    };

    // 註冊後新增用戶資料 : 收藏
    const addAttrDate = async (id) => {
      const data = { userId: id, list: [] };

      await renderNewFavorite(data);
    };

    // 加入收藏 PATCH
    const updateFavorite = async () => {
      const { id, list } = favorites.value;

      // 確認登入，更新伺服器收藏資料
      if (user.value.loginState) {
        await renderAddFavorite(id, { list });
      }
    };

    // 切換收藏 : 加入、移除
    const toggleFavorite = async (productId) => {
      isLoadingOn('isFullLoading');

      // 檢查收藏列表中是否已存在該商品
      const { list } = favorites.value;
      const filter = list.find((item) => item.id === productId);

      // 若不存在，則加入收藏
      if (!filter) {
        // 從 products Store 取出要收藏的資料，並加入至 favorites 中
        const favoriteData = products.value.find((item) => item.id === productId);
        list.push(favoriteData);

        try {
          // 更新收藏列表至伺服器
          await updateFavorite();
          apiResAlert('收藏商品成功');
        } catch (err) {
          // 若更新失敗，撤銷本地更新
          list.pop();
          handleError(err, '收藏商品失敗，請重新登入');
          throw err;
        } finally {
          isLoadingOff('isFullLoading');
        }
      } else {
        // 若已存在，則從收藏列表中移除
        const index = list.findIndex((item) => item.id === productId);
        list.splice(index, 1);

        try {
          // 更新收藏列表至伺服器
          await updateFavorite();
          apiResAlert('已取消收藏');
        } catch (err) {
          // 若更新失敗，撤銷本地更新
          list.splice(index, 0, filter);
          handleError(err, '取消收藏失敗，請重新登入');
          throw err;
        } finally {
          isLoadingOff('isFullLoading');
        }
      }
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
      toggleFavorite,
      checkToken,
    };
  },
  { persist: true }
);
