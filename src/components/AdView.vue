<template>
  <!-- 跑馬燈 Swiper -->
  <div class="container">
    <swiper-container
      class="py-3 py-md-4"
      :allowTouchMove="true"
      :slidesPerView="1"
      :speed="20000"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide class="fs-6 fs-md-4 fw-bold text-gray-800 w-auto">
        單筆達
        <span class="text-danger">NT$999免運費</span>
        ，另輸入折扣優惠碼再打
        <span class="text-danger">88折 !</span>
      </swiper-slide>
      <swiper-slide class="fs-6 fs-md-4 fw-bold text-gray-800 w-auto">
        單筆達
        <span class="text-danger">NT$999免運費</span>
        ，另輸入折扣優惠碼再打
        <span class="text-danger">88折 !</span>
      </swiper-slide>
    </swiper-container>
  </div>

  <!-- 廣告 Banner -->
  <section class="container">
    <img
      src="/public/images/advertise-banner.webp"
      class="img-fluid object-fit-cover"
      alt=""
      style="min-height: 220px"
    />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
// Swiper Element 修改 CSS 樣式 : https://swiperjs.com/element#parts
swiper-container::part(wrapper) {
  transition-timing-function: linear; // 關閉減速效果，維持速率一致\
}
</style>
