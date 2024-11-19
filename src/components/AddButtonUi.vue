<template>
  <div class="input-group flex-nowrap">
    <!-- 減少數量按鈕 -->
    <button
      type="button"
      class="btn-primary p-0"
      :class="[btnClass, { 'pointer-events-none': count === 1 }]"
      @click="count--"
    >
      -
    </button>

    <!-- 顯示數量的輸入框 -->
    <input
      type="text"
      class="form-control fs-7 bg-transparent border-2 border-primary text-center p-0"
      readonly
      :class="inputClass"
      v-model.number="count"
    />

    <!-- 增加數量按鈕 -->
    <button
      type="button"
      class="btn-primary p-0"
      :class="[btnClass, { 'pointer-events-none': count === 10 }]"
      @click="count++"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// 定義組件的屬性
const props = defineProps({
  size: {
    type: String,
    default: 'default',
  },
});

// 雙向綁定 count 數量
const count = defineModel('qtyModel', {
  type: Number,
  default: 1,
});

// 計算按鈕的 class
const btnClass = computed(() => {
  if (props.size === 'small') {
    return { 'btn-sm': true };
  }
  if (props.size === 'large') {
    return { 'btn-lg': true };
  }
  return { btn: true };
});

// 計算輸入框的 class
const inputClass = computed(() => {
  if (props.size === 'small') {
    return { 'add-input-sm': true };
  }
  if (props.size === 'large') {
    return { 'add-input-lg': true };
  }
  return { 'add-input': true };
});
</script>

<style lang="scss" scoped>
@import '/src/assets/helper/colors';

// 按鈕樣式
.btn {
  width: 38px;
  height: 38px;
  &.disabled {
    background: $primary;
    border: 1px solid $primary;
    opacity: 1;
  }
  &-sm {
    width: 24px;
    height: 24px;
  }
  &-lg {
    width: 48px;
    height: 48px;
  }
}

// 輸入框樣式
.add-input {
  height: 38px;
  max-width: 60px;
  &-sm {
    height: 24px;
    max-width: 30px;
  }
  &-lg {
    height: 48px;
    max-width: 70px;
  }
}
</style>
