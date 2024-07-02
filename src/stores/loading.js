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
    console.log(loadType, '開啟');
  };

  // 關閉 loading
  const isLoadingOff = (loadType) => {
    loadingObj.value[loadType] = false;
    console.log(loadType, '關閉');
  };

  return {
    loadingObj,
    isLoadingOn,
    isLoadingOff,
  };
});
