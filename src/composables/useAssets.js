import { computed, ref } from 'vue';

export default function useAssets(depth = 2) {
  // 儲存引入的圖片資源
  const imagesMap = ref({});

  // 初始化時，根據 depth 層級搜索並引入圖片資源
  if (depth === 2) {
    const images = computed(() =>
      import.meta.glob('@/assets/images/*.{jpg,png,webp,svg}', {
        eager: true,
        import: 'default',
      })
    );
    imagesMap.value = images.value;
  } else if (depth === 3) {
    const images = computed(() =>
      import.meta.glob('@/assets/images/*/*.{jpg,png,webp,svg}', {
        eager: true,
        import: 'default',
      })
    );
    imagesMap.value = images.value;
  }

  // 根據文件名稱獲取圖片的 URL
  function getAssetsImageSrc(fileName) {
    // 抓出指定圖片所在的 key 值
    const key = Object.keys(imagesMap.value).find((item) => item.includes(fileName));

    // ⚠️若發生錯誤，則回傳預設影像
    if (!imagesMap.value[key]) {
      return '/src/assets/images/lazy-images/small-image-default.svg';
    }

    // 若正確，回傳圖片路徑
    return imagesMap.value[key];
  }

  return {
    getAssetsImageSrc,
  };
}
