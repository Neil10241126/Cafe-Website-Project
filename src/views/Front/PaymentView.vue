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
    <ul class="list-unstyled d-flex border border-2 border-primary px-3 px-md-4 py-4 mb-0"
      style="border-style: dashed !important;">
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 1</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">確認商品</p>
      </li>
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4 mx-3 mx-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 2</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">填寫訂單</p>
      </li>
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
        <div class="p-5 bg-secondary-light rounded"
          style="box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
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
              <tr>
                <td><img src="/public/images/Honduran-coffee-bean-2.jpg" class="mx-auto my-2"
                   alt="Header-banner-lg" width="100"></td>
                <td>
                  <p class="text-gray-800 mb-1">斯里蘭卡海鹽</p>
                  <span class="fs-8 text-gray-600">焦糖、巧克力、榛果。</span></td>
                <td>X2</td>
                <td class="fw-semibold">NT$ 399</td>
              </tr>
              <tr>
                <td><img src="/public/images/Panama-Coffee-Beans-2.jpg" class="mx-auto my-2"
                   alt="Header-banner-lg" width="100"></td>
                <td>
                  <p class="text-gray-800 mb-1">古巴經典烘焙</p>
                  <span class="fs-8 text-gray-600">古巴經典烘焙</span></td>
                <td>X2</td>
                <td class="fw-semibold">NT$ 798</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Toggle Mobile 列表 -->
    <div class="d-md-none mb-5">
      <CanvasCard class="mb-3" :editor="false"></CanvasCard>
      <CanvasCard class="mb-3" :editor="false"></CanvasCard>
      <CanvasCard class="mb-3" :editor="false"></CanvasCard>
    </div>
    <!-- 客戶訊息 -->
    <div class="row justify-content-center gy-5">
      <div class="col-12 col-lg-4">
        <div class="input-wrap">
          <h3 class="fs-6 lh-base fw-bold text-gray-800 pb-4 mb-0">付款方式</h3>
          <div class="list-group flex-row">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="payment"
               id="creditCard" value="option1" data-bs-toggle="list" href="#credit-list">
              <label class="form-check-label fw-semibold" for="creditCard">信用卡</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="payment"
               id="cost" value="option2" data-bs-toggle="list" href="#cost-list">
              <label class="form-check-label fw-semibold" for="cost">貨到付款</label>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane mt-4" id="credit-list">
              <div class="mb-4">
                <label for="credit-name" class="form-label fw-semibold">持卡人姓名
                  <span class="text-danger fs-6 align-bottom">⁎</span></label>
                <input type="text" class="form-control" id="credit-name" placeholder="請輸入持卡本人姓名">
              </div>
              <div class="mb-4">
                <label for="credit-number" class="form-label fw-semibold">信用卡號碼
                  <span class="text-danger fs-6 align-bottom">⁎</span></label>
                <input type="number" class="form-control" id="credit-number" placeholder="請輸入卡片號碼">
              </div>
              <div class="row gx-2 gx-md-4">
                <div class="col-4">
                  <label for="credit-month" class="form-label fw-semibold">期限
                    <span class="text-danger fs-6 align-bottom">⁎</span></label>
                    <input type="number" class="form-control" id="credit-month" placeholder="MM">
                </div>
                <div class="col-4 d-flex">
                    <input type="number" class="form-control mt-auto" id="credit-month"
                      placeholder="MM">
                </div>
                <div class="col-4">
                  <label for="credit-cvv" class="form-label fw-semibold">安全碼
                    <span class="text-danger fs-6 align-bottom">⁎</span></label>
                  <input type="number" class="form-control" id="credit-cvv" placeholder="CVV">
                </div>
              </div>
            </div>
            <div class="tab-pane" id="cost-list"></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="input-wrap">
          <ul class="list-unstyled mb-0">
            <li class="fs-6 text-gray-800 d-flex justify-content-between py-2">
              <sapn class="fw-semibold text-nowrap me-4">姓名</sapn><sapn>王大明</sapn></li>
            <li class="fs-6 text-gray-800 d-flex justify-content-between py-2">
              <sapn class="fw-semibold text-nowrap me-4">電話</sapn><sapn>0912345678</sapn></li>
            <li class="fs-6 text-gray-800 d-flex justify-content-between py-2">
              <sapn class="fw-semibold text-nowrap me-4">電子郵件</sapn>
              <p class="text-break text-end">test@gmail.com</p></li>
            <li class="fs-6 text-gray-800 d-flex justify-content-between pt-2 pb-3">
              <sapn class="fw-semibold text-nowrap me-4">收件地址</sapn>
              <sapn class="text-end text-wrap">台北市萬華區中山路1220號</sapn></li>
            <li class="fs-5 fw-bold text-gray-800 border-top border-2 border-dark
              d-flex justify-content-between pt-3 pb-4">
              <span>總金額</span><span class="text-danger">NTD $ 860</span></li>
          </ul>
          <button type="button" class="btn btn-primary w-100">
            確認付款<i class="bi bi-chevron-right ms-1"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdView from '@/components/AdView.vue';
import CanvasCard from '@/components/CanvasCard.vue';

</script>

<style lang="scss" scope>
@import "/src/assets/helper/colors";

.input-wrap {
  padding: 16px 24px;
  background-color: $secondary-light;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.form-check-input {
  border: 1px solid $gray-800;
  background-color: transparent;
}
</style>
