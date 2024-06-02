<template>
  <!-- small -->
  <div v-if="size === 'small'" class="border border-primary rounded-1 py-1 ps-3
    pe-2 d-inline-block border-start-4"><p class="fs-7 fw-bold text-primary mb-0">{{ content }}</p>
  </div>
  <!-- normal -->
  <div v-else-if="size === 'normal'" class="border border-primary rounded-1 py-1 ps-3
    pe-2 d-inline-block border-start-4"><p class="fs-6 fw-bold text-primary mb-0">{{ content }}</p>
  </div>
  <!-- large -->
  <div v-else class="border border-primary rounded-1 py-1 ps-3
    pe-2 d-inline-block border-start-4"><p class="fs-5 fw-bold text-primary mb-0">{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  content: String,
  size: {
    type: String,
    default() {
      return 'large';
    },
  },
});

</script>

<style lang="scss" scoped>
</style>
