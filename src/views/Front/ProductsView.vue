<template>
  <!-- 跑馬燈 Swiper -->
  <div class="container">
    <swiper-container class="py-3 py-md-4"
      :allowTouchMove="true"
      :slidesPerView="auto" :speed="20000" :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      >
      <swiper-slide class="fs-6 fs-md-4 fw-bold text-gray-800 w-auto">單筆達
        <span class="text-danger">NT$999免運費</span>，另輸入折扣優惠碼再打<span class="text-danger">88折 !</span>
      </swiper-slide>
      <swiper-slide class="fs-6 fs-md-4 fw-bold text-gray-800 w-auto">單筆達
        <span class="text-danger">NT$999免運費</span>，另輸入折扣優惠碼再打<span class="text-danger">88折 !</span>
      </swiper-slide>
    </swiper-container>
  </div>

  <!-- 廣告 Banner -->
  <section class="container">
    <img src="/public/images/advertise-banner.webp" class="img-fluid object-fit-cover" alt=""
      style="min-height: 220px;">
  </section>

  <!-- 路由 Router -->
  <div class="container py-6">
    <ul class="nav justify-content-center align-items-center fs-8 mb-3">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link link-gray-800 text-decoration-underline
        link-offset-1 px-2 py-0">首頁</RouterLink>
      </li>
      <li>/</li>
      <li class="nav-item">
        <RouterLink to="/products" class="nav-link link-gray-800 text-decoration-underline
        link-offset-1 px-2 py-0">
        商品列表</RouterLink>
      </li>
      <li>/</li>
      <li class="nav-item">
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">全部商品</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">產品列表</h2>
      <i class="bi bi-bucket-fill fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 商品列表 Products List -->
  <div class="container">
    <div class="row">
      <!-- 導覽 -->
      <div class="col-3">
      </div>
      <!-- 品項 -->
      <div class="col-9"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// Swiper Element 修改 CSS 樣式 : https://swiperjs.com/element#parts
swiper-container::part(wrapper) {
  transition-timing-function: linear;  // 關閉減速效果，維持速率一致\
}
</style>
