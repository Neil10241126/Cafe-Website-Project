<template>
  <div
    class="blur-loaded"
    :class="{ loaded: isImageLoaded }"
    :style="`background-image: url(${getAssetsImageSrc(formatTitle)})`"
  >
    <img :src="props.imageUrl" :loading="setting" @load="loaded()" alt="none" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// 引入 Composables 方法
import useAssets from '../composables/useAssets';

// 取得 useAssets 方法
const { getAssetsImageSrc } = useAssets(3);

// 定義佔位符接收參數 Props:
const props = defineProps({
  title: String,
  imageUrl: String,
  setting: {
    type: String,
    default: 'lazy',
  },
});

const emits = defineEmits(['imageReady']);

// 判斷圖片是否載入完畢
const isImageLoaded = ref(false);

// 格式化標題: 去除空白
const formatTitle = computed(() => props.title.replace(/\s/g, ''));

// 當圖片載入完成時，觸發事件通知父組件
function loaded() {
  isImageLoaded.value = true;
  emits('imageReady', isImageLoaded.value);
}
</script>

<style lang="scss" scoped>
img {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blur-loaded {
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.blur-loaded::before {
  content: '';
  position: absolute;
  inset: 0;
  animation: pulse 2.5s infinite;
}

.blur-loaded.loaded::before {
  content: none;
  animation: none;
}

@keyframes pulse {
  0% {
    background-color: rgba(255, 255, 255, 0);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.3);
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
}

.blur-loaded > img {
  opacity: 0;
}

.blur-loaded.loaded > img {
  opacity: 1;
  transition: opacity 500ms ease-in-out;
}
</style>
