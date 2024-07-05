import { ref } from 'vue';
// 引入 Pinia 狀態管理
import { defineStore } from 'pinia';

export default defineStore('loader', () => {
  // 定義 loading 物件
  const loadingObj = ref({
    isFullLoading: false, // Full Loading
    isLoading: false, // Inline Loading
  });

  // 開啟 loading
  const isLoadingOn = (loadType) => {
    loadingObj.value[loadType] = true;
  };

  // 關閉 loading
  const isLoadingOff = (loadType) => {
    loadingObj.value[loadType] = false;
  };

  return {
    loadingObj,
    isLoadingOn,
    isLoadingOff,
  };
});
