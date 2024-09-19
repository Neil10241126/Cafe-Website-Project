import { ref, computed } from 'vue';

export default function useAssets() {
  // 儲存引入的圖片資源
  const imagesMap = ref({});

  // 根據目錄層級搜索並導入圖片文件
  const fetchImagesByDepth = (depth) => {
    // depth 表示根目錄下搜索的深度
    if (depth === 2) {
      // 搜索並導入根目錄下的圖片
      const images = computed(() =>
        import.meta.glob('@/assets/images/*.{jpg,png,webp}', {
          eager: true,
          import: 'default',
        })
      );
      imagesMap.value = images.value;
    } else if (depth === 3) {
      // 搜索並導入根目錄及其子目錄下的圖片
      const images = computed(() =>
        import.meta.glob('@/assets/images/*/*.{jpg,png,webp}', {
          eager: true,
          import: 'default',
        })
      );
      imagesMap.value = images.value;
    }
  };

  // 根據文件名獲取圖片的 URL
  const getImageUrl = (filename) => {
    const key = Object.keys(imagesMap.value).find((item) => item.includes(filename));
    return imagesMap.value[key];
  };

  // 獲取圖片的異步方法
  const getImage = async (depth, filename) => {
    // 初始化載入圖片資源
    await fetchImagesByDepth(depth);
    // 回傳圖片路徑
    return getImageUrl(filename);
  };

  return {
    getImage,
  };
}
