<template>
  <!-- Full Loading -->
  <VueLoading
    v-if="props.name === 'full'"
    v-model:active="loadingObj.isFullLoading"
    :can-cancel="false"
    :is-full-page="true"
    :lock-scroll="false"
  />

  <!-- Inline Loading -->
  <div v-else-if="props.name === 'inline'" class="spinner-border spinner-border-sm">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script setup>
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useLoadingStore from '@/stores/loading';

// 取得 loading 資料
const loaderStore = useLoadingStore();
const { loadingObj } = storeToRefs(loaderStore);

// 定義組件屬性
const props = defineProps({
  name: {
    type: String,
    default: 'full',
  },
});
</script>

<style lang="scss" scoped></style>
