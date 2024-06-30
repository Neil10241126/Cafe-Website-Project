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
        <RouterLink to="#" class="nav-link link-gray-800 px-2 py-0 disabled">關於我們</RouterLink>
      </li>
    </ul>
    <div class="d-flex justify-content-center align-items-center">
      <h2 class="fs-4 lh-sm fw-semibold text-gray-800 mb-0">關於我們</h2>
      <i class="bi bi-tag-fill fs-5 text-gray-800 ms-2"></i>
    </div>
  </div>

  <!-- 品牌故事 -->
  <div class="container">
    <h3
      class="fs-5 fs-xl-1 fw-bold text-primary border-5 border-bottom border-primary rounded-1 d-flex py-3"
    >
      品牌故事 Our Story
      <img src="/public/icons/coffee-bean.svg" class="d-xl-none ms-2" alt="" />
      <img src="/public/icons/coffee-bean.svg" class="d-none d-xl-block ms-2" alt="" width="48" />
    </h3>
    <div class="row row-cols-1 row-cols-lg-2 g-4 py-8">
      <div class="col">
        <img src="/public/images/about-img-1.webp" alt="about-img-1" />
      </div>
      <div class="col">
        <div>
          <h4 class="fs-6 fs-xl-3 lh-base lh-xl-sm fw-bold text-gray-800 mb-2 mb-xl-3">
            一場對品味的追求，精挑細選的價值
          </h4>
          <p class="fs-xl-4 lh-xl-sm fw-bold mb-5 mb-xl-6">
            <span class="text-primary">絕對品味的共享與傳承</span>
          </p>
          <p class="fs-xl-6 text-gray-800 mb-4 mb-xl-5">
            我們深信，品味是值得共享和傳承的。優質的咖啡文化需要不斷的傳承和發展。因此，
            彼恩斯積極參與咖啡文化的推廣和傳承工作。向更多人介紹優質的咖啡和咖啡文化，激發大眾對品味的興趣和熱情。
          </p>
          <p class="fs-xl-6 text-gray-800 mb-0">
            透過品味的共享和傳承，我們希望將優質的咖啡文化傳播給更多的人，
            讓更多的人能夠感受到品味所帶來的愉悅和滿足，這也是我們對品味最真摯的追求。
          </p>
        </div>
      </div>
    </div>
    <div class="row flex-column-reverse flex-lg-row row-cols-1 row-cols-lg-2 g-4 pb-8">
      <div class="col">
        <div>
          <h4 class="fs-6 fs-xl-3 lh-base lh-xl-sm fw-bold text-gray-800 mb-2 mb-xl-3">
            職人嚴格的把關確保品質
          </h4>
          <p class="fs-xl-4 lh-xl-sm fw-bold mb-5 mb-xl-6">
            <span class="text-primary">從豆到杯的完美追求</span>
          </p>
          <p class="fs-xl-6 text-gray-800 mb-4 mb-xl-5">
            在咖啡豆選擇的過程中，我們進行了多重的品質控制和品鑒，
            以確保每一批咖啡豆都符合我們的標準。從生豆的外觀和質地到烘焙後的風味表現，我們都對每一個細節進行嚴格的檢測和評估，以確保為顧客提供一流的品質。
          </p>
          <p class="fs-xl-6 text-gray-800 mb-0">
            我們的咖啡豆來自於世界各地的精心挑選。從南美的哥倫比亞到非洲的埃塞俄比亞，
            我們與咖啡種植者建立了密切的合作關係，只選擇最優質、最純淨的咖啡豆，以確保每一杯咖啡都能夠呈現出獨特而豐富的風味。
          </p>
        </div>
      </div>
      <div class="col">
        <img src="/public/images/about-img-2.webp" alt="about-img-2" />
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入 UI 組件
import AdView from '@/components/AdView.vue';
</script>

<style lang="scss" scoped></style>
