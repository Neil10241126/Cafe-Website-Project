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
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">填寫訂單</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">填寫個人資訊</h2>
      <i class="bi bi-file-text fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 步驟執行 Step -->
  <div class="container d-flex justify-content-center">
    <ul class="list-unstyled d-flex border border-2 border-primary px-3 px-md-4 py-4 mb-0"
      style="border-style: dashed !important;">
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 1</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">確認商品</p>
      </li>
      <li class="text-center bg-primary py-2 px-2 px-md-4 mx-3 mx-md-4">
        <p class="fs-md-6 fw-seimbold text-light mb-2">Step 2</p>
        <p class="fs-md-6 fw-seimbold text-light mb-0 text-nowrap">填寫訂單</p>
      </li>
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 3</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">結帳付款</p>
      </li>
    </ul>
  </div>

  <!-- 訂單填寫 -->
  <div class="container py-8">
    <div class="row gy-5 justify-content-center">
      <div class="col-12 col-lg-4">
        <form>

          <!-- 發票資訊 -->
          <div class="input-wrap mb-5">
            <h3 class="fs-6 lh-base fw-bold text-gray-800 pb-4 mb-0">發票資訊</h3>
            <div class="list-group flex-row">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="billInfo.type"
                 id="bill" value="個人發票" data-bs-toggle="list" href="#bills"
                v-model="type"
                v-bind="typeAttrs">
                <label class="form-check-label fw-semibold" for="bill">個人發票</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="billInfo.type"
                 id="bill-number" value="公司統編" data-bs-toggle="list" href="#numbers"
                 v-model="type"
                 v-bind="typeAttrs">
                <label class="form-check-label fw-semibold" for="bill-number">公司統編</label>
              </div>
              <span class="text-danger">{{ errors['user.billInfo.type'] }}</span>
            </div>
            <div class="tab-content">
              <div class="tab-pane" id="bills"></div>
              <div class="tab-pane mt-4" id="numbers">
                <div class="row">
                  <div class="col">
                    <label for="bill-name" class="form-label fw-semibold">發票抬頭
                      <span class="text-danger fs-6 align-bottom">⁎</span></label>
                    <input type="text" class="form-control" id="bill-name" placeholder="公司名稱"
                      v-model="billName"
                      v-bind="billNameAttrs">
                    <span class="text-danger">{{ errors['user.billInfo.billName'] }}</span>
                  </div>
                  <div class="col">
                    <label for="bill-number" class="form-label fw-semibold">統一編號
                      <span class="text-danger fs-6 align-bottom">⁎</span></label>
                    <input type="text" class="form-control" id="bill-number"
                      placeholder="統一編號為8位數字"
                      v-model="billNumber"
                      v-bind="billNumberAttrs">
                    <span class="text-danger">{{ errors['user.billInfo.billNumber'] }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 訂單資訊 -->
          <div class="input-wrap">
            <h3 class="fs-6 lh-base fw-bold text-gray-800 pb-4 mb-0">訂單資訊</h3>
            <div class="row gy-4">
              <div class="col-12">
                <label for="name" class="form-label fw-semibold">姓名
                  <span class="text-danger fs-6 align-bottom">⁎</span></label>
                <input type="text" class="form-control" id="name" placeholder="請輸入您的姓名"
                  v-model="name"
                  v-bind="nameAttrs">
                <span class="text-danger">{{ errors['user.name'] }}</span>
              </div>
              <div class="col-12">
                <label for="email" class="form-label fw-semibold">電子郵件
                  <span class="text-danger fs-6 align-bottom">⁎</span></label>
                <input type="email" class="form-control" id="email" placeholder="請輸入您的電子郵件"
                  v-model="email"
                  v-bind="emailAttrs">
                <span class="text-danger">{{ errors['user.email'] }}</span>
              </div>
              <div class="col-12">
                <label for="tel" class="form-label fw-semibold">連絡電話
                  <span class="text-danger fs-6 align-bottom">⁎</span></label>
                <input type="tel" class="form-control" id="tel" placeholder="請輸入您的連絡電話"
                  v-model="tel"
                  v-bind="telAttrs">
                <span class="text-danger">{{ errors['user.tel'] }}</span>
              </div>
              <div class="col-12">
                <label for="address" class="form-label fw-semibold">收件地址
                  <span class="text-danger fs-6 align-bottom">⁎</span></label>
                  <div class="row g-2">
                    <div class="col-4">
                      <input type="number" class="form-control" id="address" placeholder="郵遞區號"
                        v-model="postalCode"
                        v-bind="postalCodeAttrs">
                      <span class="text-danger">{{ errors['user.postalCode'] }}</span>
                    </div>
                    <div class="col-8">
                      <input type="text" class="form-control" id="address" placeholder="請輸入您的收件地址"
                        v-model="address"
                        v-bind="addressAttrs">
                      <span class="text-danger">{{ errors['user.address'] }}</span>
                    </div>
                  </div>
              </div>
              <div class="col-12">
                <label for="textarea" class="form-label fw-semibold">備註
                  <span class="fw-normal text-gray-600">(選填)</span>
                </label>
                <textarea class="form-control" id="textarea" rows="5"
                  placeholder="商品相關要求，是否需要磨豆等等 ~"
                  v-model="message"></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-12 col-lg-4">
        <div class="input-wrap mb-5">
          <h3 class="fs-6 lh-base fw-bold text-gray-800 border-bottom border-2
            border-gray-800 pb-4 mb-0">商品明細</h3>
          <ul class="list-unstyled">
            <li class="fw-semibold text-gray-800 border-bottom border-dark py-3"
              v-for="item in cartList.carts" :key="item.id">
              <div class="d-flex justify-content-between mb-1">
                <p class="mb-0">{{ item.product.title }}</p><p class="mb-0">{{ `X${item.qty}` }}</p>
              </div>
              <p class="mb-0">{{ `NT$ ${item.product.price} / ${item.product.unit}` }}</p>
            </li>
          </ul>
        </div>

        <div class="input-wrap">
          <ul class="list-unstyled mb-0">
            <li class="fs-6 fw-semibold text-gray-800 d-flex justify-content-between py-2">
              <span>品項</span><span>{{ `${cartList.carts?.length} 項` }}</span></li>
            <li class="fs-6 fw-semibold text-gray-800 d-flex justify-content-between py-2">
              <span>小計</span><span>{{ `NT$ ${cartList.final_total }` }}</span></li>
            <li class="fs-6 fw-semibold text-gray-800 d-flex justify-content-between py-2">
              <span>折扣</span><span>{{ `NT$ ${cartList.final_total - cartList.total }` }}</span></li>
            <li class="fs-6 fw-semibold text-gray-800 d-flex justify-content-between pt-2 pb-3">
              <span>運費</span><span>NT$ 60</span></li>
            <li class="fs-5 fw-bold text-gray-800 border-top border-2 border-dark
              d-flex justify-content-between pt-3 pb-4">
              <span>總金額</span>
              <span class="text-danger">{{ `NT$ ${cartList.final_total }` }}</span></li>
          </ul>
          <button type="button" class="btn btn-primary w-100"
            @click="onSubmit()"
            >下一步<i class="bi bi-chevron-right ms-1"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單驗證
import { toTypedSchema } from '@vee-validate/yup'; // 引入 toTypedSchema 定義驗證規則
// 引入 Pinia 狀態管理
import { storeToRefs } from 'pinia';
import useCartStore from '@/stores/cart';
import useOrderStore from '@/stores/order';
// 引入 UI 組件
import AdView from '@/components/AdView.vue';

// 取得購物車資料
const cartStore = useCartStore();
const { cartList } = storeToRefs(cartStore);

// 取得訂單資料
const orderStore = useOrderStore();
const { submitOrder } = orderStore;

// 引入 yup 驗證庫
const yup = inject('$yup');

// 電話驗證
yup.addMethod(yup.string, 'isPhone', function isPhone() {
  return this.matches(/^(09)[0-9]{8}$/, {
    message: '電話號碼格式不正確',
  });
});

// 定義表單驗證規則
const schema = toTypedSchema(
  yup.object({
    // 訂單資訊
    user: yup.object({
      // 發票資訊
      billInfo: yup.object({
        type: yup.string().required('必填!'),
        billName: yup.string().required().when('type', {
          is: '公司統編',
          then: () => yup.string().required('必填!'),
          // 當 type 不為 '公司統編' 時，billName 內容強制輸出 undefined
          otherwise: () => yup.string().transform(() => undefined).notRequired(),
        }),
        billNumber: yup.string().required().when('type', {
          is: '公司統編',
          then: () => yup.string().required('必填!').matches(/^\d{8}$/, '統一編號需為8位數字!'),
          // 當 type 不為 '公司統編' 時，billNumber 內容強制輸出 undefined
          otherwise: () => yup.string().transform(() => undefined).notRequired(),
        }),
      }),
      name: yup.string().required('必填!'),
      email: yup.string().required('必填!').email('電子郵件格式不正確'),
      tel: yup.string().required('必填!').isPhone(),
      postalCode: yup.string().required('必填!').min(3, '需三位數').max(3, '需三位數'),
      address: yup.string().required('必填!'),
    }),
    message: yup.string().default(''),
  }),
);

// 使用 useForm 來處理表單驗證
const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
});

// 定義表單欄位
const [type, typeAttrs] = defineField('user.billInfo.type');
const [billName, billNameAttrs] = defineField('user.billInfo.billName');
const [billNumber, billNumberAttrs] = defineField('user.billInfo.billNumber');
const [name, nameAttrs] = defineField('user.name');
const [email, emailAttrs] = defineField('user.email');
const [tel, telAttrs] = defineField('user.tel');
const [postalCode, postalCodeAttrs] = defineField('user.postalCode');
const [address, addressAttrs] = defineField('user.address');
const [message] = defineField('message');

// 表單提交處理函數
const onSubmit = handleSubmit((values, { resetForm }) => {
  submitOrder(values);

  // 送出表單後清除內容。
  resetForm();
});
</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

.input-wrap {
  padding: 16px 24px;
  background-color: $secondary-light;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.form-check-input {
  border: 1px solid $gray-800;
}
</style>
