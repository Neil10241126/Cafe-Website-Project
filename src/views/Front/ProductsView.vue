<template>
  <AdView></AdView>
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
  <div class="container pb-8">
    <div class="row justify-content-center">
      <!-- 導覽 -->
      <div class="col-12 col-lg-3">
        <BadgeUi content="商品細節 :" class="mb-5 d-none d-lg-inline-block"></BadgeUi>

        <!-- Desktop 導覽 -->
        <div class="list-group d-none d-lg-block">
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
            d-flex justify-content-between" data-bs-toggle="list" href="#allProducts"
            :class="{'active': listOption === 'allProducts'}"
            @click="listOption = 'allProducts'"
            ><p class="trasition-x mb-0">全部商品</p><i class="bi bi-chevron-right"></i></a>
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
            d-flex justify-content-between" data-bs-toggle="list" href="#lightRoast"
            :class="{'active': listOption === 'lightRoast'}"
            @click="listOption = 'lightRoast'"
            ><p class="trasition-x mb-0">淺烘焙</p><i class="bi bi-chevron-right"></i></a>
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
            d-flex justify-content-between" data-bs-toggle="list" href="#mediumRoast"
            :class="{'active': listOption === 'mediumRoast'}"
            @click="listOption = 'mediumRoast'"
            ><p class="trasition-x mb-0">中烘焙</p><i class="bi bi-chevron-right"></i></a>
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
            d-flex justify-content-between" data-bs-toggle="list" href="#darkRoast"
            :class="{'active': listOption === 'darkRoast'}"
            @click="listOption = 'darkRoast'"
            ><p class="trasition-x mb-0">深烘焙</p><i class="bi bi-chevron-right"></i></a>
        </div>

        <!-- Mobile 導覽 -->
        <div class="list-group flex-row flex-wrap justify-content-center d-lg-none mb-5 mb-md-6">
          <a class="btn btn-outline-primary rounded-pill border-3 fw-bold py-1 px-3"
            data-bs-toggle="list" href="#allProducts"
            :class="{'active': listOption === 'allProducts'}"
            @click="listOption = 'allProducts'">全品項</a>
          <a class="btn btn-outline-primary rounded-pill border-3 fw-bold py-1 px-3"
            data-bs-toggle="list" href="#lightRoast"
            :class="{'active': listOption === 'lightRoast'}"
            @click="listOption = 'lightRoast'">淺烘焙</a>
          <a class="btn btn-outline-primary rounded-pill border-3 fw-bold py-1 px-3"
            data-bs-toggle="list" href="#mediumRoast"
            :class="{'active': listOption === 'mediumRoast'}"
            @click="listOption = 'mediumRoast'">中烘焙</a>
          <a class="btn btn-outline-primary rounded-pill border-3 fw-bold py-1 px-3"
            data-bs-toggle="list" href="#darkRoast"
            :class="{'active': listOption === 'darkRoast'}"
            @click="listOption = 'darkRoast'">深烘焙</a>
        </div>
        <!--  -->
      </div>
      <!-- 品項 -->
      <div class="col-12 col-lg-9">
        <!-- 篩選器 -->
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="d-flex align-items-center mb-4 mb-md-0">
            <button type="button" class="btn btn-outline-primary p-2 rounded-1 active">
              <i class="bi bi-grid-3x3-gap-fill fs-5 d-flex"></i></button>
            <button type="button" class="btn btn-outline-primary p-2 rounded-1 ms-3" disabled>
              <i class="bi bi-list-ul fs-5 d-flex"></i></button>
            <p class="text-gray-800 mb-0 ms-auto ms-md-3">總共  {{products.length }}  各品項</p>
          </div>
          <div class="dropdown">
            <button type="button" class="btn btn-outline-primary dropdown-toggle d-flex w-100
              justify-content-between align-items-center" data-bs-toggle="dropdown"
              style="min-width: 220px;">{{ select }}</button>
            <ul class="dropdown-menu bg-secondary-tint border-primary w-100">
              <li><button type="button" class="dropdown-item text-gray-600
              disabled">排序項目</button></li>
              <li><button type="button" class="dropdown-item" @click="select='價格由高至低',
                sort('sortByDescending')"
                >價格由高至低</button></li>
              <li><button type="button" class="dropdown-item" @click="select='價格由低至高',
                sort('sortByAscending')"
                >價格由低至高</button></li>
            </ul>
          </div>
        </div>
        <!-- 品項內容切換 -->
        <div class="tab-content mb-6">
          <div class="tab-pane fade show active" id="allProducts">
            <div class="row row-cols-2 row-cols-md-3 gx-3 gy-4">
              <div class="col" v-for="product in products" :key="product.id">
                <ProductCard :title="product.title" :origin="product.origin"
                  :acdity="product.acidity" :price="product.price"
                  :origin_price="product.origin_price" :img_url="product.imageUrl"
                  :product_id="product.id"
                  :card_details="width <= 992 ? false : true">
                </ProductCard>
              </div>
            </div>
          </div>
          <!-- 淺烘焙 -->
          <div class="tab-pane fade" id="lightRoast">
            <div class="row row-cols-2 row-cols-md-3 gx-3 gy-4">
              <div class="col" v-for="product in filter('淺烘焙')" :key="product.id">
                <ProductCard :title="product.title" :origin="product.origin"
                  :acdity="product.acidity" :price="product.price"
                  :origin_price="product.origin_price" :img_url="product.imageUrl"
                  :product_id="product.id"
                  :card_details="width <= 992 ? false : true">
                </ProductCard>
              </div>
            </div>
          </div>
          <!-- 中烘焙 -->
          <div class="tab-pane fade" id="mediumRoast">
            <div class="row row-cols-2 row-cols-md-3 gx-3 gy-4">
              <div class="col" v-for="product in filter('中烘焙')" :key="product.id">
                <ProductCard :title="product.title" :origin="product.origin"
                  :acdity="product.acidity" :price="product.price"
                  :origin_price="product.origin_price" :img_url="product.imageUrl"
                  :product_id="product.id"
                  :card_details="width <= 992 ? false : true">
                </ProductCard>
              </div>
            </div>
          </div>
          <!-- 深烘焙 -->
          <div class="tab-pane fade" id="darkRoast">
            <div class="row row-cols-2 row-cols-md-3 gx-3 gy-4">
              <div class="col" v-for="product in filter('深烘焙')" :key="product.id">
                <ProductCard :title="product.title" :origin="product.origin"
                  :acdity="product.acidity" :price="product.price"
                  :origin_price="product.origin_price" :img_url="product.imageUrl"
                  :product_id="product.id"
                  :card_details="width <= 992 ? false : true">
                </ProductCard>
              </div>
            </div>
          </div>
        </div>
        <!-- 分頁元件 -->
        <div class="d-flex justify-content-center justify-content-lg-end">
          <PaginationUi></PaginationUi>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useProductStore from '@/stores/product';
// 引入 UI 組件
import AdView from '@/components/AdView.vue';
import BadgeUi from '@/components/BadgeUi.vue';
import ProductCard from '@/components/ProductCard.vue';
import PaginationUi from '@/components/PaginationUi.vue';

const { width } = useWindowSize();

// 取得產品資料
const productStore = useProductStore();
const { products } = storeToRefs(productStore);
const { filter, sort } = productStore;

const select = ref('排序項目'); // 篩選器變數
const listOption = ref('allProducts'); // 導覽切換變數

</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

.list-group-item {  // 導覽選單樣式
  background-color: $secondary-tint;
  color: $primary;
  transition: all 0.5s;
  &.active {
    background-color: $primary;
    color: $secondary-tint;
  }
  &:first-child {
    border: 1px solid $primary;
  }
  & + .list-group-item {  // 相鄰選擇器
    border-right: 1px solid $primary;
    border-bottom: 1px solid $primary;
    border-left: 1px solid $primary;
  }
  .trasition-x {
    transition: transform 0.3s;
    transform: translateX(0); // 初始 transform 属性
  }
  &:hover {
    .trasition-x {
      transform: translateX(16px);
    }
  }
}

.dropdown-item{  // 下拉選單樣式
  color: $primary ;
  &:hover {
    background: $primary;
    color: $light;
  }
  &:active {
    color: $light;
  }
}
</style>
