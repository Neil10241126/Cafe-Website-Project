<template>
  <div v-if="size === 'small'" class="border border-primary rounded-1 py-1 ps-3
   pe-2 d-inline-block border-start-4"><p class="fs-7 fw-bold text-primary mb-0">{{ content }}</p>
  </div>
  <div v-else-if="size === 'normal'" class="border border-primary rounded-1 py-1 ps-3
   pe-2 d-inline-block border-start-4"><p class="fs-6 fw-bold text-primary mb-0">{{ content }}</p>
  </div>
  <div v-else class="border border-primary rounded-1 py-1 ps-3
   pe-2 d-inline-block border-start-4"><p class="fs-5 fw-bold text-primary mb-0">{{ content }}</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const size = ref('normal');

defineProps({
  content: String,
});

function changerSize() {
  if (width.value <= 992) {
    size.value = 'small';
  } else {
    size.value = 'large';
  }
}

watchEffect(() => {
  changerSize();
});

</script>

<style lang="scss" scoped>
</style>
