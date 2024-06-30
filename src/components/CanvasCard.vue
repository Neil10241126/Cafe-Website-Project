<template>
  <div class="card flex-row custom-card">
    <img :src="img_url" class="object-fit-cover rounded-2" alt="..." />
    <div class="card-body d-flex flex-column h-auto py-1 pe-0">
      <div>
        <div class="d-flex justify-content-between align-items-center mb-1">
          <h5 class="card-title fs-7 fw-semibold mb-0">
            {{ title }}
          </h5>
          <button type="button" class="btn p-0" @click="delCartItem(cart_id)">
            <i class="bi bi-x-lg fs-7 d-flex" :class="{ 'd-none': !editor }"></i>
          </button>
        </div>
        <p class="card-text">
          <small class="text-body-secondary">{{ content }}</small>
        </p>
      </div>
      <div class="mt-auto d-flex justify-content-between align-items-center">
        <p class="fs-7 fw-bold text-danger mb-0">NT$ {{ price }}</p>
        <template v-if="editor">
          <AddButtonUi class="w-auto" size="small" v-model:qtyModel.number="qtyValue"></AddButtonUi>
        </template>
        <template v-else>
          <p class="fs-6 mb-0">{{ `X${qty}` }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
// 引入 Pinia 狀態管理
import useCartStore from '@/stores/cart';
// 引入 UI 組件
import AddButtonUi from '@/components/AddButtonUi.vue';

// 定義傳入的屬性
const props = defineProps({
  editor: {
    type: Boolean,
    default: true,
  },
  title: String,
  cart_id: String,
  content: String,
  price: Number,
  img_url: String,
  qty: Number,
});

// 取得購物車資料
const cartStore = useCartStore();
const { delCartItem, changeNum } = cartStore;

// 初始化數量值
const qtyValue = ref(props.qty);

// 監聽 qtyValue 的變化並同步更新購物車數量
watch(qtyValue, (newValue) => {
  changeNum(props.cart_id, newValue);
});
</script>

<style lang="scss" scoped>
@import '/src/assets/helper/colors';

.custom-card {
  max-width: 540px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: $secondary-tint;
  padding: 8px;
  border: none;
  img {
    width: 90px;
    height: 110px;
  }
}

.bi-x-lg:hover {
  color: $danger;
}
</style>
