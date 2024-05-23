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
    <div class="row">
      <!-- 導覽 -->
      <div class="col-lg-3 d-none d-lg-block">
        <BadgeUi content="商品細節 :" class="mb-5"></BadgeUi>
        <div class="list-group">
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
          d-flex justify-content-between
            active" data-bs-toggle="list" href="#allProducts"
            ><p class="trasition-x mb-0">全部商品</p><i class="bi bi-chevron-right"></i></a>
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
          d-flex justify-content-between"
             data-bs-toggle="list" href="#lightRoast"
            ><p class="trasition-x mb-0">淺烘焙</p><i class="bi bi-chevron-right"></i></a>
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
          d-flex justify-content-between"
             data-bs-toggle="list" href="#mediumRoast"
            ><p class="trasition-x mb-0">中烘焙</p><i class="bi bi-chevron-right"></i></a>
          <a class="list-group-item list-group-item-action fs-6 fw-semibold
          d-flex justify-content-between"
             data-bs-toggle="list" href="#darkRoast"
            ><p class="trasition-x mb-0">身烘焙</p><i class="bi bi-chevron-right"></i></a>
        </div>
      </div>
      <!-- 品項 -->
      <div class="col-12 col-lg-9">
        <!--  -->
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="d-flex align-items-center mb-4 mb-md-0">
            <button type="button" class="btn btn-outline-primary p-2 rounded-1 active">
              <i class="bi bi-grid-3x3-gap-fill fs-5 d-flex"></i></button>
            <button type="button" class="btn btn-outline-primary p-2 rounded-1 ms-3" disabled>
              <i class="bi bi-list-ul fs-5 d-flex"></i></button>
            <p class="text-gray-800 mb-0 ms-auto ms-md-3">總共  {{ 12 }}  各品項</p>
          </div>
          <div class="dropdown">
            <button type="button" class="btn btn-outline-primary dropdown-toggle d-flex w-100
              justify-content-between align-items-center" data-bs-toggle="dropdown"
              style="min-width: 220px;">{{ select }}</button>
            <ul class="dropdown-menu bg-secondary-tint border-primary w-100">
              <li><button type="button" class="dropdown-item disabled">排序項目</button></li>
              <li><button type="button" class="dropdown-item" @click="select='價格由高至低'"
                >價格由高至低</button></li>
              <li><button type="button" class="dropdown-item" @click="select='價格由低至高'"
                >價格由低至高</button></li>
            </ul>
          </div>
        </div>
        <!--  -->
        <div class="tab-content mb-6">
          <div class="tab-pane fade show active" id="allProducts">
            <div class="row row-cols-2 row-cols-md-3 gx-3  gy-4">
              <div class="col">
                <ProductCard :title="example.title" :origin="example.origin"
                  :acdity="example.acdity" :price="example.price"
                  :origin_price="example.origin_price" :img_url="example.img_url"
                  :card_details="example.card_details">
              </ProductCard>
              </div>
              <div class="col">
                <ProductCard :title="example.title" :origin="example.origin"
                  :acdity="example.acdity" :price="example.price"
                  :origin_price="example.origin_price" :img_url="example.img_url"
                  :card_details="example.card_details">
              </ProductCard>
              </div>
              <div class="col">
                <ProductCard :title="example.title" :origin="example.origin"
                  :acdity="example.acdity" :price="example.price"
                  :origin_price="example.origin_price" :img_url="example.img_url"
                  :card_details="example.card_details">
              </ProductCard>
              </div>
              <div class="col">
                <ProductCard :title="example.title" :origin="example.origin"
                  :acdity="example.acdity" :price="example.price"
                  :origin_price="example.origin_price" :img_url="example.img_url"
                  :card_details="example.card_details">
              </ProductCard>
              </div>
              <div class="col">
                <ProductCard :title="example.title" :origin="example.origin"
                  :acdity="example.acdity" :price="example.price"
                  :origin_price="example.origin_price" :img_url="example.img_url"
                  :card_details="example.card_details">
              </ProductCard>
              </div>
              <div class="col">
                <ProductCard :title="example.title" :origin="example.origin"
                  :acdity="example.acdity" :price="example.price"
                  :origin_price="example.origin_price" :img_url="example.img_url"
                  :card_details="example.card_details">
              </ProductCard>
              </div>
            </div>
          </div>

          <div class="tab-pane fade" id="lightRoast">2</div>
          <div class="tab-pane fade" id="mediumRoast">3</div>
          <div class="tab-pane fade" id="darkRoast">4</div>
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
import { ref, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core';
import AdView from '@/components/AdView.vue';
import BadgeUi from '@/components/badgeUi.vue';
import ProductCard from '@/components/ProductCard.vue';
import PaginationUi from '@/components/PaginationUi.vue';

const { width } = useWindowSize();
const select = ref('排序項目');

const example = ref({ // 假資料 : 串接後刪除
  title: '斯里蘭卡海鹽卡海鹽',
  origin: '斯里蘭卡',
  acdity: 3,
  price: 399,
  origin_price: 599,
  img_url: 'https://github.com/Neil10241126/Cafe-Website-Project-img/blob/main/img/products/light/Ethiopian-coffee-beans-1.jpg?raw=true',
  img_url_2: 'https://github.com/Neil10241126/Cafe-Website-Project-img/blob/main/img/products/light/Panama-Coffee-Beans-4.jpg?raw=true',
  img_url_3: 'https://github.com/Neil10241126/Cafe-Website-Project-img/blob/main/img/products/high/Colombian-coffee-bean-3.jpg?raw=true',
  card_details: true,
});

function changerCard() {
  if (width.value <= 992) {
    example.value.card_details = false;
  } else {
    example.value.card_details = true;
  }
}
watchEffect(() => {
  changerCard();
});

</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

.list-group-item {
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

.dropdown-item:hover {
  background: $primary;
  color: $light;
}
</style>
