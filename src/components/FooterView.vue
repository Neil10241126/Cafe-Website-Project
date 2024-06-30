<template>
  <section class="bg-gray-900 py-6">
    <div class="container">
      <div class="row justify-content-between gy-5">
        <div class="col-12 col-lg-8">
          <div class="d-flex align-items-start align-items-lg-center">
            <img src="/public/icons/mail-open.svg" alt="mail-open" width="40" class="d-lg-none" />
            <img
              src="/public/icons/mail-open.svg"
              alt="mail-open"
              width="60"
              class="d-none d-lg-block"
            />
            <div class="ms-3 ms-lg-4">
              <p class="fs-lg-5 fw-bold text-light mb-1">現在就輸入 Email 來獲得最新優惠！</p>
              <p class="fs-8 fs-lg-7 text-light mb-0">
                訂閱我們的電子報，即可獲得專屬折扣碼！享受最新咖啡消息和限時優惠！
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="input-group">
            <input
              type="email"
              class="form-control bg-gray-100 fs-8 p-3 rounded-0"
              placeholder="請輸入你的 Email"
            />
            <button class="btn btn-warning fs-8 fw-bold rounded-0" type="button">立即訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-gray-800 py-7">
    <div class="container">
      <div class="row align-items-center gy-6">
        <div class="col-12 col-lg-4 order-lg-last">
          <div class="d-flex flex-column align-items-center">
            <h3 class="fs-4 fw-bold text-light mb-4">社群分享</h3>
            <ul class="icon-group d-flex list-unstyled">
              <li>
                <RouterLink to="#" class="icon">
                  <i class="bi bi-github fs-6 text-light d-flex"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="icon"
                  ><i class="bi bi-instagram fs-6 text-light d-flex"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="icon">
                  <i class="bi bi-twitter-x fs-6 text-light d-flex"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="#" class="icon">
                  <i class="bi bi-youtube fs-6 text-light d-flex"></i>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div
            class="d-flex flex-column align-items-center border-top border-bottom border-lg-0 py-5 py-lg-0"
          >
            <button type="button" class="btn btn-outline-light px-3 py-2 border-2 d-flex mb-4">
              後台登入
              <i class="bi bi-shield-lock fs-6 lh-24px ms-1"></i>
            </button>
            <ul class="list-group">
              <li class="list-group-item bg-transparent d-flex p-0 border-0">
                <a href="tel:+" class="link-warning text-light d-flex">
                  <i class="bi bi-telephone fs-5 lh-30px me-3"></i>
                  <p class="fs-6 mb-0">電話 : (+886) 123-456-789</p>
                </a>
              </li>
              <li class="list-group-item bg-transparent text-light d-flex p-0 border-0 mt-3">
                <i class="bi bi-geo-alt fs-5 lh-30px me-3"></i>
                <p class="fs-6 mb-0">地址 : 台北市萬里區長山路2130號</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="text-center">
            <RouterLink to="/">
              <h2 class="fs-3 fs-lg-2 fw-bold text-light mb-4">彼恩斯咖啡</h2>
            </RouterLink>
            <p class="fs-8 text-light">© Copyright 2023 本網站僅個人練習作品，非商業用途</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '/src/assets/helper/colors';

.icon-group :not(:first-child) {
  margin-left: 16px;
}

.icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid $light;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background: $warning;
  }
}
</style>
