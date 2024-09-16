<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: pageObj.currentPage === pageObj.start }"
          href="#"
          @click.prevent="goToPage(pageObj.start)"
        >
          <i class="bi bi-chevron-double-left"></i>
          首頁
        </a>
      </li>
      <li class="page-item" v-for="page in props.pages" :key="page">
        <a
          href="#"
          class="page-link rounded-1"
          :class="[
            { active: page === pageObj.currentPage },
            { disabled: page === pageObj.currentPage },
          ]"
          @click.prevent="goToPage(page)"
        >
          {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="{ disabled: pageObj.currentPage === pageObj.end }"
          href="#"
          @click.prevent="goToPage(pageObj.end)"
        >
          末頁
          <i class="bi bi-chevron-double-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
// import { useWindowScroll } from '@vueuse/core';

// 定義組件的屬性，包含頁數、渲染產品的方法和分類
const props = defineProps(['pages', 'updateProducts', 'cate']);

// 獲取 useWindowScroll 當中的 y 滾動位置
// const { y } = useWindowScroll();

// 定義一個頁面對象，包含開始頁、結束頁和當前頁
const pageObj = ref({
  start: 1,
  end: null,
  currentPage: 1,
});

// 監聽 props.pages 的變化，並更新 pageObj 的結束頁
watch(
  () => props.pages,
  (newValue) => {
    pageObj.value.end = newValue;
  }
);

// 定義一個方法，用於跳轉到指定頁面
function goToPage(page) {
  // 調用傳入的 RenderProducts 方法來渲染指定頁面的產品
  props.updateProducts(props.cate, page);

  // y.value = 0; // 滾動至頂部
  pageObj.value.currentPage = page; // 更新當前頁面
}
</script>

<style lang="scss" scoped>
@import '/src/assets/helper/colors';

.pagination :not(:first-child) {
  // 按鈕間距自適應
  margin-left: 4px;
}

.page-link {
  // 分頁樣式
  background-color: $secondary-tint;
  border: 2px solid $primary;
  &:hover {
    background-color: $primary-dark;
    border-color: $primary-dark;
    color: $secondary-tint;
  }
  &:active {
    color: $primary;
  }
  &:focus {
    background-color: $secondary-tint;
  }
  &.active {
    background-color: $primary;
    color: $secondary-tint;
  }
}
</style>
