<template>
  <!-- Loading -->
  <LoadingUi></LoadingUi>

  <div class="card shadow">
    <div class="card-header d-flex justify-content-between align-items-center py-3">
      <h5 class="fs-6">商品清單</h5>
      <button
        type="button"
        class="btn btn-sm btn-primary rounded-0 d-flex align-items-center"
        @click="openModal('create')"
      >
        新增產品
        <svg width="16" height="16" class="ms-1">
          <use xlink:href="/public/icons/icons.svg#plus" />
        </svg>
      </button>
    </div>
    <div class="card-body">
      <!-- 表格 -->
      <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">商品標題</th>
            <th scope="col" class="text-end">類別</th>
            <th scope="col" class="text-end">酸度</th>
            <th scope="col" class="text-end">產地</th>
            <th scope="col" class="text-end">原價(NTD)</th>
            <th scope="col" class="text-end">售價(NTD)</th>
            <th scope="col" class="text-end">是否啟用</th>
            <th scope="col" class="text-end">功能</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="product in productData" :key="product.id">
            <th scope="row">{{ product.title }}</th>
            <td class="text-end">
              <span class="badge rounded-pill text-bg-primary py-2 fw-normal">{{
                product.category
              }}</span>
            </td>
            <td class="text-end">{{ product.acidity }}</td>
            <td class="text-end">{{ product.origin }}</td>
            <td class="text-end">{{ product.origin_price }}</td>
            <td class="text-end">{{ product.price }}</td>
            <td class="text-end">
              <svg width="20" height="20">
                <use
                  v-if="product.is_enabled"
                  xlink:href="/public/icons/icons.svg#check-circle"
                  class="text-success"
                />
                <use v-else xlink:href="/public/icons/icons.svg#x-circle" class="text-danger" />
              </svg>
            </td>
            <td class="text-end">
              <button
                type="button"
                class="btn btn-netural-800 rounded-1 py-1 px-2"
                @click="openModal('edit', product)"
              >
                <svg width="16" height="16" class="d-flex">
                  <use xlink:href="/public/icons/icons.svg#box-arrow-up-right" />
                </svg>
              </button>
              <button
                type="button"
                class="btn btn-danger rounded-1 py-1 px-2 ms-1"
                @click="openModal('delete', product)"
              >
                <svg width="16" height="16" class="d-flex">
                  <use xlink:href="/public/icons/icons.svg#trash3" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 分頁元件 -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ 'd-none': pagination.has_pre === false }">
            <button
              type="button"
              class="page-link"
              @click="getAdminProdcuts(pagination.current_page - 1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>

          <li
            v-for="page in pagination.total_pages"
            :key="page + 123"
            class="page-item"
            :class="{ active: pagination.current_page === page }"
          >
            <button
              class="page-link"
              type="button"
              @click="getAdminProdcuts(page)"
              :disabled="pagination.current_page === page"
            >
              {{ page }}
            </button>
          </li>

          <li class="page-item" :class="{ 'd-none': pagination.has_next === false }">
            <button
              type="button"
              class="page-link"
              @click="getAdminProdcuts(pagination.current_page + 1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="productModal" ref="refProductModal">
    <div class="modal-dialog">
      <div class="modal-content" data-bs-theme="dark">
        <!-- Modal Header -->
        <div class="modal-header bg-netural-800 text-netural-100 py-3">
          <h1 class="modal-title fs-6">{{ isNew ? '新增商品' : '修改商品' }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body" data-bs-theme="light">
          <div class="list-group d-inline-flex flex-row">
            <!-- 操控 -->
            <a
              href="#list-content"
              class="list-group-item list-group-item-action d-flex align-items-center active"
              data-bs-toggle="list"
              ><svg width="18" height="18">
                <use xlink:href="/public/icons/icons.svg#file-text" />
              </svg>
              <span class="text-nowrap ms-2">內容</span></a
            >
            <a
              href="#list-images"
              class="list-group-item list-group-item-action d-flex align-items-center"
              data-bs-toggle="list"
            >
              <svg width="18" height="18">
                <use xlink:href="/public/icons/icons.svg#image" />
              </svg>
              <span class="text-nowrap ms-2">圖片</span>
            </a>
          </div>

          <!-- 內容 -->
          <div class="tab-content">
            <!-- 基本 -->
            <div class="tab-pane fade show active p-3 border" id="list-content">
              <form action="#">
                <div class="mb-2">
                  <label for="title" class="form-label fs-8"
                    >商品標題<span class="text-danger ms-1">{{ errors.title }}</span></label
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors.title }"
                    id="title"
                    placeholder="請輸入商品標題"
                    v-model="title"
                    v-bind="titleAttrs"
                  />
                </div>
                <div class="row gx-3 mb-2">
                  <div class="col-4">
                    <label for="category" class="form-label fs-8"
                      >類別<span class="text-danger ms-1">{{ errors.category }}</span></label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': errors.category }"
                      id="category"
                      placeholder="請輸入類別"
                      v-model="category"
                      v-bind="categoryAttrs"
                    />
                  </div>
                  <div class="col-4">
                    <label for="acidity" class="form-label fs-8"
                      >酸度<span class="text-danger ms-1">{{ errors.acidity }}</span></label
                    >
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': errors.acidity }"
                      id="acidity"
                      placeholder="請輸入類別"
                      v-model="acidity"
                      v-bind="acidityAttrs"
                    />
                  </div>
                  <div class="col-4">
                    <label for="origin" class="form-label fs-8"
                      >產地<span class="text-danger ms-1">{{ errors.origin }}</span></label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': errors.origin }"
                      id="origin"
                      placeholder="請輸入類別"
                      v-model="origin"
                      v-bind="originAttrs"
                    />
                  </div>
                </div>
                <div class="row gx-3 mb-2">
                  <div class="col-4">
                    <label for="origin-price" class="form-label fs-8"
                      >原價<span class="text-danger ms-1">{{ errors.originPrice }}</span></label
                    >
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': errors.originPrice }"
                      id="origin-price"
                      placeholder="請輸入原價"
                      v-model="originPrice"
                      v-bind="originPriceAttrs"
                    />
                  </div>
                  <div class="col-4">
                    <label for="price" class="form-label fs-8"
                      >售價<span class="text-danger ms-1">{{ errors.price }}</span></label
                    >
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': errors.price }"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="price"
                      v-bind="priceAttrs"
                    />
                  </div>
                  <div class="col-4">
                    <label for="unit" class="form-label fs-8"
                      >單位<span class="text-danger ms-1">{{ errors.unit }}</span></label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      :class="{ 'is-invalid': errors.unit }"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="unit"
                      v-bind="unitAttrs"
                    />
                  </div>
                </div>
                <div class="mb-2">
                  <label for="content" class="form-label fs-8"
                    >內容<span class="text-danger ms-1">{{ errors.content }}</span></label
                  >
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors.content }"
                    id="content"
                    placeholder="請輸入商品內容"
                    v-model="content"
                    v-bind="contentAttrs"
                  />
                </div>
                <div class="mb-2">
                  <label for="description" class="form-label fs-8"
                    >描述<span class="text-danger ms-1">{{ errors.description }}</span></label
                  >
                  <textarea
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors.description }"
                    id="description"
                    rows="3"
                    placeholder="請輸入商品描述"
                    v-model="description"
                    v-bind="descriptionAttrs"
                  ></textarea>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="isEnable"
                    :checked="isEnabled"
                    v-model="isEnabled"
                    v-bind="isEnabledAttrs"
                  />
                  <label class="form-check-label fs-8" for="isEnable">是否啟用</label>
                </div>
              </form>
            </div>

            <!-- 圖片 -->
            <div class="tab-pane fade p-3 border" id="list-images">
              <!-- 主要圖片 -->
              <div class="row">
                <div class="col-3">
                  <div>
                    <label class="form-label fs-8">主要圖片</label>
                    <UploaderUi
                      @send-image-data="getEmitData"
                      @remove-image-data="removeFiledImageUrl"
                      v-model="imageUrl"
                      v-bind="imageUrlAttrs"
                    ></UploaderUi>
                  </div>
                </div>
                <div class="col-9">
                  <div class="d-flex flex-column h-100">
                    <div>
                      <h5 class="fs-8 lh-base mb-2" :class="{ 'text-danger': sizeCheck }">
                        檔名 : {{ imageData.fileName }}
                      </h5>
                      <div class="mb-1">
                        <span
                          class="badge text-bg-netural-900"
                          :class="{ 'bg-success': imageData.fileType === 'jpeg' }"
                          >JPG</span
                        >
                        <span
                          class="badge text-bg-netural-900 ms-1"
                          :class="{ 'bg-success': imageData.fileType === 'png' }"
                          >PNG</span
                        >
                        <span
                          class="badge text-bg-netural-900 ms-1"
                          :class="{ 'bg-success': imageData.fileType === 'webp' }"
                          >WEBP</span
                        >
                      </div>
                      <p class="fs-8 text-muted">限制 : 圖片檔案不可大於 3MB</p>
                      <span></span>
                    </div>
                    <div class="mt-auto d-flex justify-content-between">
                      <div
                        class="d-flex align-items-center text-success"
                        :class="{ 'text-danger': sizeCheck }"
                      >
                        <span class="me-2">{{ formatSize }}</span>
                        <svg width="16" height="16">
                          <use
                            :xlink:href="`/public/icons/icons.svg#${
                              sizeCheck ? 'x-circle' : 'check-circle'
                            }`"
                          />
                        </svg>
                      </div>
                      <button
                        type="button"
                        class="btn btn-sm btn-success"
                        @click="upload()"
                        :disabled="!imageData.isUploaded || isLoading"
                      >
                        點擊上傳
                        <div
                          v-show="isLoading"
                          class="spinner-border spinner-grow-sm ms-1"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer bg-netural-800">
          <button type="button" class="btn btn-outline-netural-300" data-bs-dismiss="modal">
            關閉
          </button>
          <button type="button" class="btn btn-success" @click="onSubmit()">儲存</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
  <div class="modal fade" id="exampleModal" ref="refDeleteModal">
    <div class="modal-dialog">
      <div class="modal-content" data-bs-theme="dark">
        <!-- Modal Header -->
        <div class="modal-header bg-danger text-netural-100 py-3">
          <h1 class="modal-title fs-6">刪除商品</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body py-4 fs-6">
          確認刪除<span class="text-bg-danger mx-1 px-1 rounded-1">{{ tempProdcut.title }}</span
          >商品 ?
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer bg-danger">
          <button type="button" class="btn btn-outline-netural-100" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-netural-900" @click="deleteProdcut(tempProdcut.id)">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單
import Modal from 'bootstrap/js/dist/modal';
// 引入 UI 組件
import UploaderUi from '@/components/dashboard/UploaderUi.vue';
import LoadingUi from '@/components/LoadingUi.vue';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
// 引入 Composables 方法
import useValidation from '@/composables/useValidation';
import useApi from '@/composables/useApi';

// 取得 alert 方法
const alert = useAlertStore();
const { apiResAlert, apiErrAlert } = alert;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 取得 useApi 方法
const {
  fetchUpload,
  fetchAdminProducts,
  fetchAddAdminProduct,
  fetchDelAdminProduct,
  fetchUpdateAdminProduct,
} = useApi();

// 取得 useAdminProducts 資料、方法
const {
  productData,
  pagination,
  isNew,
  tempProdcut,
  getAdminProdcuts,
  addAdminProduct,
  deleteProdcut,
  updateProduct,
} = useAdminProducts();

function useAdminProducts() {
  const productData = ref([]);
  const pagination = ref({});
  const isNew = ref(false);
  const tempProdcut = ref({});

  // 取得產品 GET
  async function getAdminProdcuts(page = 1) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchAdminProducts(page);
      productData.value = res.data.products;
      pagination.value = res.data.pagination;
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 新增產品 POST
  async function addAdminProduct(data) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchAddAdminProduct(data);
      await getAdminProdcuts();
      apiResAlert(res.data.message);
      closeModal('product');
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 刪除商品 Delete
  async function deleteProdcut(id) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchDelAdminProduct(id);
      await getAdminProdcuts();
      apiResAlert(res.data.message);
      closeModal('delete');
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 修改商品 Put
  async function updateProduct(id, data) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchUpdateAdminProduct(id, data);

      await getAdminProdcuts();
      closeModal('product');
      apiResAlert(res.data.message);
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  onMounted(() => getAdminProdcuts());

  return {
    productData,
    pagination,
    isNew,
    tempProdcut,
    getAdminProdcuts,
    addAdminProduct,
    deleteProdcut,
    updateProduct,
  };
}

// 取出 useUploadImage 資料、計算屬性、方法
const { isLoading, imageData, sizeCheck, formatSize, getEmitData, removeFiledImageUrl, upload } =
  useUploadImage();

function useUploadImage() {
  const isLoading = ref(false);
  const imageData = ref({
    isUploaded: false,
    viewLink: '',
    fileName: '',
    fileSize: 0,
    fileType: '',
    data: {},
  });

  const sizeCheck = computed(() => imageData.value.fileSize > 3145728);

  const formatSize = computed(() => {
    const sizeKB = imageData.value.fileSize / 1024;

    if (sizeKB > 1024) {
      return `${(sizeKB / 1024).toFixed(2)} MB`;
    }

    return `${sizeKB.toFixed(2)} KB`;
  });

  function getEmitData(data) {
    imageData.value = data;
  }

  function removeFiledImageUrl() {
    imageUrl.value = '';
  }

  // 上傳圖片 POST
  function upload() {
    const { data } = imageData.value;
    const formData = new FormData();
    formData.append('file-to-upload', data);

    isLoading.value = true;

    fetchUpload(formData)
      .then((res) => {
        imageUrl.value = res.data.imageUrl;
        apiResAlert('圖片上傳成功!');
        isLoading.value = false;
      })
      .catch((err) => {
        apiErrAlert(err.response.data.message);
        isLoading.value = false;
      });
  }

  return {
    isLoading,
    imageData,
    sizeCheck,
    formatSize,
    getEmitData,
    removeFiledImageUrl,
    upload,
  };
}

// 取出 useProductModal 資料、方法
const { refProductModal, refDeleteModal, openModal, closeModal } = useProductModal();

function useProductModal() {
  const refProductModal = ref(null);
  const refDeleteModal = ref(null);
  const productModal = ref('');
  const deleteModal = ref('');

  // 開啟 Modal
  function openModal(type, item) {
    if (type === 'create') {
      handleSubmit((values, { resetForm }) => resetForm())();
      isNew.value = true;
      productModal.value.show();
    } else if (type === 'edit') {
      isNew.value = false;
      tempProdcut.value = item;
      productModal.value.show();
      updateFiledData(item);
    } else if (type === 'delete') {
      deleteModal.value.show();
      tempProdcut.value = item;
    }
  }

  // 關閉 Modal
  function closeModal(type) {
    if (type === 'product') {
      productModal.value.hide();
      return;
    }
    deleteModal.value.hide();
  }

  // 更新表單值
  function updateFiledData(item) {
    title.value = item.title;
    category.value = item.category;
    acidity.value = item.acidity;
    origin.value = item.origin;
    originPrice.value = item.origin_price;
    price.value = item.price;
    unit.value = item.unit;
    content.value = item.content;
    description.value = item.description;
    isEnabled.value = item.is_enabled;
    imageUrl.value = item.imageUrl;
  }

  onMounted(() => {
    productModal.value = new Modal(refProductModal.value);
    deleteModal.value = new Modal(refDeleteModal.value);
  });

  return {
    refProductModal,
    refDeleteModal,
    openModal,
    closeModal,
  };
}

// 取出 schema 驗證規則
const { addProductSchema } = useValidation();

// 使用 useForm 來處理表單驗證
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: addProductSchema,
});

// 定義表單欄位
const [title, titleAttrs] = defineField('title');
const [category, categoryAttrs] = defineField('category');
const [acidity, acidityAttrs] = defineField('acidity');
const [origin, originAttrs] = defineField('origin');
const [originPrice, originPriceAttrs] = defineField('originPrice');
const [price, priceAttrs] = defineField('price');
const [unit, unitAttrs] = defineField('unit');
const [content, contentAttrs] = defineField('content');
const [description, descriptionAttrs] = defineField('description');
const [isEnabled, isEnabledAttrs] = defineField('isEnabled');
const [imageUrl, imageUrlAttrs] = defineField('imageUrl');

const onSubmit = handleSubmit((values) => {
  const data = {
    title: values.title,
    category: values.category,
    acidity: values.acidity,
    origin: values.origin,
    origin_price: values.originPrice,
    price: values.price,
    unit: values.unit,
    content: values.content,
    description: values.description,
    is_enabled: values.isEnabled,
    imageUrl: values.imageUrl,
  };

  if (isNew.value) {
    addAdminProduct({ data });
  } else {
    updateProduct(tempProdcut.value.id, { data });
  }
});
</script>

<style lang="scss" scoped>
.list-group {
  --bs-list-group-color: var(--bs-netural-500);
  --bs-list-group-active-bg: var(--bs-netural-800);
  --bs-list-group-border-radius: 0;
  --bs-list-group-action-hover-color: var(--bs-netural-700);
  .list-group-item {
    border: 1px solid var(--bs-netural-300);
  }
}
</style>
