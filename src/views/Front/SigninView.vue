<template>
  <div class="py-8">
    <div class="container px-4">
      <div class="row justify-content-center bg-secondary-light rounded-4"
        style="box-shadow: 0 4px 4px rgba(95, 61, 45, 0.2),0 4px 4px rgba(95, 61, 45, 0.2);">
        <!-- 登入圖片 -->
        <div class="col-lg-5">
          <div class="d-none d-lg-block px-3 py-6">
            <img src="/public/images/Sign-logo.svg" class="img-fluid" alt="Sign-logo">
          </div>
        </div>
        <!-- 輸入內容 -->
        <div class="col-12 col-sm-8 col-lg-5">
          <div class="px-3 py-6">
            <div class="text-center mb-6">
              <img src="/public/images/Beans-cafe-logo-dark.svg" class="mx-auto mb-2"
                alt="logo-dark">
              <BadgeUi content="一般用戶" size="normal"></BadgeUi>
            </div>
            <div class="d-flex align-items-center mb-4">
              <label for="email" class="form-label me-3">
                <i class="bi bi-person-circle fs-3 text-gray-800"></i>
              </label>
              <input type="email" class="form-control" id="email" placeholder="請輸入您的帳號">
            </div>
            <div class="d-flex align-items-center mb-4">
              <label for="password" class="form-label me-3">
                <i class="bi bi-shield-lock fs-3 text-gray-800"></i>
              </label>
              <input type="password" class="form-control" id="password" placeholder="請輸入您的密碼">
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <RouterLink to="/" class="link-gray-600 text-decoration-underline
                link-offset-1">返回首頁</RouterLink>
              <div>
                <button type="button" class="btn btn-outline-primary">註冊</button>
                <button type="button" class="btn btn-primary ms-4">登入</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BadgeUi from '@/components/BadgeUi.vue';
</script>

<style lang="scss" scope>
</style>
