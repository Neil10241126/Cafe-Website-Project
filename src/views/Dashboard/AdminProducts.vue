<template>
  <div class="card">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">商品標題</th>
            <th scope="col" class="text-end">類別</th>
            <th scope="col" class="text-end">售價(NTD)</th>
            <th scope="col" class="text-end">是否啟用</th>
            <th scope="col" class="text-end">功能</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr>
            <th scope="row">1</th>
            <td class="text-end">
              <span class="badge rounded-pill text-bg-primary py-2 fw-normal">淺烘焙</span>
            </td>
            <td class="text-end">399</td>
            <td class="text-end">
              <svg width="20" height="20">
                <use
                  v-if="true"
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
                @click="openModal()"
              >
                <svg width="16" height="16" class="d-flex">
                  <use xlink:href="/public/icons/icons.svg#box-arrow-up-right" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="productModal" ref="productModal">
    <div class="modal-dialog">
      <div class="modal-content" data-bs-theme="dark">
        <!-- Modal Header -->
        <div class="modal-header bg-netural-800 text-netural-100">
          <h1 class="modal-title fs-5">新增商品</h1>
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
                <div class="row gx-3 mb-3">
                  <div class="col-8">
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
                </div>
                <div class="row gx-3 mb-3">
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
                <div class="mb-3">
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
                <div class="mb-3">
                  <label for="description" class="form-label fs-8"
                    >描述<span class="text-danger ms-1">{{ errors.desc }}</span></label
                  >
                  <textarea
                    class="form-control form-control-sm"
                    :class="{ 'is-invalid': errors.desc }"
                    id="description"
                    rows="3"
                    placeholder="請輸入商品描述"
                    v-model="desc"
                    v-bind="descAttrs"
                  ></textarea>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    id="isEnable"
                    v-model="isEnabled"
                    v-bind="isEnabledAttrs"
                  />
                  <label class="form-check-label fs-8" for="isEnable">是否啟用</label>
                </div>
                {{ values }}
              </form>
            </div>

            <!-- 圖片 -->
            <div class="tab-pane fade p-3 border" id="list-images">
              <!-- 主要圖片 -->
              <div class="row">
                <div class="col-3">
                  <div>
                    <label class="form-label fs-8">主要圖片</label>
                    <UploaderUi @send-img-data="getEmitData"></UploaderUi>
                  </div>
                </div>
                <div class="col-9">
                  <div class="d-flex flex-column h-100">
                    <div>
                      <h5 class="fs-8 lh-base mb-2">檔名 : {{ dataImg.value?.name }}</h5>
                      <div class="mb-1">
                        <span
                          class="badge text-bg-netural-900"
                          :class="{ 'bg-success': dataImg.value?.type === 'jpeg' }"
                          >JPG</span
                        >
                        <span
                          class="badge text-bg-netural-900 ms-1"
                          :class="{ 'bg-success': dataImg.value?.type === 'png' }"
                          >PNG</span
                        >
                        <span
                          class="badge text-bg-netural-900 ms-1"
                          :class="{ 'bg-success': dataImg.value?.type === 'webp' }"
                          >WEBP</span
                        >
                      </div>
                      <p class="fs-8 text-muted">限制 : 圖片檔案不可大於 3MB</p>
                      <span></span>
                    </div>
                    <div class="mt-auto d-flex justify-content-between">
                      <div
                        class="d-flex align-items-center text-success"
                        :class="{ 'text-danger': formatSize(dataImg.value?.size).checkSize }"
                      >
                        <span class="me-2">{{ formatSize(dataImg.value?.size).value }}</span>
                        <svg width="16" height="16">
                          <use
                            :xlink:href="`/public/icons/icons.svg#${
                              formatSize(dataImg.value?.size).checkSize
                                ? 'x-circle'
                                : 'check-circle'
                            }`"
                          />
                        </svg>
                      </div>
                      <button type="button" class="btn btn-sm btn-success" @click="upload()">
                        點擊上傳
                        <div class="spinner-border spinner-grow-sm ms-1" role="status">
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
          <button type="button" class="btn btn-success">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單
import Modal from 'bootstrap/js/dist/modal';
// 引入 UI 組件
import UploaderUi from '@/components/dashboard/UploaderUi.vue';
// 引入 Composables 方法
import useValidation from '@/composables/useValidation';
import useApi from '@/composables/useApi';

// 取出 schema 驗證規則
const { addProductSchema } = useValidation();

// 取得 useApi 方法
const { fetchUpload } = useApi();

const productModal = ref(null);
const useProductModal = ref('');
const dataImg = ref({
  isUploaded: false,
  link: '',
  name: '',
  size: 0,
  type: '',
  data: {},
});

function getEmitData(imgData) {
  dataImg.value = imgData;
}

function formatSize(size) {
  let value = 0;
  const checkSize = size > 3145728;
  const sizeKB = size / 1024;

  if (sizeKB > 1000) {
    value = `${(sizeKB / 1024).toFixed(2)} MB`;
  } else {
    value = `${sizeKB.toFixed(2)} KB`;
  }

  return {
    value,
    checkSize,
  };
}

function upload() {
  const { data } = dataImg.value.value;
  const formData = new FormData();
  formData.append('file-to-upload', data);

  fetchUpload(formData)
    .then((res) => console.log('fetch res: ', res))
    .catch((err) => console.log('fetch err: ', err));
}

const openModal = () => useProductModal.value.show();

onMounted(() => {
  useProductModal.value = new Modal(productModal.value);
  useProductModal.value.show();
});

// 使用 useForm 來處理表單驗證
const { defineField, errors, values } = useForm({
  validationSchema: addProductSchema,
});

// 定義表單欄位
const [title, titleAttrs] = defineField('title');
const [category, categoryAttrs] = defineField('category');
const [originPrice, originPriceAttrs] = defineField('originPrice');
const [price, priceAttrs] = defineField('price');
const [unit, unitAttrs] = defineField('unit');
const [content, contentAttrs] = defineField('content');
const [desc, descAttrs] = defineField('desc');
const [isEnabled, isEnabledAttrs] = defineField('isEnabled');
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
