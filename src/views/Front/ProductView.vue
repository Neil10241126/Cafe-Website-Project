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
        <RouterLink to="/products" class="nav-link link-gray-800 text-decoration-underline
          link-offset-1 px-2 py-0">商品列表</RouterLink>
      </li>
      <li>/</li>
      <li class="nav-item">
        <RouterLink to="/products/lightRoast" class="nav-link link-gray-800
          text-decoration-underline link-offset-1 px-2 py-0">淺烘焙</RouterLink>
      </li>
      <li>/</li>
      <li class="nav-item">
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">斯里蘭卡海鹽</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">產品細節</h2>
      <i class="bi bi-bucket-fill fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 商品細節 -->
  <div class="container pb-8">
    <div class="card bg-transparent border-0">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <img src="/public/images/Honduran-coffee-bean-2.jpg"
            class="img-fluid" alt="...">
        </div>
        <div class="col-12 col-md-6">
          <div class="card-body p-0">
            <h3 class="card-title fs-6 fs-lg-3 lh-lg-sm fw-bold text-gray-800 lh-base border-bottom
              border-gray-800 border-2 pb-3 mb-0">斯里蘭卡海鹽</h3>
            <ul class="list-unstyled d-flex flex-wrap">
              <li class="d-flex align-items-center justify-content-between py-3 w-50">
                <BadgeUi content="類別 :"></BadgeUi>
                <div class="w-50">
                  <p class="fs-lg-6 text-gray-800 mb-0">淺烘焙</p>
                </div>
              </li>
              <li class="d-flex align-items-center justify-content-between py-3 w-50">
                <BadgeUi content="酸度 :"></BadgeUi>
                <div class="w-50">
                  <p class="fs-lg-6 text-gray-800 mb-0">3 分</p>
                </div>
              </li>
              <li class="d-flex align-items-center justify-content-between py-3 w-50">
                <BadgeUi content="規格 :"></BadgeUi>
                <div class="w-50">
                  <p class="fs-lg-6 text-gray-800 mb-0">0.5 磅 / 包</p>
                </div>
              </li>
              <li class="d-flex align-items-center justify-content-between py-3 w-50">
                <BadgeUi content="產地 :"></BadgeUi>
                <div class="w-50">
                  <p class="fs-lg-6 text-gray-800 mb-0">斯里蘭卡</p>
                </div>
              </li>
            </ul>
            <h5 class="fs-7 fs-lg-6 fw-bold text-danger lh-base mb-3">風味描述 :</h5>
            <p class="card-text mb-4"><small class="fs-lg-7 text-gray-800"
              >青澀微酸口感，較為順口，適合初次嘗試咖啡飲品者選購。</small></p>
            <h5 class="fs-7 fs-lg-6 fw-bold text-danger lh-base mb-3">整體風味 :</h5>
            <p class="card-text mb-6"><small class="fs-lg-7 text-gray-800"
              >焦糖、巧克力、榛果。</small></p>
            <div class="d-flex align-items-center">
              <h4 class="fs-3 fs-lg-1 lh-sm fw-bold text-danger lh-sm mb-4">NT$ 299</h4>
              <del class="fs-5 fs-lg-3 lh-sm fw-bold text-gray-800 lh-sm mb-4 ms-4">NT$ 599</del>
            </div>
            <div class="d-flex flex-column align-items-start">
              <AddButtonUi class="me-5 w-auto mb-4 d-none d-lg-flex" size="large"></AddButtonUi>
              <AddButtonUi class="me-5 w-auto mb-4 d-lg-none" size="normal"></AddButtonUi>
              <div class="d-flex w-100">
                <button type="button" class="btn btn-primary border-0 fs-lg-6 d-flex
                  justify-content-center align-items-center w-100">加入購物車
                  <i class="bi bi-cart3 fs-7 d-flex ms-2"></i>
                </button>
                <button type="button" class="btn text-primary p-0 ms-4">
                  <i class="bi bi-suit-heart d-flex fs-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 注意事項 -->
  <div class="container pb-8">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link border border-2 border-primary rounded-0 fs-lg-5 active"
          data-bs-toggle="list" href="#list-home">保鮮提醒
          <i class="bi bi-lightbulb ms-1"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link border border-2 border-primary rounded-0 fs-lg-5"
          data-bs-toggle="list" href="#list-profile">注意事項
          <i class="bi bi-exclamation-triangle-fill ms-1"></i></a>
      </li>
    </ul>
    <!--  -->
    <div class="tab-content border border-2 border-primary px-4 py-5" style="margin-top: -2px;">
      <div class="tab-pane fade show active" id="list-home">
        <div class="d-flex mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              style="min-height: 24px; min-width: 24px;"
              class="bi bi-check-circle text-success d-lg-none" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97
               11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
              style="min-height: 30px; min-width: 30px;"
              class="bi bi-check-circle text-success d-none d-lg-block" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97
               11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
          <p class="fs-lg-6 text-primary mb-0 ms-3">咖啡豆均屬新鮮烘培，為確保最佳風味，請於開封後1個月內使用完畢。</p>
        </div>
        <div class="d-flex mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              style="min-height: 24px; min-width: 24px;"
              class="bi bi-check-circle text-success d-lg-none" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97
               11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
              style="min-height: 30px; min-width: 30px;"
              class="bi bi-check-circle text-success d-none d-lg-block" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97
               11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
          <p class="fs-lg-6 text-primary mb-0 ms-3">未開封狀態下可保存12個月，若未使用完畢，則可能產生變質，則不建議繼續使用。</p>
        </div>
        <div class="d-flex mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
              style="min-height: 24px; min-width: 24px;"
              class="bi bi-check-circle text-success d-lg-none" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97
               11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
              style="min-height: 30px; min-width: 30px;"
              class="bi bi-check-circle text-success d-none d-lg-block" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97
               11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
          <p class="fs-lg-6 text-primary mb-0 ms-3">我們建議以真空罐或容器保存咖啡豆，也可使用密封袋代替，
            並保存至常溫陰涼處，避免存放至冰箱，以免溫差而產生濕氣使咖啡豆變質。</p>
        </div>
      </div>
      <div class="tab-pane fade" id="list-profile">
        <div class="mb-4">
          <h5 class="fs-7 fs-lg-6 fw-semibold text-danger mb-3">退換方式：</h5>
          <p class="fs-7 fs-lg-6 text-primary mb-0">若您對於收到的商品不符預期，請在收到貨後7天內與我們聯繫，我們將提供您退換貨服務。</p>
        </div>
        <div class="mb-4">
          <h5 class="fs-7 fs-lg-6 fw-semibold text-danger mb-3">配送時間：</h5>
          <p class="fs-7 fs-lg-6 text-primary mb-0">將於收到訂單1~2個工作天完成出貨，配送時間約3~5天，依照地區不同而定。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdView from '@/components/AdView.vue';
import BadgeUi from '@/components/BadgeUi.vue';
import AddButtonUi from '@/components/AddButtonUi.vue';
</script>

<style lang="scss" scoped>
</style>
