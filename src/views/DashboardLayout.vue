<template>
  <div class="bg-dark vh-100">
    <nav class="nav nav-pills flex-column" style="width: 250px" ref="nav">
      <RouterLink class="nav-link link-light border d-flex align-items-center position-relative
        mb-5" to="/admin">
        <i class="bi bi-microsoft fs-2"></i>
        <span class="fs-5 fw-semibold ms-3">後台頁面</span>
        <button type="button" class="btn rounded-circle p-0 position-absolute
          top-50 start-100 translate-middle" @click="change()">
          <i id="arrow-btn" class="bi bi-arrow-right-circle-fill fs-4 d-flex text-warning"></i>
        </button>
      </RouterLink>
      <a class="nav-link link-light d-flex align-items-center mb-3 active" href="#">
        <i class="bi bi-window-desktop icon d-flex"></i>
        <span class="fs-6 ms-3">產品列表</span>
      </a>
      <a class="nav-link link-light d-flex align-items-center mb-3" href="#">
        <i class="bi bi-shop-window icon d-flex"></i>
        <span class="fs-6 ms-3">訂單列表</span>
      </a>
      <a class="nav-link link-light d-flex align-items-center mb-3  disabled">
        <i class="bi bi-apple icon d-flex"></i>
        <span class="fs-6 ms-3">優惠券列表</span>
      </a>
    </nav>

  </div>
  <!-- <RouterView></RouterView> -->
</template>

<script setup>
import { ref } from 'vue';

const nav = ref(null);
function change() {
  nav.value.classList.toggle('toggle');
}
</script>

<style lang="scss" scope>
.toggle {
  width: 72px !important;
  span {
    display: none;
  }
  #arrow-btn {
    transform: rotate(180deg);
  }
}

.icon {
  width: 40px;
  height: 40px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
