<template>
  <!-- 導覽列 -->
  <nav class="navbar navbar-expand-lg bg-gray-900 fixed-top py-3">
    <div class="container d-flex">
      <!-- 漢堡選單 -->
      <button
        class="navbar-toggler border-none p-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
      >
        <img src="/public/images/burger-menu.svg" alt="burger-menu" />
      </button>

      <!-- Logo -->
      <RouterLink class="navbar-brand mx-auto mx-lg-0" to="/">
        <img
          class="d-none d-lg-block w-100"
          src="/public/images/Beans-cafe-logo-light.png"
          width="200"
          height="50"
          alt="Beans Cafe 標誌"
        />
        <img
          class="d-lg-none w-100"
          src="/public/images/Beans-cafe-logo-sm.png"
          width="150"
          height="35"
          alt="Beans Cafe 標誌"
        />
      </RouterLink>

      <!-- Mobile: 購物車、使用者功能 -->
      <ul class="navbar-nav flex-row">
        <li class="d-none d-lg-block">
          <RouterLink
            to="/"
            class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
          >
            首頁
          </RouterLink>
        </li>
        <li class="d-none d-lg-block">
          <RouterLink
            to="/products"
            class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
          >
            全部商品
          </RouterLink>
        </li>
        <li class="d-none d-lg-block">
          <RouterLink
            to="/about"
            class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
          >
            關於我們
          </RouterLink>
        </li>
        <li class="d-none d-lg-block">
          <RouterLink
            to="/contact"
            class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
          >
            聯絡我們
          </RouterLink>
        </li>
        <li class="d-flex">
          <RouterLink
            to="#"
            class="nav-link link-warning text-light px-3 d-flex align-items-center"
            data-bs-toggle="offcanvas"
            data-bs-target="#Cart"
            ><i class="bi bi-cart3 d-flex fs-4 fs-lg-3 position-relative">
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-gray-900 fs-8 ms-1"
              >
                {{ cartList.carts?.length }}
              </span>
            </i>
          </RouterLink>
        </li>
        <li class="d-flex dropdown">
          <button
            type="button"
            id="userDropdownBtn"
            data-bs-toggle="dropdown"
            class="nav-link link-warning text-light ps-3 d-flex align-items-center"
          >
            <i class="bi bi-person-circle d-flex fs-4 fs-lg-3"></i>
          </button>
          <ul class="dropdown-menu dropdown-menu-end position-absolute bg-secondary-tint px-1">
            <li>
              <div class="py-1 px-3 d-flex">
                <i class="bi bi-person-circle me-2"></i>
                <span class="d-inline-block text-truncate" style="max-width: 80px">
                  {{ user.loginState ? user.userInfo.name : '尚未登入' }}
                </span>
              </div>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <RouterLink to="/setting" class="dropdown-item"
                ><i class="bi bi-gear me-2"></i>設定</RouterLink
              >
            </li>
            <li>
              <RouterLink to="#" class="dropdown-item d-none"
                ><i class="bi bi-bag-plus me-2"></i>確認訂單</RouterLink
              >
            </li>
            <li>
              <RouterLink to="#" class="dropdown-item d-none"
                ><i class="bi bi-suit-heart me-2"></i>收藏<span
                  class="badge text-bg-primary ms-2"
                  >{{ favorites.list.length }}</span
                ></RouterLink
              >
            </li>

            <li><hr class="dropdown-divider" /></li>
            <li>
              <RouterLink
                to="/signin/user"
                v-if="!user.loginState"
                class="dropdown-item"
                @click="user.isAdmin = false"
                ><i class="bi bi-box-arrow-in-right me-2"></i>登入</RouterLink
              >
              <a v-else class="dropdown-item" href="#" @click.prevent="signout()"
                ><i class="bi bi-box-arrow-in-left me-2"></i>登出</a
              >
            </li>
          </ul>
        </li>
      </ul>

      <!-- 導覽列表 -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav d-lg-none">
          <li>
            <RouterLink
              to="/"
              class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
            >
              首頁
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/products"
              class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
            >
              全部商品
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
            >
              關於我們
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="nav-link link-warning text-light fs-7 fs-lg-5 fw-bold py-3 px-lg-3"
            >
              聯絡我們
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Offcanvas 購物車 -->
  <div class="offcanvas offcanvas-end bg-secondary-tint" id="Cart" style="width: 350px">
    <div class="offcanvas-header border-2 border-bottom border-dark">
      <h5 class="offcanvas-title d-flex align-items-center">
        您的購物車
        <span class="badge rounded-pill text-bg-primary fs-8 ms-2">
          {{ cartList.carts?.length }}
        </span>
      </h5>
      <button type="button" class="btn p-0" data-bs-dismiss="offcanvas">
        <i class="bi bi-x-lg fs-5"></i>
      </button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <div v-if="!cartList.carts?.length" class="d-flex flex-column align-items-center">
        <i class="bi bi-emoji-frown text-primary" style="font-size: 80px"></i>
        <p class="fs-4 fw-semibold text-primary">您的購物車沒任何商品</p>
      </div>
      <div v-else class="mb-5" style="overflow-y: scroll">
        <CanvasCard
          class="mb-2"
          v-for="cart in cartList.carts"
          :key="cart.id"
          :title="cart.product.title"
          :content="cart.product.content"
          :price="cart.product.price"
          :img_url="cart.product.imageUrl"
          :qty="cart.qty"
          :cart_id="cart.id"
          :product_id="cart.product_id"
        ></CanvasCard>
      </div>
      <div>
        <div class="fs-5 fw-semibold d-flex justify-content-between mb-3">
          <span>總金額 :</span>
          <span class="text-danger">{{ `NT$ ${total}` }}</span>
        </div>
        <RouterLink
          to="/cart"
          class="btn btn-primary w-100"
          data-bs-dismiss="offcanvas"
          v-if="cartList.carts?.length"
          @click="router.push('/cart')"
        >
          查看購物車
        </RouterLink>
        <button
          v-else
          type="button"
          class="btn btn-primary w-100"
          data-bs-dismiss="offcanvas"
          @click="router.push('/products')"
        >
          來去選購
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
import useUserStore from '@/stores/user';
// 引入 UI 組件
import CanvasCard from '@/components/CanvasCard.vue';

// 初始化路由
const router = useRouter();

// 取得 cart 資料、Computed
const cartStore = useCartStore();
const { cartList, total } = storeToRefs(cartStore);

// 取得 user 資料、方法
const userStore = useUserStore();
const { user, favorites } = storeToRefs(userStore);
const { signout } = userStore;
</script>

<style lang="scss">
.navbar-expand-lg .navbar-collapse {
  @media (min-width: 992px) {
    display: none !important;
  }
}
</style>
