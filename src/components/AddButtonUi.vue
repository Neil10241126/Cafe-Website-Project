### Vue 組件使用說明

這個 Vue 組件是一個數量調整器，包括兩個按鈕（用於增減數量）和一個顯示當前數量的輸入框。
你可以通過設置 size 和 count 兩個屬性來調整按鈕和輸入框的大小以及初始數量。

### 參數設定

-  size  (String)：設置按鈕和輸入框的大小。有三個可選值：
  -  'small' ：小尺寸按鈕和輸入框。
  -  'large' ：大尺寸按鈕和輸入框。
  -  'default' ：默認尺寸按鈕和輸入框（若未指定  size ，則使用此尺寸）。
-  count  (Number)：設置初始數量。默認為 1。

<template>
  <div class="input-group flex-nowrap">
    <!-- 減少數量按鈕 -->
    <button
      type="button"
      class="btn-primary p-0"
      :class="[btnClass, {'pointer-events-none': count === 0}]"
      @click="count--"
    >-</button>

    <!-- 顯示數量的輸入框 -->
    <input
      type="text"
      class="form-control fs-7 bg-transparent border-2 border-primary text-center p-0"
      readonly
      :class="inputClass"
      v-model.number="count"
    >

     <!-- 增加數量按鈕 -->
    <button
      type="button"
      class="btn-primary p-0"
      :class="[btnClass, {'pointer-events-none': count === 10}]"
      @click="count++"
    >+</button>

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
  if (props.size === 'small') { return { 'btn-sm': true }; }
  if (props.size === 'large') { return { 'btn-lg': true }; }
  return { btn: true };
});

// 計算輸入框的 class
const inputClass = computed(() => {
  if (props.size === 'small') { return { 'add-input-sm': true }; }
  if (props.size === 'large') { return { 'add-input-lg': true }; }
  return { 'add-input': true };
});

</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

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
