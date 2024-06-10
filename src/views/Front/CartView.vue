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
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">購物車</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">購物車確認</h2>
      <i class="bi bi-cart3 fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 步驟執行 Step -->
  <div class="container d-flex justify-content-center">
    <ul class="list-unstyled d-flex border border-2 border-primary px-3 px-md-4 py-4 mb-0"
      style="border-style: dashed !important;">
      <li class="text-center bg-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-light mb-2">Step 1</p>
        <p class="fs-md-6 fw-seimbold text-light mb-0 text-nowrap">確認商品</p>
      </li>
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4 mx-3 mx-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 2</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">填寫訂單</p>
      </li>
      <li class="text-center border border-2 border-primary py-2 px-2 px-md-4">
        <p class="fs-md-6 fw-seimbold text-primary mb-2">Step 3</p>
        <p class="fs-md-6 fw-seimbold text-primary mb-0 text-nowrap">結帳付款</p>
      </li>
    </ul>
  </div>

  <!-- 表格內容 -->
  <div class="container py-8">
    <!-- Toggle Desktop 表格 -->
    <div class="row mb-5 d-none d-md-block">
      <div class="col-12 col-lg-8 mx-auto">
        <div class="p-5 bg-secondary-light rounded"
          style="box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);">
          <table class="table align-middle table-primary text-center">
            <thead class="fs-6">
              <tr>
                <th>商品</th>
                <th>品項</th>
                <th>數量</th>
                <th>價格</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="/public/images/Honduran-coffee-bean-2.jpg" class="mx-auto"
                   alt="Header-banner-lg" width="100"></td>
                <td>斯里蘭卡海鹽</td>
                <td><AddButtonUi class="d-flex justify-content-center"
                   size="small"></AddButtonUi></td>
                <td class="fw-semibold">NT$ 399</td>
                <td><button type="button" class="btn p-0"><i class="bi bi-x-lg"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Toggle Mobile 列表 -->
    <div class="d-md-none mb-5">
      <CanvasCard class="mb-3"></CanvasCard>
    </div>
    <!-- 計算金額 -->
    <div class="row justify-content-end justify-content-lg-center mb-3">
      <div class="col-lg-4"></div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="input-group mb-3">
          <input type="text" class="form-control border border-2
            border-gray-800" placeholder="輸入折扣代碼">
          <button class="btn btn-gray-800 px-4" type="button">啟用</button>
        </div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between bg-transparent border-0 px-0">
            <span>小計</span><span>NT$ 999</span></li>
          <li class="list-group-item d-flex justify-content-between bg-transparent border-0 px-0">
            <span>折扣</span><span>NTD $ 199</span></li>
          <li class="list-group-item d-flex justify-content-between bg-transparent border-0 px-0">
            <span>運費</span><span>NTD$ 60</span></li>
          <li class="list-group-item bg-transparent border-0 px-0 pt-0">
            <span class="fs-8 text-danger">還差 $ 39 元免運費</span></li>
          <li class="list-group-item d-flex justify-content-between bg-transparent border-0
            border-top border-dark px-0 py-3">
            <span class="fs-6 fw-semibold">總金額</span>
            <span class="fs-6 fw-semibold text-danger">NTD $ 860</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn">
            <i class="bi bi-chevron-left me-1"></i>上一部</button>
          <button type="button" class="btn btn-primary">
            下一步<i class="bi bi-chevron-right ms-1"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdView from '@/components/AdView.vue';
import AddButtonUi from '@/components/AddButtonUi.vue';
import CanvasCard from '@/components/CanvasCard.vue';
</script>

<style lang="scss" scope>
@import "/src/assets/helper/colors";

.table {
  --bs-table-bg: $secondary-tint;
}

.bi-x-lg:hover {
  color: $danger;
}
</style>
