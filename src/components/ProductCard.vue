<template>
  <div class="card border border-gray-400 rounded-3" style="max-width: 300px">
    <!-- 圖片 URL -->
    <img :src="img_url" class="card-img-top rounded-top-3" alt="Honduran-coffee-bean-2" />
    <!-- 收藏按鈕 -->
    <button type="button" class="favorite-btn btn border border-3 rounded-circle p-2 d-flex p-0">
      <i class="bi bi-suit-heart-fill link-light d-flex fs-8"></i>
    </button>

    <!-- 卡片主體 -->
    <div class="card-body bg-secondary-tint rounded-bottom-3 px-2 p-xxs-3">
      <!-- 標題 title -->
      <div class="d-flex justify-content-between mb-lg-2">
        <h5 class="fs-8 fs-xxs-6 fw-semibold mb-0 me-2" :class="{ 'mb-4': !card_details }">
          {{ title }}
        </h5>
        <RouterLink
          class="fs-6 text-gray-800 lh-21px lh-sm-30px"
          v-if="!card_details"
          :to="`/products/${product_id}`"
        >
          <i class="bi bi-box-arrow-in-up-right"></i>
        </RouterLink>
      </div>

      <!-- 細節 details -->
      <div v-if="card_details" class="mb-2">
        <div class="mb-1">
          <span class="fs-8 text-gray-600 me-2">產地 :</span>
          <span class="fs-8 text-gray-600">{{ origin }}</span>
        </div>
        <div class="mb-3">
          <span class="fs-8 text-gray-600 me-2">酸度 :</span>
          <span class="fs-8 text-gray-600">{{ `${acdity}分` }}</span>
        </div>
        <div class="d-flex align-items-center">
          <span class="fs-6 text-primary me-2">
            <strong>{{ `售價$ ${price}` }}</strong>
          </span>
          <span class="text-gray-600">
            <del>{{ `原價$ ${origin_price}` }}</del>
          </span>
        </div>
      </div>

      <!-- 功能操作 -->
      <div v-if="card_details" class="d-flex">
        <RouterLink :to="`/products/${product_id}`" class="btn btn-outline-primary border-2 w-100">
          查看更多
        </RouterLink>
        <button
          type="button"
          class="btn btn-primary ms-2"
          @click="addToCart(product_id, 1)"
          :disabled="loadingObj.isLoading"
        >
          <i class="bi bi-cart3" v-show="!loadingObj.isLoading"></i>
          <LoadingUi :name="'inline'" v-show="loadingObj.isLoading" />
        </button>
      </div>
      <button
        v-else
        type="button"
        class="btn btn-primary w-100 fs-8 fs-xxs-7"
        @click="addToCart(product_id, 1)"
      >
        加入購物車
        <i class="bi bi-cart3 ms-2 d-none d-xxs-inline"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useLoadingStore from '@/stores/loading';
// 引入 UI 組件
import useCartStore from '@/stores/cart';
import LoadingUi from '@/components/LoadingUi.vue';

defineProps({
  // 資料參數 value :
  title: String,
  origin: String,
  acdity: Number,
  price: Number,
  origin_price: Number,
  img_url: String,
  product_id: String,
  // 功能啟用 :
  card_details: Boolean, // 詳細 / 簡要 卡片樣式切換
});

// 取得 cart 方法
const cartStore = useCartStore();
const { addToCart } = cartStore;

// 取得 loading 資料
const loaderStore = useLoadingStore();
const { loadingObj } = storeToRefs(loaderStore);
</script>

<style lang="scss" scoped>
@import '/src/assets/helper/colors';

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    border-color: $warning !important;
    i {
      color: $warning !important;
    }
  }
}

@media (max-width: 430px) {
  .favorite-btn {
    top: 8px;
    right: 8px;
  }
}
</style>
