<template>
  <!-- 網格卡片 -->
  <div
    v-if="!isPlaceholderLoaded"
    class="card border border-gray-400 rounded-3"
    style="max-width: 300px"
  >
    <!-- 圖片 URL -->
    <div class="img-cover overflow-hidden rounded-top-3">
      <LazyloadImage
        :image-url="img_url"
        :title="title"
        @image-ready="updatePlaceholderStatus"
      ></LazyloadImage>
    </div>
    <!-- 收藏按鈕 -->
    <a
      href="#"
      class="favorite-btn border border-3 rounded-circle p-2 d-flex p-0"
      @click.prevent="toggleFavorite(props.product_id)"
      :class="{ 'border-warning': IsFavorite }"
    >
      <i
        class="bi bi-suit-heart-fill link-light d-flex fs-8"
        :class="{ 'text-warning': IsFavorite }"
      ></i>
    </a>

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
          <span class="fs-6 text-primary fw-bold me-2" :class="{ 'text-danger': IsDiscount }">
            {{ IsDiscount ? `特價$ ${price}` : `售價$ ${price}` }}
          </span>
          <span v-if="IsDiscount" class="text-gray-600">
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

  <!-- 佔位符卡片 -->
  <div v-else class="card" style="max-width: 300px">
    <!-- 圖片 -->
    <div class="card-img-top placeholder bg-primary">
      <LazyloadImage
        class="opacity-0"
        :title="title"
        :image-url="img_url"
        @image-ready="updatePlaceholderStatus"
      ></LazyloadImage>
    </div>

    <!-- 內容 -->
    <div class="card-body bg-secondary-tint rounded-bottom-3">
      <div class="placeholder-glow">
        <h5 class="placeholder bg-primary rounded-pill col-4"></h5>
      </div>
      <p class="fs-8 placeholder-glow d-none d-lg-block">
        <span class="placeholder bg-primary rounded-pill col-8"></span>
        <span class="placeholder bg-primary rounded-pill col-5"></span>
      </p>
      <!-- 按鈕 -->
      <div class="row gx-2 placeholder-glow">
        <div class="col-12 col-lg-8">
          <button class="btn bg-primary border-primary w-100 disabled placeholder"></button>
        </div>
        <div class="col-lg-4 d-none d-lg-block">
          <button class="btn bg-primary border-primary w-100 disabled placeholder"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useLoadingStore from '@/stores/loading';
import useUserStore from '@/stores/user';
import useCartStore from '@/stores/cart';
// 引入 UI 組件
import LoadingUi from '@/components/LoadingUi.vue';
import LazyloadImage from '@/components/LazyloadImage.vue';

const props = defineProps({
  // 資料參數 value :
  title: String,
  origin: String,
  acdity: Number,
  price: Number,
  origin_price: Number,
  img_url: String,
  product_id: String,
  // 功能啟用 :
  card_details: Boolean, // 詳細 : 簡要 卡片樣式切換
});

// 取得 cart 方法
const cartStore = useCartStore();
const { addToCart } = cartStore;

// 取得 loading 資料
const loaderStore = useLoadingStore();
const { loadingObj } = storeToRefs(loaderStore);

// 取得 user 方法
const userStore = useUserStore();
const { favorites } = storeToRefs(userStore);
const { toggleFavorite } = userStore;

// 計算商品是否收藏
const IsFavorite = computed(() => {
  const retult = favorites.value.list.some((item) => item.id === props.product_id);
  return retult;
});

// 計算是否特價
const IsDiscount = computed(() => props.price < props.origin_price);

// 佔位符載入狀態
const isPlaceholderLoaded = ref(true);

// 更新佔位符狀態
const updatePlaceholderStatus = (status) => {
  isPlaceholderLoaded.value = !status;
};
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

.img-cover img {
  transition: all 0.4s;
}

.card:hover {
  img {
    transform: scale(1.1);
  }
}
</style>
