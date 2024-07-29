<template>
  <!-- loading -->
  <LoadingUi></LoadingUi>

  <div class="layout d-flex">
    <!-- 側邊導覽 -->
    <aside class="bg-netural-800 vh-100" style="width: 250px">
      <!-- Logo -->
      <header class="mt-3 mb-4">
        <RouterLink to="/admin/products" class="d-flex align-items-center text-netural-100">
          <svg width="36" height="36" style="min-width: 60px">
            <use xlink:href="/public/icons/icons.svg#bootstrap" />
          </svg>
          <span class="fs-5"><strong>後台系統</strong></span>
        </RouterLink>
      </header>

      <!-- 導覽列 - 功能 -->
      <ul class="nav nav-pills flex-column vh-100">
        <li class="sider-nav-items">
          <RouterLink to="/admin/products" class="sider-nav-link nav-link">
            <svg width="24" height="24" style="min-width: 60px">
              <use xlink:href="/public/icons/icons.svg#bag-plus" />
            </svg>
            <span>商品列表</span>
          </RouterLink>
        </li>
        <li class="sider-nav-items">
          <RouterLink to="/admin/Orders" class="sider-nav-link nav-link"
            ><svg width="24" height="24" style="min-width: 60px">
              <use xlink:href="/public/icons/icons.svg#cart" />
            </svg>
            <span>訂單列表</span></RouterLink
          >
        </li>
        <li class="sider-nav-items">
          <RouterLink to="/admin/coupons" class="sider-nav-link nav-link"
            ><svg width="24" height="24" style="min-width: 60px">
              <use xlink:href="/public/icons/icons.svg#tickit" />
            </svg>
            <span>優惠券列表</span>
          </RouterLink>
        </li>
      </ul>
    </aside>

    <!-- 視圖區塊 -->
    <div class="flex-fill p-3">
      <nav class="d-flex align-items-center justify-content-between mb-3">
        <h3 class="fs-4 fw-semibold">產品列表</h3>
        <button type="button" class="btn btn-netural-600 rounded-0 py-1" @click="adminSignout()">
          登出
        </button>
      </nav>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
// 引入 Pinia 狀態管理
import useUserStore from '@/stores/user';
// 引入 UI 組件
import LoadingUi from '@/components/LoadingUi.vue';

//
const userStore = useUserStore();
const { adminSignout } = userStore;
</script>

<style lang="scss" scoped>
// sider 樣式
.sider-nav-items:not(:first-child) {
  margin-top: 10px;
}

.sider-nav-link {
  --bs-nav-link-color: var(--bs-netural-300);
  --bs-nav-link-hover-color: var(--bs-netural-100);
  --bs-nav-pills-link-active-color: var(--bs-netural-900);
  --bs-nav-pills-link-active-bg: var(--bs-warning);
  display: flex;
  align-items: center;
  padding: 10px 0;
  &:hover {
    background-color: var(--bs-netural-700);
  }
  &.active:hover {
    background-color: var(--bs-warning);
  }
}
</style>
