<template>
  <AdView></AdView>
  <!-- 路由 Router -->
  <div class="container py-6">
    <ul class="nav justify-content-center align-items-center fs-8 mb-3">
      <li class="nav-item">
        <RouterLink
          to="/"
          class="nav-link link-gray-800 text-decoration-underline link-offset-1 px-2 py-0"
        >
          首頁
        </RouterLink>
      </li>
      <li>/</li>
      <li class="nav-item">
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">結帳</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">付款確認</h2>
      <i class="bi bi-credit-card fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 步驟執行 Step -->
  <div class="container d-flex justify-content-center">
    <ul
      class="list-unstyled d-flex border border-2 border-primary px-3 px-md-4 py-4 mb-0"
      style="border-style: dashed !important"
    >
      <!-- 步驟 1：確認商品 -->
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 1</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">確認商品</p>
      </li>
      <!-- 步驟 2：填寫訂單 -->
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4 mx-3 mx-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 2</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">填寫訂單</p>
      </li>
      <!-- 步驟 3：結帳付款 -->
      <li class="text-center bg-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-light mb-2">Step 3</p>
        <p class="fs-md-6 fw-seimbold text-light mb-0 text-nowrap">結帳付款</p>
      </li>
    </ul>
  </div>

  <!--  -->
  <div class="container py-8">
    <!-- Toggle Desktop 表格 -->
    <div class="row justify-content-center d-none d-md-flex mb-5">
      <div class="col-12 col-lg-8">
        <div
          class="p-5 bg-secondary-light rounded"
          style="box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)"
        >
          <table class="table align-middle table-primary text-center">
            <thead class="fs-6">
              <tr>
                <th>商品</th>
                <th>品項</th>
                <th>數量</th>
                <th>價格</th>
              </tr>
            </thead>
            <tbody>
              <!-- 循環顯示訂單中的產品 -->
              <tr v-for="item in order.products" :key="item.id">
                <td>
                  <img :src="item.product.imageUrl" class="mx-auto my-2" alt="" width="100" />
                </td>
                <td>
                  <p class="text-gray-800 mb-1">
                    {{ item.product.title }}
                  </p>
                  <span class="fs-8 text-gray-600">{{ item.product.content }}</span>
                </td>
                <td>
                  {{ `X${item.qty}` }}
                </td>
                <td class="fw-semibold">
                  {{ `NT$ ${item.total}` }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Toggle Mobile 列表 -->
    <div class="d-md-none mb-5">
      <CanvasCard
        class="mb-3"
        :editor="false"
        v-for="item in order.products"
        :key="item.id"
        :title="item.product.title"
        :price="item.total"
        :qty="item.qty"
        :img_url="item.product.imageUrl"
        :content="item.product.content"
      ></CanvasCard>
    </div>

    <!-- 客戶訊息 -->
    <div class="row justify-content-center gy-5">
      <div class="col-12 col-lg-4">
        <div class="input-wrap">
          <h3 class="fs-6 lh-base fw-bold text-gray-800 pb-4 mb-0">付款方式</h3>
          <div class="list-group flex-row">
            <!-- 信用卡付款選項 -->
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="payment"
                id="creditCard"
                value="信用卡"
                data-bs-toggle="list"
                href="#credit-list"
                v-model="type"
                v-bind="typeAttrs"
              />
              <label class="form-check-label fw-semibold" for="creditCard">信用卡</label>
            </div>
            <!-- 貨到付款選項 -->
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="payment"
                id="cost"
                value="貨到付款"
                data-bs-toggle="list"
                href="#cost-list"
                v-model="type"
                v-bind="typeAttrs"
              />
              <label class="form-check-label fw-semibold" for="cost">貨到付款</label>
            </div>
            <span class="fs-8 text-danger">{{ errors['payment.type'] }}</span>
          </div>
          <div class="tab-content">
            <!-- 信用卡付款表單 -->
            <div class="tab-pane mt-4" id="credit-list">
              <div class="mb-4">
                <label for="credit-name" class="form-label fw-semibold">
                  持卡人姓名
                  <span class="text-danger fs-6 align-bottom">⁎</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="credit-name"
                  placeholder="請輸入持卡本人姓名"
                  :class="{
                    'is-invalid': errors['payment.creditCard.name'],
                  }"
                  v-model="name"
                  v-bind="nameAttrs"
                />
                <span class="fs-8 text-danger">{{ errors['payment.creditCard.name'] }}</span>
              </div>
              <div class="mb-4">
                <label for="credit-number" class="form-label fw-semibold">
                  信用卡號碼
                  <span class="text-danger fs-6 align-bottom">⁎</span>
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="credit-number"
                  placeholder="請輸入卡片16位號碼"
                  :class="{
                    'is-invalid': errors['payment.creditCard.number'],
                  }"
                  v-model="number"
                  v-bind="numberAttrs"
                  @input="formatCreditCardNumber($event)"
                />
                <span class="fs-8 text-danger">{{ errors['payment.creditCard.number'] }}</span>
              </div>
              <div class="row gx-2 gx-md-4">
                <div class="col-4">
                  <label for="credit-month" class="form-label fw-semibold">
                    期限
                    <span class="text-danger fs-6 align-bottom">⁎</span>
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    id="credit-month"
                    placeholder="MM"
                    maxlength="2"
                    :class="{
                      'is-invalid': errors['payment.creditCard.month'],
                    }"
                    v-model="month"
                    v-bind="monthAttrs"
                  />
                  <span class="fs-8 text-danger">{{ errors['payment.creditCard.month'] }}</span>
                </div>
                <div class="col-4">
                  <label for="credit-month" class="form-label invisible">
                    <span class="text-danger fs-6 align-bottom">⁎</span>
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    id="credit-month"
                    placeholder="DD"
                    maxlength="2"
                    :class="{
                      'is-invalid': errors['payment.creditCard.day'],
                    }"
                    v-model="day"
                    v-bind="dayAttrs"
                  />
                  <span class="fs-8 text-danger">{{ errors['payment.creditCard.day'] }}</span>
                </div>
                <div class="col-4">
                  <label for="credit-cvv" class="form-label fw-semibold">
                    安全碼
                    <span class="text-danger fs-6 align-bottom">⁎</span>
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    id="credit-cvv"
                    placeholder="CVV"
                    maxlength="3"
                    :class="{
                      'is-invalid': errors['payment.creditCard.cvv'],
                    }"
                    v-model="cvv"
                    v-bind="cvvAttrs"
                  />
                  <span class="fs-8 text-danger">{{ errors['payment.creditCard.cvv'] }}</span>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="cost-list"></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="input-wrap">
          <!-- 顯示用戶信息 -->
          <ul class="list-unstyled mb-0">
            <li class="fs-6 text-gray-800 d-flex justify-content-between py-2">
              <span class="fw-semibold text-nowrap me-4">姓名</span>
              <span>{{ order.user?.name }}</span>
            </li>
            <li class="fs-6 text-gray-800 d-flex justify-content-between py-2">
              <span class="fw-semibold text-nowrap me-4">電話</span>
              <span>{{ order.user?.tel }}</span>
            </li>
            <li class="fs-6 text-gray-800 d-flex justify-content-between py-2">
              <span class="fw-semibold text-nowrap me-4">電子郵件</span>
              <span class="text-break text-end">{{ order.user?.email }}</span>
            </li>
            <li class="fs-6 text-gray-800 d-flex justify-content-between pt-2 pb-3">
              <span class="fw-semibold text-nowrap me-4">收件地址</span>
              <span class="text-end text-wrap">{{ order.user?.address }}</span>
            </li>
            <li
              class="fs-5 fw-bold text-gray-800 border-top border-2 border-dark d-flex justify-content-between pt-3 pb-4"
            >
              <span>總金額</span>
              <span class="text-danger">{{ `NT$ ${Round(order.total)}` }}</span>
            </li>
          </ul>
          <!-- 確認付款按鈕 -->
          <div v-if="meta.touched" class="mb-1">
            <span v-if="!meta.valid" class="text-danger">
              欄位未完成
              <i class="bi bi-exclamation-circle ms-!"></i>
            </span>
            <span v-else class="text-success">
              欄位已完成
              <i class="bi bi-check-circle ms-1"></i>
            </span>
          </div>
          <button type="button" class="btn btn-primary w-100" @click="onSubmit()">
            確認付款
            <i class="bi bi-chevron-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單驗證
import { useRoute, useRouter } from 'vue-router';
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useAlertStore from '@/stores/alert';
import useCartStore from '@/stores/cart';
// 引入 UI 組件
import AdView from '@/components/AdView.vue';
import CanvasCard from '@/components/CanvasCard.vue';
// 引入 Composables 方法
import useValidation from '@/composables/useValidation';
import useApi from '@/composables/useApi';

// 初始化路由、路由參數
const route = useRoute();
const router = useRouter();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 取得 cart Computed
const cartStore = useCartStore();
const { Round } = storeToRefs(cartStore);

// 取得 useApi 方法
const { fetchOrder, fetchCheckout } = useApi();

// 寫入訂單資料
const order = ref({});

// 取得訂單資訊 GET
function getOrders() {
  fetchOrder(route.params.orderId)
    .then((res) => {
      order.value = res.data.order;
    }) // 將訂單數據賦值給 order
    .catch((err) => apiErrAlert(err.response.data.message));
}

// 完成付款 POST
function checkout() {
  fetchCheckout(route.params.orderId)
    .then((res) => {
      apiResAlert(res.data.message); // 顯示成功消息
      router.push(`/checkout/${route.params.orderId}`); // 跳轉到結帳完成頁面
    })
    .catch((err) => apiErrAlert(err.response.data.message));
}

// 初始化取得訂單資料
onMounted(() => {
  getOrders();
});

// 取出 schema 驗證規則
const { paymentSchema } = useValidation();

// 使用 useForm 來處理表單驗證
const { handleSubmit, defineField, errors, meta } = useForm({
  validationSchema: paymentSchema,
});

// 定義表單欄位
const [type, typeAttrs] = defineField('payment.type');
const [name, nameAttrs] = defineField('payment.creditCard.name');
const [number, numberAttrs] = defineField('payment.creditCard.number');
const [month, monthAttrs] = defineField('payment.creditCard.month');
const [day, dayAttrs] = defineField('payment.creditCard.day');
const [cvv, cvvAttrs] = defineField('payment.creditCard.cvv');

const onSubmit = handleSubmit(() => {
  checkout();
});

// 格式化信用卡片輸入
function formatCreditCardNumber(e) {
  // 去除空白字串，並限制只能輸入數字
  let value = e.target.value.replace(/\D/g, '');
  // 避免用戶輸入超過 16 個字元
  if (value.length > 16) {
    value = value.slice(0, 16);
  }
  // 每 4 個數字後方加一個空白字元
  const formatValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
  e.target.value = formatValue; // 更新 HTML 輸入框數值
  number.value = formatValue; // 更新表單接受數值
}
</script>

<style lang="scss" scoped>
@import '/src/assets/helper/colors';

// 表格樣式
.table {
  --bs-table-bg: $secondary-tint;
}

// 輸入框樣式
.input-wrap {
  padding: 16px 24px;
  background-color: $secondary-light;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

// 表單選項樣式
.form-check-input {
  border: 1px solid $gray-800;
}
</style>
