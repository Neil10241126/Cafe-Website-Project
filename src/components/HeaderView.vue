<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg bg-gray-900 py-3">
    <div class="container d-flex justify-content-center">

      <!-- 漢堡選單 -->
      <button class="navbar-toggler border-none p-0" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup">
        <img src="/public/images/burger-menu.svg" alt="burger-menu">
      </button>

      <!-- Logo -->
      <RouterLink class="navbar-brand mx-auto" to="/">
        <img class="d-none d-lg-block" src="/public/images/Beans-cafe-logo-light.png"
          alt="logo-light">
        <img class="d-lg-none" src="/public/images/Beans-cafe-logo-sm.png" alt="logo-sm">
      </RouterLink>

      <!-- Mobile: 購物車、使用者功能 -->
      <div class="d-flex align-items-center">
        <RouterLink to="#" class="nav-link link-warning text-light px-3 d-lg-none"
          data-bs-toggle="offcanvas" data-bs-target="#Cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" fill="currentColor"
            class="bi bi-cart3 d-flex" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
            .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5
              0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479
              9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4
                2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
        </RouterLink>
          <RouterLink to="/signin" class="nav-link link-warning text-light d-lg-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" fill="currentColor"
              class="bi bi-person-circle d-flex" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468
                11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </RouterLink>
      </div>

      <!-- 導覽列表 -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/" class="nav-link link-warning text-light fs-7 fs-lg-5
            fw-bold py-3 px-lg-3">首頁</RouterLink>
          <RouterLink to="/products" class="nav-link link-warning text-light fs-7 fs-lg-5
            fw-bold py-3 px-lg-3">全部商品</RouterLink>
          <RouterLink to="/about" class="nav-link link-warning text-light fs-7 fs-lg-5
            fw-bold py-3 px-lg-3">關於我們</RouterLink>
          <RouterLink to="/contact" class="nav-link link-warning text-light fs-7 fs-lg-5
            fw-bold py-3 px-lg-3">聯絡我們</RouterLink>
          <RouterLink to="#" class="nav-link link-warning text-light px-3 d-none
            d-lg-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
              class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0
                0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1
              0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102
                4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2
                2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0
                  1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </RouterLink>
          <RouterLink to="/signin" class="nav-link link-warning text-light ps-3 d-none
            d-lg-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7
                0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <!-- Offcanvas 購物車 -->
  <div class="offcanvas offcanvas-end bg-secondary-tint"
    id="Cart" style="width: 350px">
    <div class="offcanvas-header border-2 border-bottom border-dark">
      <h5 class="offcanvas-title d-flex align-items-center">
        您的購物車<span class="badge rounded-pill text-bg-primary fs-8 ms-2"
        >{{ cartList.carts?.length }}</span></h5>
      <button type="button" class="btn p-0" data-bs-dismiss="offcanvas">
        <i class="bi bi-x-lg fs-5"></i>
      </button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <div v-if="!cartList.carts?.length" class="d-flex flex-column align-items-center">
        <i class="bi bi-emoji-frown text-primary" style="font-size: 80px;"></i>
        <p class="fs-4 fw-semibold text-primary">您的購物車沒任何商品</p>
      </div>
      <div v-else class="mb-5" style=" overflow-y: scroll;">
        <CanvasCard class="mb-2" v-for="cart in cartList.carts" :key="cart.id"
          :title="cart.product.title" :content="cart.product.content"
          :price="cart.product.price" :img_url="cart.product.imageUrl"
          :qty="cart.qty" :cart_id="cart.id" :product_id="cart.product_id">
        </CanvasCard>
      </div>
      <div>
        <div class="fs-5 fw-semibold d-flex justify-content-between mb-3">
          <span>總金額 :</span>
          <span class="text-danger">{{ `NT$ ${cartList.final_total}` }}</span>
        </div>
        <RouterLink to="/cart" class="btn btn-primary w-100" data-bs-dismiss="offcanvas"
          v-if="cartList.carts?.length"
          @click="router.push('/cart')">查看購物車
        </RouterLink>
        <button v-else type="button" class="btn btn-primary w-100" data-bs-dismiss="offcanvas"
          @click="router.push('/products')">來去選購
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useCartStore from '@/stores/cart';
// 引入 UI 組件
import CanvasCard from '@/components/CanvasCard.vue';

// 初始化路由
const router = useRouter();

// 取得購物車資料
const cartStore = useCartStore();
const { cartList } = storeToRefs(cartStore);
</script>

<style lang="scss" scoped>
</style>
