<template>
  <div class="position-relative">
    <img src="/public/images/Checkout-banner.webp" alt="Checkout-banner"
      class="object-fit-cover" style="min-height: 510px; background-color: rgba(0, 0, 0, 0.8);">
    <div class=" position-absolute top-50 start-50 translate-middle text-center">
      <h2 class="fs-3 fw-bold lh-base text-light mb-3">
        商品已訂購完成<i class="bi bi-check-circle ms-3"></i></h2>
      <div class="border border-2 border-light rounded py-2 px-4 mb-3">
        <p class="fw-semibold text-light mb-0 text-nowrap">
          訂單編號 :<span class="ms-2">-Nxm_J_CRk-9abrg6r8w</span></p>
      </div>
      <p class="fs-6 fw-semibold text-light">感謝您的購買 !</p>
      <RouterLink to="/" class="btn btn-warning px-5">繼續購物</RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scope>
</style>
