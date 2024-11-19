<template>
  <!-- 讀取效果元件 -->
  <LoadingUi></LoadingUi>

  <!-- 圖表 -->
  <div class="row gy-3 mb-3 mb-md-4">
    <!-- 長條圖 Card -->
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">每日銷售</h3>
            <span class="text-db-netural-dark">可以分析銷售數量或金額。</span>
          </div>

          <a href="#" class="h-100" data-bs-toggle="dropdown" @click.prevent="">
            <svg width="24" height="24" class="text-db-netural-dark">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-dots-vertical"></use>
            </svg>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </a>
        </div>
        <div class="card-body px-md-4">
          <div ref="barElement" class="" style="height: 245px"></div>
        </div>
      </div>
    </div>

    <!-- 圓餅圖 Card -->
    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">商品占比</h3>
            <span class="text-db-netural-dark">淺烘焙 31.5% 最高</span>
          </div>

          <a href="#" class="h-100" data-bs-toggle="dropdown" @click.prevent="">
            <svg width="24" height="24" class="text-db-netural-dark">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-dots-vertical"></use>
            </svg>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </a>
        </div>
        <div class="card-body px-md-4">
          <div ref="pieElement" style="height: 245px"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 商品列表 Card -->
  <div class="card">
    <div class="card-header d-flex justify-content-between px-md-4">
      <div>
        <h3 class="fs-6 text-db-netural lh-base mb-0">全部商品</h3>
        <span class="text-db-netural-dark">總計 {{ productCount }} 筆品項</span>
      </div>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-netural me-2">
          <svg width="20" height="20">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-filter"></use>
          </svg>
          <span class="d-none d-md-block ms-2">篩選</span>
        </button>
        <button type="button" class="btn btn-primary" @click="openModal('new')">
          <svg width="20" height="20">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-plus"></use>
          </svg>
          <span class="d-none d-md-block ms-2">新增商品</span>
        </button>
      </div>
    </div>

    <!-- 商品清單 Table -->
    <div class="card-body table-responsive px-md-4">
      <table class="table table-db-background-light">
        <thead class="align-middle text-nowrap">
          <tr>
            <th scope="col" class="fw-normal py-3 pe-3">項次</th>
            <th scope="col" class="fw-normal pe-3">商品名稱</th>
            <th scope="col" class="fw-normal pe-3">類別</th>
            <th scope="col" class="fw-normal pe-3">原價</th>
            <th scope="col" class="fw-normal pe-3">售價</th>
            <th scope="col" class="fw-normal text-end pe-3">是否啟用</th>
            <th scope="col" class="fw-normal text-end pe-0">操作</th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          <tr v-for="(product, index) in productData" :key="product.id">
            <td scope="row" class="pt-3 pe-3 border-0">{{ (index += 1) }}</td>
            <td class="pt-3 pe-3 border-0">
              <div class="d-flex align-items-center" style="width: 200px">
                <img
                  :src="product.imageUrl"
                  class="border border-db-netural-dark rounded-2"
                  width="40"
                  height="40"
                  style="height: 40px; width: 40px"
                />
                <p class="mb-0 ms-2 text-truncate">{{ product.title }}</p>
              </div>
            </td>
            <td class="pt-3 pe-3 border-0">{{ product.category }}</td>
            <td class="pt-3 pe-3 border-0">NT$ {{ product.origin_price }}</td>
            <td class="pt-3 pe-3 border-0">NT$ {{ product.price }}</td>
            <td class="pt-3 pe-3 border-0 text-end">
              <span class="tag tag-success" :class="{ 'tag-danger': !product.is_enabled }">{{
                product.is_enabled ? '已啟用' : '未啟用'
              }}</span>
            </td>
            <td class="pt-3 pe-0 border-0">
              <div class="d-flex justify-content-end">
                <button class="btn btn-primary me-1" @click="openModal('edit', product)">
                  <svg width="14" height="14" class="me-1">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                  </svg>
                  <span class="fs-9">編輯</span>
                </button>
                <button class="btn btn-danger" @click="openModal('del', product)">
                  <svg width="14" height="14" class="me-1">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-trash"></use>
                  </svg>
                  <span class="fs-9">刪除</span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="card-footer bg-transparent border-top-0 px-md-4 d-flex justify-content-end">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              :class="{ disabled: !pagination.has_pre }"
              href="#"
              aria-label="Previous"
              @click.prevent="getAdminProducts(pagination.current_page - 1)"
            >
              <svg width="16" height="16">
                <use xlink:href="/public/icons/dashboard-icons.svg#fig-left"></use>
              </svg>
            </a>
          </li>
          <li class="page-item" v-for="page in pagination.total_pages" :key="page + '123'">
            <a
              class="page-link"
              :class="[
                { active: page === pagination.current_page },
                { disabled: page === pagination.current_page },
              ]"
              href="#"
              @click.prevent="getAdminProducts(page)"
              >{{ page }}</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              :class="{ disabled: !pagination.has_next }"
              href="#"
              aria-label="Next"
              @click.prevent="getAdminProducts(pagination.current_page + 1)"
            >
              <svg width="16" height="16">
                <use xlink:href="/public/icons/dashboard-icons.svg#fig-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- 商品 Modal -->
  <div ref="productModalEl" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-db-background-lighten">
          <h5 class="modal-title fs-6 fw-normal">
            {{ isNew ? '新增商品' : '編輯商品' }}
          </h5>
          <button
            type="button"
            class="btn link-db-netural-dark p-1"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <svg width="24" height="24">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-x"></use>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <!-- 導覽 -->
          <div class="list-group mb-4" id="list-tab" role="tablist">
            <a
              class="list-group-item active"
              id="info-edit-list"
              data-bs-toggle="list"
              href="#info-edit"
              role="tab"
              aria-controls="info-edit"
              >商品資訊</a
            >
            <a
              class="list-group-item"
              id="content-edit-list"
              data-bs-toggle="list"
              href="#content-edit"
              role="tab"
              aria-controls="content-edit"
              >商品內容</a
            >
            <a
              class="list-group-item"
              id="image-edit-list"
              data-bs-toggle="list"
              href="#image-edit"
              role="tab"
              aria-controls="image-edit"
              >商品圖片</a
            >
          </div>

          <!-- 內容切換 -->
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="info-edit"
              role="tabpanel"
              aria-labelledby="info-edit-list"
            >
              <div class="row gy-4 gx-3">
                <div class="col-12 col-md-8">
                  <label for="name" class="form-label text-db-netural-dark mb-2">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="請輸入商品標題"
                    v-model="tempProduct.title"
                  />
                </div>
                <div class="col-6 col-md-4">
                  <label for="category" class="form-label text-db-netural-dark mb-2">類別</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入類別"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="col-6 col-md-4">
                  <label for="originPrice" class="form-label text-db-netural-dark mb-2">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="originPrice"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="col-6 col-md-4">
                  <label for="price" class="form-label text-db-netural-dark mb-2">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
                <div class="col-6 col-md-4">
                  <label for="unit" class="form-label text-db-netural-dark mb-2">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
                <div class="col-6 d-flex align-items-center">
                  <label for="isEnable" class="form-label text-db-netural-dark mb-2"
                    >是否啟用</label
                  >
                  <div class="d-inline ms-3">
                    <input
                      type="checkbox"
                      class="input-toggle"
                      id="isEnable"
                      v-model="tempProduct.is_enabled"
                    />
                    <label for="isEnable" class="checkbox-switch"></label>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="content-edit"
              role="tabpanel"
              aria-labelledby="content-edit-list"
            >
              <div class="row gy-4 gx-3">
                <div class="col-12">
                  <label for="content" class="form-label text-db-netural-dark mb-2">商品內容</label>
                  <input
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入商品內容"
                    v-model="tempProduct.content"
                  />
                </div>
                <div class="col-12">
                  <label for="description" class="form-label text-db-netural-dark mb-2"
                    >商品描述</label
                  >
                  <textarea
                    id="description"
                    class="form-control"
                    placeholder="請輸入商品描述"
                    rows="4"
                    v-model="tempProduct.description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="image-edit"
              role="tabpanel"
              aria-labelledby="image-edit-list"
            >
              <!-- 主要圖片 -->
              <div class="d-flex justify-content-between align-items-center">
                <p class="text-db-netural-dark mb-2">主要圖片</p>
                <button
                  type="button"
                  class="btn link-db-netural-dark p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#mainImage"
                >
                  <svg width="24" height="24">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-down"></use>
                  </svg>
                </button>
              </div>
              <div class="collapse" id="mainImage">
                <SingleImageUploader :imageUrl="tempProduct.imageUrl"></SingleImageUploader>
              </div>
              <!-- 次要圖片 -->
              <div class="d-flex justify-content-between align-items-center mt-4">
                <p class="text-db-netural-dark mb-2">次要圖片</p>
                <button
                  type="button"
                  class="btn link-db-netural-dark p-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#subImages"
                >
                  <svg width="24" height="24">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-down"></use>
                  </svg>
                </button>
              </div>
              <div class="collapse" id="subImages">
                <ImagesUploader
                  :imagesUrl="tempProduct.imagesUrl"
                  @send-data="getEmit"
                  @remove-data="removeEmit"
                ></ImagesUploader>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-outline-netural" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateProdcut(tempProduct.id, tempProduct)"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 刪除 Modal 元件 -->
  <DeleteModal
    ref="delModalEl"
    title="刪除商品"
    :content="tempProduct.title"
    @delete-emit="deleteAdminProduct(tempProduct.id)"
  ></DeleteModal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';

// 引入自定義組件
import SingleImageUploader from '@/components/Dashboard/SingleImageUploader.vue';
import ImagesUploader from '@/components/Dashboard/ImagesUploader.vue';
import LoadingUi from '@/components/LoadingUi.vue';
import DeleteModal from '@/components/Dashboard/DeleteModal.vue';

// 引入 Composables 方法
import usePie from '@/composables/usePie';
import useBar from '@/composables/useBar';
import useApi from '@/composables/useApi';

// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';

// 取得 useApi 方法
const {
  fetchAdminAllProducts,
  fetchAdminProducts,
  fetchAddAdminProduct,
  fetchDelAdminProduct,
  fetchUpdateAdminProduct,
} = useApi();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 取得 useAdminProducts 資料、方法
const {
  productData,
  productCount,
  tempProduct,
  pagination,
  isNew,
  getAdminProducts,
  updateProdcut,
  deleteAdminProduct,
} = useAdminProducts();

function useAdminProducts() {
  const productData = ref([]);
  const productCount = ref(0);
  const tempProduct = ref({});
  const pagination = ref({});

  const isNew = ref(false);

  // 取得全部商品 GET
  async function getAdminAllProducts() {
    try {
      const { data } = await fetchAdminAllProducts();
      productCount.value = Object.keys(data.products).length;
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    }
  }

  // 取得分頁商品 GET ( 每頁 10 筆 )
  async function getAdminProducts(page = 1) {
    isLoadingOn('isFullLoading');

    try {
      const res = await fetchAdminProducts(page);
      productData.value = res.data.products;
      pagination.value = res.data.pagination;
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 更新或新增商品 POST、PUT
  async function updateProdcut(id, data) {
    isLoadingOn('isFullLoading');

    try {
      const res = isNew.value
        ? await fetchAddAdminProduct({ data })
        : await fetchUpdateAdminProduct(id, { data });

      apiResAlert(res.data.message);
      productModal.value.hide();
      getAdminProducts();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 刪除商品 DELETE
  async function deleteAdminProduct(id) {
    isLoadingOn('isFullLoading');

    try {
      const res = await fetchDelAdminProduct(id);
      apiResAlert(res.data.message);
      delModal.value.hide();
      getAdminProducts();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  onMounted(() => {
    getAdminProducts();
    getAdminAllProducts();
  });

  return {
    productData,
    productCount,
    tempProduct,
    pagination,
    isNew,
    getAdminProducts,
    deleteAdminProduct,
    updateProdcut,
  };
}

// 處理圖片上傳
function getEmit(imagesData) {
  if (!tempProduct.value.imagesUrl) {
    tempProduct.value.imagesUrl = [];
  }
  imagesData.forEach((imageUrl) => {
    tempProduct.value.imagesUrl.push(imageUrl);
  });
}

// 處理圖片刪除
function removeEmit(index) {
  tempProduct.value.imagesUrl.splice(index, 1);
}

// ============ 圖表 Start ===============

// 圓餅圖
const pieElement = ref(null);
onMounted(() => {
  // 初始化圓餅圖
  const { setOption: setPieOption } = usePie(pieElement.value);
  setPieOption([
    { value: 1048, name: '淺烘焙' },
    { value: 735, name: '中烘焙' },
    { value: 580, name: '深烘焙' },
    { value: 484, name: '咖啡用具' },
  ]);
});

// 初始化長條圖
const barElement = ref(null);
onMounted(() => {
  const { setOption: setBarOption } = useBar(barElement.value);
  setBarOption([
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'total',
      name: '咖啡豆',
      label: {
        show: true,
      },
    },
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'total',
      name: '咖啡器具',
      label: {
        show: true,
      },
    },
  ]);
});

// ============ 圖表 End ===============

// 取出 useProductModal 資料、方法
const { productModalEl, delModalEl, productModal, delModal, openModal } = useProductModal();

function useProductModal() {
  const productModalEl = ref(null);
  const delModalEl = ref(null);
  const productModal = ref('');
  const delModal = ref('');

  function openModal(status, data) {
    if (status === 'edit') {
      isNew.value = false;
      tempProduct.value = { ...data };
      productModal.value.show();
    } else if (status === 'new') {
      isNew.value = true;
      tempProduct.value = {};
      productModal.value.show();
    } else if (status === 'del') {
      tempProduct.value = { ...data };
      delModal.value.show();
    }
  }

  onMounted(() => {
    productModal.value = new Modal(productModalEl.value);
    delModal.value = new Modal(delModalEl.value.$el);
  });

  return {
    productModalEl,
    delModalEl,
    productModal,
    delModal,
    openModal,
  };
}
</script>

<style lang="scss" scoped>
// list-group Style
.dashboard {
  // default Style
  $list-group-padding: 8px;
  $list-group-bg: #1b1b1b;
  $list-group-border-radius: 8px;

  $list-item-spacing: 8px;
  $list-item-padding-y: 4px;
  $list-item-padding-x: 8px;
  $list-item-color: #a0a0a0;
  $list-item-bg: transparent;
  $list-item-border-radius: 4px;

  // :active Style

  $list-item-active-color: #282828;
  $list-item-active-bg: #fcc55f;

  .list-group {
    flex-direction: row;
    align-items: center;
    padding: $list-group-padding;
    background-color: $list-group-bg;
    border-radius: $list-group-border-radius;

    & :not(:first-child) {
      margin-left: $list-item-spacing;
      margin-top: 0;
    }

    .list-group-item {
      padding: $list-item-padding-y $list-item-padding-x;
      text-align: center;
      color: $list-item-color;
      background-color: $list-item-bg;
      border: none;
      border-radius: $list-item-border-radius;

      &.active {
        color: $list-item-active-color;
        background-color: $list-item-active-bg;
      }
    }
  }
}
</style>
