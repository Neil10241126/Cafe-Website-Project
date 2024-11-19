<template>
  <LoadingUi></LoadingUi>

  <div ref="dashboardBody" class="dashboard bg-db-background">
    <!-- 側邊導覽列 -->
    <aside class="sidebar d-flex flex-column position-fixed top-0 vh-100 px-3">
      <!-- 1. 標題 -->
      <div class="px-2 py-4 position-relative">
        <h1 class="fs-5 text-db-netural d-flex align-items-center mb-0">
          <svg width="36" height="36" class="text-db-primary me-2">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-logo"></use>
          </svg>
          彼恩斯咖啡
        </h1>

        <a
          ref="openSidebarBtn"
          href="#"
          class="rounded-circle bg-db-primary d-flex position-absolute d-xl-none"
          style="left: 252px; top: 30px"
          @click.prevent="closeSidebar()"
        >
          <svg width="24" height="24" class="text-db-background">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-left"></use>
          </svg>
        </a>
      </div>

      <!-- 2. 選單 -->
      <ul class="sidebar__list py-3 overflow-auto scrollbar">
        <li>
          <RouterLink to="/admin/home" class="sidebar__link">
            <svg width="24" height="24" class="sidebar__icon">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-chart-pie" />
            </svg>
            總攬分析
          </RouterLink>
        </li>
        <li>
          <a
            href="#products-list"
            class="sidebar__link"
            data-bs-toggle="collapse"
            :class="{ 'sidebar__link--down': productsController }"
            @click="productsController = !productsController"
          >
            <svg width="24" height="24" class="sidebar__icon">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-shop" />
            </svg>
            商品操作
            <svg width="24" height="24" class="animation-down ms-auto">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-right" />
            </svg>
          </a>
        </li>
        <li id="products-list" class="collapse">
          <ul class="sidebar__list">
            <li>
              <RouterLink to="/admin/products" class="sidebar__link">
                <svg width="24" height="24" class="sidebar__icon">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-dot" />
                </svg>
                商品列表
              </RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#orders-list"
            class="sidebar__link"
            data-bs-toggle="collapse"
            :class="{ 'sidebar__link--down': ordersController }"
            @click="ordersController = !ordersController"
          >
            <svg width="24" height="24" class="sidebar__icon">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-bag" />
            </svg>
            訂單操作
            <svg width="24" height="24" class="animation-down ms-auto">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-right" />
            </svg>
          </a>
        </li>
        <li id="orders-list" class="collapse">
          <ul class="sidebar__list">
            <li>
              <RouterLink to="/admin/orders" class="sidebar__link">
                <svg width="24" height="24" class="sidebar__icon">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-dot" />
                </svg>
                訂單列表
              </RouterLink>
            </li>
            <!-- <li>
              <RouterLink to="/admin/orders/" class="sidebar__link">
                <svg width="24" height="24" class="sidebar__icon">
                  <use xlink:href="/public/icons/dashboard-icons.svg#fig-dot" />
                </svg>
                訂單細節
              </RouterLink>
            </li> -->
          </ul>
        </li>
        <li>
          <RouterLink to="/admin/coupons" class="sidebar__link">
            <svg width="24" height="24" class="sidebar__icon">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-ticket" />
            </svg>
            優惠券列表
          </RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/admin/articles" class="sidebar__link">
            <svg width="24" height="24" class="sidebar__icon">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-note" />
            </svg>
            文章列表
          </RouterLink>
        </li> -->
      </ul>

      <!-- 3. 登出 -->
      <div class="d-flex flex-column mt-auto mb-3">
        <div
          class="footer-box d-none d-lg-flex flex-column align-items-center border border-2 border-db-background-light rounded-4 p-3"
          target="_blank"
        >
          <svg width="60" height="60" class="text-db-netural-dark mb-2">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-vue"></use>
          </svg>
          <p class="fs-8 text-db-netural-dark text-center">
            專案使用 <span>Vue.js</span> 開發，了解更多細節，歡迎前往我的 GitHub 帳號。
          </p>
          <a
            href="https://github.com/Neil10241126/Cafe-Website-Project"
            class="btn btn-outline-netural"
            >前往 GitHub Repo</a
          >
        </div>

        <div class="d-flex align-items-center rounded-3 ps-3 pe-2 py-2 mt-3">
          <div class="position-relative">
            <img
              src="/public/images/picture.png"
              class="rounded-circle"
              style="width: 45px; height: 45px"
            />
            <span
              class="position-absolute bg-chart-green border border-2 border-db-background-light rounded-circle"
              style="left: 33px; top: -3px; width: 16px; height: 16px"
            >
            </span>
          </div>
          <div class="mx-3 d-flex flex-column">
            <p class="fs-8 text-light mb-0">王曉明</p>
            <span class="fs-9 fw-medium text-db-netural-dark">管理者</span>
          </div>
          <button type="button" class="btn link-db-primary-dark ms-auto" @click="adminSignout()">
            <svg width="24" height="24" class="">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-logout" />
            </svg>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main -->
    <main class="main px-3 px-xl-4 pb-4">
      <!-- Main header -->
      <div class="main__header d-flex align-items-center py-3 py-lg-4 mb-3 mb-lg-4">
        <a href="#" ref="closeSidebarBtn" class="d-xl-none me-2" @click.prevent="openSiderbar()">
          <svg width="32" height="32" class="text-db-netural">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-menu"></use>
          </svg>
        </a>
        <div class="text-db-netural-dark d-flex align-items-center">
          <span class="fs-6 mb-0">後台介面</span>
          <svg width="24" height="24" class="mx-1">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-right"></use>
          </svg>
          <span class="fs-6 mb-0">{{ routeName }}</span>
        </div>
      </div>

      <RouterView></RouterView>
    </main>

    <!-- Footer 增加廣告內容: 包含一些連結項目 -->

    <!-- 至頂按鈕 -->
    <button id="scrollToTopBtn" class="btn btn-primary rounded-circle p-2">
      <svg width="24" height="24">
        <use xlink:href="/public/icons/dashboard-icons.svg#fig-arrow-up"></use>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// 引入 Pinia 狀態管理
import useUserStore from '../stores/user';

// 引入自定義組件
import LoadingUi from '../components/LoadingUi.vue';

// 初始化路由參數
const route = useRoute();

//
const userStore = useUserStore();
const { adminSignout } = userStore;

// 顯示 Main header 路由位置
const routeName = computed(() => {
  const routeList = {
    home: '總攬分析',
    products: '商品列表',
    orders: '訂單列表',
    order: '訂單細節',
    coupons: '優惠券列表',
    articles: '文章列表',
  };

  return routeList[route.name];
});

const dashboardBody = ref(null);
const closeSidebarBtn = ref(null);
const openSidebarBtn = ref(null);

const productsController = ref(false);
const ordersController = ref(false);

// open Siderbar
function openSiderbar() {
  dashboardBody.value.classList.add('sider-toggle');
}

// close Sidebar
function closeSidebar() {
  dashboardBody.value.classList.remove('sider-toggle');
}

onMounted(() => {
  // 滑動效果
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // 增加滑動一定距離再顯示元件

  // window.addEventListener('scroll', () => {
  //   if (window.pageYOffset > 300) {
  //     scrollToTopBtn.style.display = 'block';
  //   } else {
  //     scrollToTopBtn.style.display = 'none';
  //   }
  // });
});
</script>

<style lang="scss" scoped>
.scrollbar {
  height: 350px;
  &::-webkit-scrollbar {
    height: 2px;
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #a0a0a0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fcc55f;
  }
}

.footer-box {
  cursor: auto;
  &:hover {
    border-color: #2fe5a7 !important;
    svg {
      color: #2fe5a7 !important;
    }
    p {
      color: #f2f2f2 !important;
    }
    span {
      color: #2fe5a7 !important;
    }
    .btn {
      border-color: #2fe5a7 !important;
      color: #2fe5a7 !important;
      &:hover {
        background-color: #2fe5a7;
        color: #282828 !important;
      }
      &:active::before {
        border-color: #2fe5a7;
      }
    }
  }
}

#scrollToTopBtn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  &:focus::before {
    content: none;
  }
}
</style>
