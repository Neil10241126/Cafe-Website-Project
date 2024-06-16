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
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">聯絡我們</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">聯絡我們</h2>
      <i class="bi bi-chat-text-fill fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 聯絡我們 -->
  <div class="container pb-8">
    <div class="row row-cols-1 row-cols-lg-2 flex-column-reverse flex-lg-row g-5">
      <div class="col">
        <form class="px-lg-3">
          <div class="mb-4">
            <label for="name" class="form-label">您的姓名<span class="text-danger fs-6
              align-bottom">⁎</span></label>
            <input type="text" class="form-control" id="name" placeholder="請輸入您的姓名">
          </div>
          <div class="mb-4">
            <label for="email" class="form-label">電子郵件<span class="text-danger fs-6
              align-bottom">⁎</span></label>
            <input type="email" class="form-control" id="email" placeholder="test@coffeemail">
          </div>
          <div class="mb-4">
            <label for="tel" class="form-label">連絡電話<span class="text-danger fs-6
              align-bottom">⁎</span></label>
            <input type="tel" class="form-control" id="tel" placeholder="請輸入您的連絡電話">
          </div>
          <div class="mb-4">
            <label for="textarea" class="form-label">訊息</label>
            <textarea class="form-control" id="textarea" rows="5"
              placeholder="請輸入您想告訴我們的訊息"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">送出內容</button>
        </form>
      </div>
      <div class="col">
        <h3 class="fs-5 fw-semibold text-gray-800 lh-base mb-4 px-lg-3">彼恩斯咖啡</h3>
        <ul class="list-unstyled px-lg-3 mb-6">
          <li class="d-flex align-items-center mb-4">
            <BadgeUi content="地址 :" :size="width < 576 ? 'small' : 'normal'"></BadgeUi>
            <p class="text-gray-800 mb-0 ms-2">台北市萬里區長山路2130號</p>
          </li>
          <li class="d-flex align-items-center mb-4">
            <BadgeUi content="電話 :" :size="width < 576 ? 'small' : 'normal'"></BadgeUi>
            <p class="text-gray-800 mb-0 ms-2">+(886) 0912-345-678</p>
          </li>
          <li class="d-flex align-items-center mb-4">
            <BadgeUi content="信箱 :" :size="width < 576 ? 'small' : 'normal'"></BadgeUi>
            <p class="text-gray-800 mb-0 ms-2">BeansCoffee@gmail.com.tw</p>
          </li>
          <li class="d-flex align-items-center">
            <BadgeUi content="營業時間 :" :size="width < 576 ? 'small' : 'normal'"></BadgeUi>
            <p class="text-gray-800 mb-0 ms-2">10:00 — 19:00  (週六店休)</p>
          </li>
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.6912091677023!2d121.50139339359627!3d25.021098027374258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9b1907a9407%3A0x36d410a52e5787b6!2zMTA45Y-w5YyX5biC6JCs6I-v5Y2A!5e0!3m2!1szh-TW!2stw!4v1716819149124!5m2!1szh-TW!2stw"
          width="600" height="350" style="border:0; width: 100%;"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';
// 引入 UI 組件
import AdView from '@/components/AdView.vue';
import BadgeUi from '@/components/BadgeUi.vue';

const { width } = useWindowSize();
</script>

<style lang="scss" scoped>
</style>
