<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <i class="bi bi-chevron-double-left"></i>
          首頁
        </a>
      </li>
      <li class="page-item"><a class="page-link rounded-1 active" href="#">1</a></li>
      <li class="page-item"><a class="page-link rounded-1" href="#">2</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          末頁
          <i class="bi bi-chevron-double-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss">
@import "/src/assets/helper/colors";

.pagination :not(:first-child) { // 按鈕間距自適應
  margin-left: 4px;
}

.page-link {  // 分頁樣式
  background-color: $secondary-tint;
  border: 2px solid $primary;
  &:hover {
    background-color: $primary;
    border-color: $primary;
    color: $secondary-tint;
  }
  &:active {
    color: $primary;
  }
  &:focus {
    background-color: $secondary-tint;
  }
  &.active {
    color: $secondary-tint;
  }
}

</style>
