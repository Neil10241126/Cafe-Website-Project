<template>
  <div class="card flex-row" style="max-width: 540px; box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
    <img src="/public/images/Honduran-coffee-bean-2.jpg" class="object-fit-cover rounded-2"
      style="width: 90px;height: 110px;" alt="...">
    <div class="card-body d-flex flex-column h-auto py-1 pe-0">
      <div>
        <div class="d-flex justify-content-between align-items-center mb-1">
          <h5 class="card-title fs-7 fw-semibold mb-0">斯里蘭卡海鹽</h5>
          <i class="bi bi-x-lg fs-7" :class="{'d-none': !editor}"></i>
        </div>
        <p class="card-text"><small class="text-body-secondary">焦糖、巧克力、榛果。</small></p>
      </div>
      <div class="mt-auto d-flex justify-content-between align-items-center">
        <p class="fs-7 fw-bold text-danger mb-0">NT$ 3999</p>
        <AddButtonUi v-if="editor === true" class="w-auto" size="small"></AddButtonUi>
        <p v-else class="fs-6 mb-0">X1</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AddButtonUi from '@/components/AddButtonUi.vue';

defineProps({
  // 初始值定義 https://cn.vuejs.org/guide/components/props#prop-validation
  editor: {
    type: Boolean, // 類型
    default() {
      return true; // 初始值
    },
  },
});

</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

.card {
  background-color: $secondary-tint;
  padding: 8px;
  border: none;
}
</style>
