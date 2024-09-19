<template>
  <!-- 水平卡片 -->
  <RouterLink v-if="!isPlaceholderLoaded" :to="`/products/${id}`">
    <div class="card border-0 mb-3">
      <div class="row gx-0">
        <!-- 圖片 -->
        <div class="col-4 col-xxs-3">
          <div class="img-cover rounded-start-2">
            <LazyloadImage
              class="h-100 rounded-start-2"
              :title="title"
              :image-url="imageUrl"
              @image-ready="updatePlaceholderStatus"
            ></LazyloadImage>
          </div>
        </div>
        <!-- 內容 -->
        <div class="col-8 col-xxs-9">
          <div class="card-body bg-secondary-tint rounded-end-2 h-100 py-2">
            <div class="row h-100">
              <div class="col-12 col-xxs-8">
                <h5 class="card-title fs-7 fs-md-5 fw-semibold mb-2 mb-xl-3" data-test="title">
                  {{ title }}
                </h5>
                <p
                  class="card-text fs-9 fs-md-7 text-gray-800 text-truncate-2 mb-2 mb-md-3"
                  data-test="description"
                >
                  {{ description }}
                </p>
                <div class="d-flex justify-content-between align-items-end">
                  <div>
                    <span class="fs-9 fs-md-8 text-primary d-block mb-1" data-test="origin"
                      >產地: {{ origin }}</span
                    >
                    <span class="fs-9 fs-md-8 text-primary d-block mb-0" data-test="acidity"
                      >酸度: {{ acidity }} 分</span
                    >
                  </div>
                  <div class="d-xxs-none">
                    <p class="fs-7 fw-semibold text-danger text-end mb-0" data-test="price">
                      NT$ {{ price }}
                    </p>
                    <del
                      v-if="IsDiscount"
                      class="fs-9 text-gray-600 text-end d-block mb-0"
                      data-test="originPrice"
                      >NT$ {{ origin_price }}</del
                    >
                  </div>
                </div>
              </div>
              <div class="d-none d-xxs-flex flex-column col-xxs-4">
                <div class="mb-auto">
                  <div class="d-flex justify-content-end">
                    <span
                      v-show="IsDiscount"
                      class="fs-9 fs-md-8 fw-semibold text-danger border border-danger px-2 rounded-1 opacity-75"
                      data-test="target"
                      >限時優惠</span
                    >
                  </div>
                  <p
                    class="fs-7 fs-md-5 fs-xxl-4 fw-semibold text-primary text-end mb-0"
                    :class="{ 'text-danger': IsDiscount }"
                  >
                    NT$ {{ price }}
                  </p>
                  <del v-if="IsDiscount" class="fs-8 fs-md-7 text-gray-600 text-end d-block mb-0"
                    >NT$ {{ origin_price }}
                  </del>
                </div>
                <div class="text-end">
                  <button
                    class="btn btn-sm btn-primary fs-9 fs-md-7 text-nowrap mb-1 mb-xl-2"
                    @click.prevent="addToCart(id, 1)"
                    :disabled="loadingObj.isLoading"
                    data-test="addButton"
                  >
                    <span v-if="!loadingObj.isLoading" data-test="span">加入購物車</span>
                    <LoadingUi :name="'inline'" v-show="loadingObj.isLoading"></LoadingUi>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>

  <!-- 佔位符卡片 -->
  <div v-else class="card mb-3">
    <!-- 圖片 -->
    <div class="row gx-0">
      <div class="col-4 col-xxs-3">
        <div class="img-cover rounded-start-2 placeholder bg-primary w-100 h-100">
          <LazyloadImage
            class="object-fit-cover w-100 h-100 opacity-0"
            :title="title"
            :image-url="imageUrl"
            @image-ready="updatePlaceholderStatus"
          ></LazyloadImage>
        </div>
      </div>

      <!-- 內容 -->
      <div class="col-8 col-xxs-9">
        <div class="card-body bg-secondary-tint rounded-end-2 h-100">
          <div class="row gx-1 h-100">
            <div class="col-9 col-md-10">
              <div class="placeholder-glow">
                <h5 class="placeholder bg-primary rounded-pill col-4"></h5>
              </div>
              <p class="fs-8 placeholder-glow mb-0">
                <span class="placeholder bg-primary rounded-pill col-8 mb-1"></span>
                <span class="placeholder bg-primary rounded-pill col-5"></span>
              </p>
              <p class="fs-8 placeholder-glow mb-0">
                <span class="placeholder bg-primary rounded-pill col-2"></span>
              </p>
            </div>
            <div class="col-3 col-md-2 d-flex flex-column">
              <div class="placeholder-glow mt-auto">
                <button class="btn bg-primary border-primary w-100 disabled placeholder"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useCartStore from '@/stores/cart';
import useLoadingStore from '@/stores/loading';
// 引入 UI 組件
import LoadingUi from '@/components/LoadingUi.vue';
import LazyloadImage from '@/components/LazyloadImage.vue';

// 取得 cart 方法
const cartStore = useCartStore();
const { addToCart } = cartStore;

// 取得 loading 資料
const loaderStore = useLoadingStore();
const { loadingObj } = storeToRefs(loaderStore);

const props = defineProps({
  // 資料參數 value :
  title: String,
  description: String,
  origin: String,
  acidity: Number,
  price: Number,
  origin_price: Number,
  imageUrl: String,
  id: String,
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
.fs-9 {
  font-size: 12px;
}

.card {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.img-cover {
  overflow: hidden;
  img {
    transition: all 0.4s;
  }
}

@media (max-width: 576px) {
  .img-cover {
    height: 130px;
  }
}

@media (min-width: 1400px) {
  .img-cover {
    height: 230px;
  }
}
</style>
