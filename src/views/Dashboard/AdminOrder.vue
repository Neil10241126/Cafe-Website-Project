<template>
  <!-- 讀取效果元件 -->
  <LoadingUi></LoadingUi>

  <!-- 刪除 Modal 元件 -->
  <DeleteModal
    ref="delModalEl"
    title="刪除訂單"
    :content="editOrderList.id"
    @delete-emit="deleteAdminOrder(editOrderList.id)"
  ></DeleteModal>

  <div class="row g-3 g-lg-4">
    <!-- 左側導航欄 Nav -->
    <div class="col-12 col-lg-2">
      <div class="list-group sticky-top" style="top: 30px">
        <button type="button" class="list-group-item list-group-item-action" aria-current="true">
          摘要
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          :class="{ active: true }"
        >
          購買品項
        </button>
        <button type="button" class="list-group-item list-group-item-action">發票管理</button>
        <button type="button" class="list-group-item list-group-item-action">危險操作</button>
      </div>
    </div>

    <!-- 主要內容區 -->
    <div class="col-12 col-lg-10">
      <!-- 摘要 Card -->
      <div class="card mb-3 mb-lg-4">
        <div class="card-header border border-db-background-lighten">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">摘要</h3>
            <span class="text-db-netural-dark">包含訂單狀態等資訊。</span>
          </div>
        </div>
        <div
          class="card-body bg-db-background border border-top-0 border-db-background-lighten rounded-bottom-3"
        >
          <dl class="row gy-1 mb-0">
            <dt class="col-sm-2 text-db-netural text-nowrap">訂單編號 :</dt>
            <dd class="col-sm-10 text-db-netural-dark mb-1 mb-sm-2">{{ editOrderList.id }}</dd>
            <dt class="col-sm-2 text-db-netural text-nowrap">訂單金額 :</dt>
            <dd class="col-sm-10 text-db-netural-dark mb-1 mb-sm-2">
              NT$ {{ editOrderList.total }}
            </dd>
            <dt class="col-sm-2 text-db-netural text-nowrap">訂單狀態 :</dt>
            <dd class="col-sm-10 text-db-netural-dark mb-1 mb-sm-2">待處理</dd>
            <dt class="col-sm-2 text-db-netural text-nowrap">發票狀態 :</dt>
            <dd class="col-sm-10 text-chart-red mb-0">未開立</dd>
          </dl>
        </div>
      </div>

      <!-- 購買品項 Card -->
      <div class="card mb-3 mb-lg-4">
        <div class="card-header border border-db-background-lighten d-flex justify-content-between">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">購買品項</h3>
            <span class="text-db-netural-dark">總計 {{ productCount }} 筆商品。</span>
          </div>

          <div>
            <button type="button" class="btn btn-outline-netural" data-bs-toggle="dropdown">
              <span class="d-none d-md-block me-2">出貨狀態處理</span>
              <svg width="20" height="20">
                <use xlink:href="/public/icons/dashboard-icons.svg#fig-down"></use>
              </svg>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>

        <!-- 商品清單 Table -->
        <div class="card-body table-responsive bg-db-background border-0">
          <table class="table table-db-background mb-0">
            <thead class="align-middle text-nowrap">
              <tr>
                <th scope="col" class="fw-normal py-3 pe-3"></th>
                <th scope="col" class="fw-normal pe-3">貨號</th>
                <th scope="col" class="fw-normal pe-3">貨號</th>
                <th scope="col" class="fw-normal pe-3">購買價格</th>
                <th scope="col" class="fw-normal pe-3">訂購數量</th>
                <th scope="col" class="fw-normal text-end pe-3">出貨狀態</th>
                <th scope="col" class="fw-normal text-end pe-0">操作</th>
              </tr>
            </thead>
            <tbody class="align-middle text-nowrap">
              <tr v-for="(product, key) in editOrderList.products" :key="product.id">
                <td scope="row" class="pt-3 pe-3 border-0">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
                <td class="pt-3 pe-3 border-0">{{ product.product.num }}</td>
                <td class="pt-3 pe-3 border-0">{{ product.product.title }}</td>
                <td class="pt-3 pe-3 border-0">NT$ {{ product.product.price }}</td>
                <td class="pt-3 pe-3 border-0 position-relative">
                  <span v-if="editIndex !== key">{{ product.qty }} {{ product.product.unit }}</span>
                  <input
                    v-else
                    type="number"
                    min="1"
                    class="form-control position-absolute py-0 pe-0"
                    v-model.number="product.qty"
                    style="top: 19px; width: 60px"
                  />
                </td>
                <td class="pt-3 pe-3 border-0 text-end">
                  <span class="tag tag-success">已出貨</span>
                </td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-primary me-1" @click="toggleEdit(key)">
                      <svg width="14" height="14" class="me-1">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                      <span class="fs-9">編輯</span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="delete editOrderList.products[key]"
                    >
                      <svg width="14" height="14" class="me-1">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-trash"></use>
                      </svg>
                      <span class="fs-9">刪除</span>
                    </button>
                  </div>
                </td>
              </tr>
              <!-- <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
                <td class="pt-3 pe-3 border-0">P1234567</td>
                <td class="pt-3 pe-3 border-0">斯里蘭卡海鹽</td>
                <td class="pt-3 pe-3 border-0">NT$ 399</td>
                <td class="pt-3 pe-3 border-0">1 件</td>
                <td class="pt-3 pe-3 border-0 text-end">
                  <span class="tag tag-padding">處理中</span>
                </td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-primary me-1">
                      <svg width="14" height="14" class="me-1">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                      <span class="fs-9">編輯</span>
                    </button>
                    <button class="btn btn-danger">
                      <svg width="14" height="14" class="me-1">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-trash"></use>
                      </svg>
                      <span class="fs-9">刪除</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row" class="pt-3 pe-3 border-0">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </td>
                <td class="pt-3 pe-3 border-0">P1234567</td>
                <td class="pt-3 pe-3 border-0">斯里蘭卡海鹽</td>
                <td class="pt-3 pe-3 border-0">NT$ 399</td>
                <td class="pt-3 pe-3 border-0">1 件</td>
                <td class="pt-3 pe-3 border-0 text-end">
                  <span class="tag tag-not-processed">尚未處理</span>
                </td>
                <td class="pt-3 pe-0 border-0">
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-primary me-1">
                      <svg width="14" height="14" class="me-1">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                      </svg>
                      <span class="fs-9">編輯</span>
                    </button>
                    <button class="btn btn-danger">
                      <svg width="14" height="14" class="me-1">
                        <use xlink:href="/public/icons/dashboard-icons.svg#fig-trash"></use>
                      </svg>
                      <span class="fs-9">刪除</span>
                    </button>
                  </div>
                </td>
              </tr> -->
            </tbody>
          </table>
        </div>

        <div class="card-footer bg-db-background rounded-bottom-3 d-flex justify-content-end pt-0">
          <button
            type="button"
            class="btn btn-outline-netural"
            @click="updateAdminOrder(editOrderList.id, editOrderList)"
          >
            儲存資料
          </button>
        </div>
      </div>

      <!-- 發票管理 Card -->
      <div class="card mb-3 mb-lg-4">
        <div class="card-header border border-db-background-lighten">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">發票管理</h3>
            <span class="text-db-netural-dark">發票開立設定資訊。</span>
          </div>
        </div>

        <div
          class="card-body bg-db-background border border-top-0 border-db-background-lighten rounded-bottom-3"
        >
          <div class="row align-items-center gy-1 mb-3 mb-sm-2">
            <label class="col-sm-2 form-label text-db-netural mb-0">發票類型</label>
            <div class="col-sm-10">
              <template v-if="editOrderList.user">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="editOrderList.user.billInfo.type"
                >
                  <option selected disabled>請選擇發票類型</option>
                  <option value="個人發票">個人發票</option>
                  <option value="公司統編">公司統編</option>
                </select>
              </template>
            </div>
          </div>
          <div class="row align-items-center gy-1 mb-3 mb-sm-2">
            <label for="bill-number" class="col-sm-2 form-label text-db-netural mb-0"
              >公司統編</label
            >
            <div class="col-sm-10">
              <template v-if="editOrderList.user">
                <input
                  type="number"
                  class="form-control"
                  id="bill-number"
                  placeholder="請輸入公司統一編號"
                  v-model="editOrderList.user.billInfo.billNumber"
                />
              </template>
            </div>
          </div>
          <div class="row align-items-center gy-1 mb-3 mb-sm-2">
            <label for="bill-name" class="col-sm-2 form-label text-db-netural mb-0">公司名稱</label>
            <div class="col-sm-10">
              <template v-if="editOrderList.user">
                <input
                  type="text"
                  class="form-control"
                  id="bill-name"
                  placeholder="請輸入公司名稱"
                  v-model="editOrderList.user.billInfo.billName"
                />
              </template>
            </div>
          </div>
        </div>
      </div>

      <!-- 危險操作 Card -->
      <div class="card">
        <div class="card-header border border-db-background-lighten">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">危險操作</h3>
            <span class="text-db-netural-dark">請務必確認後操作。</span>
          </div>
        </div>

        <div
          class="card-body bg-db-background border border-top-0 border-db-background-lighten rounded-bottom-3"
        >
          <div class="row align-items-center g-3">
            <div class="col-5 col-sm-3 col-md-2">
              <button type="button" class="btn btn-outline-netural d-block w-100">退款</button>
            </div>
            <div class="col-7 col-sm-9 col-md-10">
              <span class="text-db-netural-dark">退還客戶款項。</span>
            </div>
            <div class="col-5 col-sm-3 col-md-2">
              <button
                type="button"
                class="btn btn-outline-danger d-block w-100"
                @click="delModal.show()"
              >
                刪除訂單
              </button>
            </div>
            <div class="col-7 col-sm-9 col-md-10">
              <span class="text-db-netural-dark">該筆訂單將刪除，包含相關訂單訊息。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import Modal from 'bootstrap/js/dist/modal';

// 引入自定義組件
import LoadingUi from '@/components/LoadingUi.vue';
import DeleteModal from '@/components/Dashboard/DeleteModal.vue';

// 引入 Composables 方法
import useApi from '@/composables/useApi';

// 引入 Pinia 狀態管理;
import useOrderStore from '@/stores/order';
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';

// 初始化路由
const router = useRouter();

// 取得 useApi 方法
const { fetchDelAdminOrder, fetchUpdateAdminOrders } = useApi();

// 取得 order 資料
const orderStore = useOrderStore();
const { tempOrder } = storeToRefs(orderStore);

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 編輯的資料
const editOrderList = ref({});

// 顯示商品列表數量
const productCount = computed(() => {
  if (!editOrderList.value.products) {
    return 0;
  }
  return Object.keys(editOrderList.value.products).length;
});

// 編輯商品索引
const editIndex = ref(-1);

// 切換編輯狀態的方法
function toggleEdit(index) {
  editIndex.value = editIndex.value === index ? -1 : index;
}

// 監聽器：監控訂單數量變化並更新總價
watch(
  () => editOrderList.value,
  (newValue) => {
    if (!newValue) return;

    let finalTotal = 0;
    Object.entries(newValue.products).forEach(([key, item]) => {
      const total = item.qty * item.product.price;
      finalTotal += total;
      editOrderList.value.products[key].total = total;
      editOrderList.value.products[key].final_total = total;
    });

    editOrderList.value.total = finalTotal;
  },
  { deep: true }
);

// 刪除單一訂單 DELETE
async function deleteAdminOrder(id) {
  isLoadingOn('isFullLoading');

  try {
    const res = await fetchDelAdminOrder(id);
    apiResAlert(res.data.message);
    router.push('/admin/orders');
  } catch (err) {
    const { data, status } = err.response;
    apiErrAlert(`${status} ${data.message}`);
  } finally {
    delModal.value.hide();
    isLoadingOff('isFullLoading');
  }
}

// 修改訂單 PUT
async function updateAdminOrder(id, data) {
  isLoadingOn('isFullLoading');

  try {
    const res = await fetchUpdateAdminOrders(id, { data });
    apiResAlert(res.data.message);
  } catch (err) {
    const { data, status } = err.response;
    apiErrAlert(`${status} ${data.message}`);
  } finally {
    isLoadingOff('isFullLoading');
  }
}

const delModalEl = ref(null);
const delModal = ref({});

onMounted(() => {
  delModal.value = new Modal(delModalEl.value.$el);
  editOrderList.value = JSON.parse(JSON.stringify(tempOrder.value));
});
</script>

<style lang="scss" scoped>
// 列表群組
.list-group {
  border-radius: 8px;

  .list-group-item {
    background-color: transparent;
    color: #a0a0a0;
    border-color: #a0a0a0;

    &:hover {
      background-color: #484643;
      color: #f2f2f2;
    }

    &.active {
      background-color: #fcc55f;
      color: #282828;
    }

    &.disabled {
      color: darken(#a0a0a0, 15%);
    }
  }
}
</style>
