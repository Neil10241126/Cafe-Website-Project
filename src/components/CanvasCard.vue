<template>
  <div class="card flex-row" style="max-width: 540px; box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
    <img :src="img_url" class="object-fit-cover rounded-2"
      style="width: 90px;height: 110px;" alt="...">
    <div class="card-body d-flex flex-column h-auto py-1 pe-0">
      <div>
        <div class="d-flex justify-content-between align-items-center mb-1">
          <h5 class="card-title fs-7 fw-semibold mb-0">{{ title }}</h5>
          <button type="button" class="btn p-0"
            @click="delCartItem(cart_id)">
            <i class="bi bi-x-lg fs-7 d-flex" :class="{'d-none': !editor}"></i>
          </button>
        </div>
        <p class="card-text"><small class="text-body-secondary">{{ content }}</small></p>
      </div>
      <div class="mt-auto d-flex justify-content-between align-items-center">
        <p class="fs-7 fw-bold text-danger mb-0">NT$ {{ price }}</p>{{ qty }}
        <AddButtonUi v-if="editor === true" class="w-auto" size="small"
          :num="qty"></AddButtonUi>
        <p v-else class="fs-6 mb-0">{{ `X${qty}` }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// UI
import AddButtonUi from '@/components/AddButtonUi.vue';
// Pinia
import useCartStore from '@/stores/cartStore';

defineProps({
  // 初始值定義 https://cn.vuejs.org/guide/components/props#prop-validation
  editor: {
    type: Boolean, // 類型
    default() {
      return true; // 初始值
    },
  },
  title: String,
  cart_id: String,
  product_id: String,
  content: String,
  price: Number,
  img_url: String,
  qty: Number,
});

const cartStore = useCartStore();
const { delCartItem } = cartStore;

</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

.card {
  background-color: $secondary-tint;
  padding: 8px;
  border: none;
}
</style>
