<template>
  <!-- Banner -->
  <section class="banner d-flex align-items-center position-relative
    bg-size-cover bg-position-center bg-repeat-none">
    <!-- 遮色片 25% -->
    <div class="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-25"></div>
    <div class="container position-relative">
      <div class=" text-center">
        <p class="fs-8 fs-md-5 fs-lg-2 fw-bold text-gray-300 mb-1 mb-lg-3">品嘗獨特風味，發掘咖啡世界的美味</p>
        <h2 class="fs-6 fs-md-4 fs-lg-1 fw-bold text-light mb-4 mb-lg-6">尋找你的完美咖啡口味，享受限時折扣！</h2>
        <!-- <button type="button" class="btn btn-warning fs-md-6 px-md-4 py-md-2"
        >立刻選購</button> -->
        <RouterLink to="/products" class="btn btn-warning fs-md-6 px-md-4">立刻選購</RouterLink>
      </div>
    </div>
  </section>

  <!-- Products List -->
  <section class="py-8">
    <div class="container">
      <div class="text-center mb-5 mb-md-6">
        <p class="fs-8 fs-md-4 fw-bold text-primary mb-1 mb-md-2">按您的口味挑選</p>
        <h2 class="fs-6 fs-md-2 fw-bold text-primary mb-0">我們的咖啡豆產品</h2>
      </div>

      <!-- 列表控制器 List group : lightRoast、mediumRoast、darkRoast -->
      <div class="list-group flex-row justify-content-center mb-5 mb-md-6">
        <a class="btn btn-outline-primary rounded-pill
          border-3 fs-md-4 fw-bold py-1 py-md-2 px-3 px-md-5 active"
          data-bs-toggle="list" href="#list-lightRoast">淺烘焙</a>
        <a class="btn btn-outline-primary rounded-pill
          border-3 fs-md-4 fw-bold py-1 py-md-2 px-3 px-md-5 mx-3 mx-md-6"
          data-bs-toggle="list" href="#list-mediumRoast">中烘焙</a>
        <a class="btn btn-outline-primary rounded-pill
          border-3 fs-md-4 fw-bold py-1 py-md-2 px-3 px-md-5"
          data-bs-toggle="list" href="#list-darkRoast">深烘焙</a>
      </div>

      <!-- Tab panes & Swiper 輪播  -->
      <div class="tab-content">
        <!-- 淺烘焙 lightRoast -->
        <div class="tab-pane fade show active" id="list-lightRoast">
          <swiper-container class="mb-5 mb-md-6"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              0: { slidesPerView: 2, spaceBetween: 12, },
              768: { slidesPerView: 3, spaceBetween: 16, },
              992: { slidesPerView: 4, spaceBetween: 20, }
            }">
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
          </swiper-container>
        </div>
         <!-- 中烘焙 mediumRoast -->
        <div class="tab-pane fade" id="list-mediumRoast">
          <swiper-container class="mb-5 mb-md-6"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              0: { slidesPerView: 2, spaceBetween: 12, },
              768: { slidesPerView: 3, spaceBetween: 16, },
              992: { slidesPerView: 4, spaceBetween: 20, }
            }">
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_2" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_2" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_2" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_2" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_2" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_2" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
          </swiper-container>
        </div>
         <!-- 深烘焙 darkRoast -->
        <div class="tab-pane fade" id="list-darkRoast">
          <swiper-container class="mb-5 mb-md-6"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :breakpoints="{
              0: { slidesPerView: 2, spaceBetween: 12, },
              768: { slidesPerView: 3, spaceBetween: 16, },
              992: { slidesPerView: 4, spaceBetween: 20, }
            }">
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_3" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_3" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_3" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_3" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_3" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
            <swiper-slide>
              <ProductCard :title="example.title" :origin="example.origin" :acdity="example.acdity"
                :price="example.price" :origin_price="example.origin_price"
                :img_url="example.img_url_3" :card_details="example.card_details">
              </ProductCard>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <RouterLink to="/products" class="btn btn-outline-primary border-2">更多商品</RouterLink>
      </div>

    </div>
  </section>

  <!-- Service -->
  <section class="bg-size-cover bg-position-center bg-repeat-none position-relative"
    style="background-image: url(/public/images/Service-img.webp)">
    <!-- 遮色片 25% -->
    <div class="position-absolute top-0 start-0 end-0 bottom-0 bg-dark opacity-25"></div>

    <div class="position-relative">
      <!-- 計數器列表 -->
      <div class="container text-center py-8">
        <div class="mb-5 mb-md-6">
          <p class="fs-8 fs-md-4 fw-bold text-gray-300 mb-1 mb-md-2">為何選擇我們</p>
          <h2 class="fs-6 fs-md-2 fw-bold text-light mb-0">為您打造優質品質與一站式服務</h2>
        </div>
        <div class="row row-cols-2 row-cols-xl-4 gy-4">
          <div class="col">
            <div class="border border-3 py-3 rounded-3">
              <CounterUp endVal="23500" class="ff-black-ops fs-4 fs-md-1 text-warning lh-sm"
              ></CounterUp>
              <p class="fs-8 fs-md-6 text-light mb-0">每月服務顧客</p>
            </div>
          </div>
          <div class="col">
            <div class="border border-3 py-3 rounded-3">
              <CounterUp endVal="216" class="ff-black-ops fs-4 fs-md-1 text-warning lh-sm">
              </CounterUp>
              <p class="fs-8 fs-md-6 text-light mb-0">信賴相關認證</p>
            </div>
          </div>
          <div class="col">
            <div class="border border-3 py-3 rounded-3">
              <CounterUp endVal="425" class="ff-black-ops fs-4 fs-md-1 text-warning lh-sm">
              </CounterUp>
              <p class="fs-8 fs-md-6 text-light mb-0">全台據點</p>
            </div>
          </div>
          <div class="col">
            <div class="border border-3 py-3 rounded-3">
              <CounterUp endVal="149" class="ff-black-ops fs-4 fs-md-1 text-warning lh-sm">
              </CounterUp>
              <p class="fs-8 fs-md-6 text-light mb-0">咖啡產品</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 服務列表 -->
      <div class="bg-gray-900 py-3 py-md-6">
        <div class="container d-flex justify-content-between overflow-auto">
          <div class="d-flex align-items-start" style="max-width: 400px">
            <div class="d-md-none bg-light rounded-circle d-flex p-2" style="width: 40px;
            height: 40px;">
              <img src="/public/icons/service-coffee-beans.svg" alt="service-coffee-beans">
            </div>
            <div class="d-none bg-light rounded-circle d-md-flex p-2" style="width: 60px;
            height: 60px;">
              <img src="/public/icons/service-coffee-beans.svg" alt="service-coffee-beans">
            </div>
            <div class="ms-3 text-nowrap">
              <h3 class="fs-6 fs-md-5 fw-bold text-light mb-1">提供多樣的咖啡豆</h3>
              <p class="fs-8 fs-md-7 text-light mb-0">我們擁有各種口味的咖啡豆，讓你盡情挑選！</p>
            </div>
          </div>
          <div class="d-flex align-items-start mx-6" style="max-width: 400px">
            <div class="d-md-none bg-light rounded-circle d-flex p-2" style="width: 40px;
            height: 40px;">
              <img src="/public/icons/service-car.svg" alt="service-car">
            </div>
            <div class="d-none bg-light rounded-circle d-md-flex p-2" style="width: 60px;
            height: 60px;">
              <img src="/public/icons/service-car.svg" alt="service-car">
            </div>
            <div class="ms-3 text-nowrap">
              <h3 class="fs-6 fs-md-5 fw-bold text-light mb-1">快速發貨</h3>
              <p class="fs-8 fs-md-7 text-light mb-0">我們提供迅速的發貨服務，讓你不再等待！</p>
            </div>
          </div>
          <div class="d-flex align-items-start" style="max-width: 400px">
            <div class="d-md-none bg-light rounded-circle d-flex p-2" style="width: 40px;
            height: 40px;">
              <img src="/public/icons/service-credit-card.svg" alt="service-credit-card">
            </div>
            <div class="d-none bg-light rounded-circle d-md-flex p-2" style="width: 60px;
            height: 60px;">
              <img src="/public/icons/service-credit-card.svg" alt="service-credit-card">
            </div>
            <div class="ms-3 text-nowrap">
              <h3 class="fs-6 fs-md-5 fw-bold text-light mb-1">線上消費</h3>
              <p class="fs-8 fs-md-7 text-light mb-0">在家輕鬆下單，輕鬆享受美味咖啡的便利！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Comment -->
  <section class="py-8">
    <div class="container">
      <div class="text-center mb-5 mb-md-6">
        <p class="fs-8 fs-md-4 fw-bold text-primary mb-1 mb-md-2">顧客評價</p>
        <h2 class="fs-6 fs-md-2 fw-bold text-primary mb-0">來自咖啡愛好者的真實反饋</h2>
      </div>
      <swiper-container
        :pagination="{ enabled: true, clickable: true, }"
        :autoplay="{ delay: 2500, disableOnInteraction: false, }"
        :breakpoints="{
          0: { slidesPerView: 1, spaceBetween: 12, },
          768: { slidesPerView: 2, spaceBetween: 18, },
          992: { slidesPerView: 3, spaceBetween: 24, },
        }">
        <swiper-slide class="h-auto">
          <div class="d-flex h-100">
            <div class="comment-card rounded-3 bg-gray-100 d-flex p-3 mb-1
             mx-auto" style="max-width: 375px;">
              <div class="me-3">
                <img src="/public/images/person-1.png" alt="" style="min-width: 60px;">
              </div>
              <div>
                <h5 class="fs-6 fw-bold text-gray-800 mb-2">Leo</h5>
                <p class="text-gray-800 mb-0 text-truncate-3">
                  從未想過在網上購買咖啡豆會這麼方便！他們的客戶服務非常周到，
                  讓我感到很受尊重。強烈推薦大家他們家的咖啡豆！</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <div class="d-flex h-100">
            <div class="comment-card rounded-3 bg-gray-100 d-flex p-3 mb-1
             mx-auto" style="max-width: 375px;">
              <div class="me-3">
                <img src="/public/images/person-2.png" alt="" style="min-width: 60px;">
              </div>
              <div>
                <h5 class="fs-6 fw-bold text-gray-800 mb-2">Amber Shire</h5>
                <p class="text-gray-800 mb-0 text-truncate-3">
                  我是一個對咖啡非常挑剔的人，而且快速發貨服務讓我驚艷不已。下次我一定會再次光顧！</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <div class="d-flex h-100">
            <div class="comment-card rounded-3 bg-gray-100 d-flex p-3 mb-1
             mx-auto" style="max-width: 375px;">
              <div class="me-3">
                <img src="/public/images/person-3.png" alt="" style="min-width: 60px;">
              </div>
              <div>
                <h5 class="fs-6 fw-bold text-gray-800 mb-2">Hank Jons</h5>
                <p class="text-gray-800 mb-0 text-truncate-3">
                  這家網站給了我完美的選擇！他們的咖啡豆質量非常優秀。</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <div class="d-flex h-100">
            <div class="comment-card rounded-3 bg-gray-100 d-flex p-3 mb-1
             mx-auto" style="max-width: 375px;">
              <div class="me-3">
                <img src="/public/images/person-4.png" alt="" style="min-width: 60px;">
              </div>
              <div>
                <h5 class="fs-6 fw-bold text-gray-800 mb-2">Lucy</h5>
                <p class="text-gray-800 mb-0 text-truncate-3">
                  我很喜歡他們的咖啡豆跟一些售後服務，我會繼續支持!</p>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="h-auto">
          <div class="d-flex h-100">
            <div class="comment-card rounded-3 bg-gray-100 d-flex p-3 mb-1
             mx-auto" style="max-width: 375px;">
              <div class="me-3">
                <img src="/public/images/person-5.png" alt="" style="min-width: 60px;">
              </div>
              <div>
                <h5 class="fs-6 fw-bold text-gray-800 mb-2">Frank Wang</h5>
                <p class="text-gray-800 mb-0 text-truncate-3">
                  斯里蘭卡海鹽的香氣很棒，推薦給剛入門不知道如何選擇的人，也不會太酸。</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useWindowSize } from '@vueuse/core';
import CounterUp from '@/components/CounterUp.vue';
import ProductCard from '@/components/ProductCard.vue';

const { width } = useWindowSize();

const example = ref({ // 假資料 : 串接後刪除
  title: '斯里蘭卡海鹽卡海鹽',
  origin: '斯里蘭卡',
  acdity: 3,
  price: 399,
  origin_price: 599,
  img_url: 'https://github.com/Neil10241126/Cafe-Website-Project-img/blob/main/img/products/light/Ethiopian-coffee-beans-1.jpg?raw=true',
  img_url_2: 'https://github.com/Neil10241126/Cafe-Website-Project-img/blob/main/img/products/light/Panama-Coffee-Beans-4.jpg?raw=true',
  img_url_3: 'https://github.com/Neil10241126/Cafe-Website-Project-img/blob/main/img/products/high/Colombian-coffee-bean-3.jpg?raw=true',
  card_details: true,
});

function changerCard() {
  if (width.value <= 992) {
    example.value.card_details = false;
  } else {
    example.value.card_details = true;
  }
}
watchEffect(() => {
  changerCard();
});

</script>

<style lang="scss" scoped>
// Banner
.banner {
  height: 800px;
  background-image: url("/public/images/Header-banner-lg.webp");
}

@media (max-width: 768px) {
  .banner {
    background-image: url("/public/images/Header-banner-sm.webp");
    height: 330px;
  }
}

// Comment
.comment-card {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
