<template>
  <div
    class="blur-loaded"
    :class="{ loaded: isImageLoaded }"
    ref="blurDiv"
    :style="`background-image: url(${lazyImageUrl})`"
  >
    <img ref="img" :src="props.imageUrl" :loading="setting" @load="loaded()" alt="none" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  imageUrl: String,
  lazyImageUrl: String,
  setting: {
    type: String,
    default: 'lazy',
  },
});

const emits = defineEmits(['imageReady']);

const blurDiv = ref(null);
const img = ref(null);
const isImageLoaded = ref(false);

// :class="{ loaded: isImageLoaded }"
function loaded() {
  emits('imageReady', (isImageLoaded.value = true));
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
