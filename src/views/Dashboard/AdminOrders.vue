<template>
  <!-- Loading -->
  <LoadingUi></LoadingUi>

  <div class="row">
    <div class="col-8">
      <div class="card shadow">
        <div class="card-header d-flex justify-content-between align-items-center py-3">
          <h5 class="fs-6">訂單清單</h5>
          <button
            type="button"
            class="btn btn-sm btn-danger rounded-0 d-flex align-items-center"
            @click="openModal()"
          >
            全部刪除
            <svg width="16" height="16" class="ms-1">
              <use xlink:href="/public/icons/icons.svg#trash3" />
            </svg>
          </button>
        </div>
        <div class="card-body">
          <!-- 表格 -->
          <table class="table table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">客戶姓名</th>
                <th scope="col">訂單ID</th>
                <th scope="col" class="text-end">生成時間(time)</th>
                <th scope="col" class="text-end">是否付款</th>
                <th scope="col" class="text-end">總金額(NTD)</th>
                <th scope="col" class="text-end"></th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="order in orders" :key="order.id">
                <th scope="row">{{ order.user.name }}</th>
                <td>{{ order.id }}</td>
                <td class="text-end">{{ time(order.create_at) }}</td>
                <td class="text-end">
                  <svg width="20" height="20">
                    <use
                      v-if="order.is_paid"
                      xlink:href="/public/icons/icons.svg#check-circle"
                      class="text-success"
                    />
                    <use v-else xlink:href="/public/icons/icons.svg#x-circle" class="text-danger" />
                  </svg>
                </td>
                <td class="text-end">{{ order.total }}</td>
                <td class="text-end">
                  <button type="button" class="btn btn-sm d-flex p-0" @click="delOrder(order.id)">
                    <svg width="18" height="18" class="text-netural-900">
                      <use xlink:href="/public/icons/icons.svg#dots-vertical" />
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
                  @click="getOrders(pagination.current_page - 1)"
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
                  @click="getOrders(page)"
                  :disabled="pagination.current_page === page"
                >
                  {{ page }}
                </button>
              </li>

              <li class="page-item" :class="{ 'd-none': pagination.has_next === false }">
                <button
                  type="button"
                  class="page-link"
                  @click="getOrders(pagination.current_page + 1)"
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
  </div>

  <!-- Delete Modal -->
  <div class="modal fade" id="exampleModal" ref="refDeleteOrderModal">
    <div class="modal-dialog">
      <div class="modal-content" data-bs-theme="dark">
        <!-- Modal Header -->
        <div class="modal-header bg-danger text-netural-100 py-3">
          <h1 class="modal-title fs-6">刪除全部訂單</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body py-4 fs-6">
          確認刪除<span class="text-bg-danger mx-1 px-1 rounded-1">全部訂單</span> ?
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer bg-danger">
          <button type="button" class="btn btn-outline-netural-100" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-netural-900" @click="delOrdersAll()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import Modal from 'bootstrap/js/dist/modal';
// 引入 UI 組件
import LoadingUi from '@/components/LoadingUi.vue';
// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
// 引入 Composables 方法
import useApi from '@/composables/useApi';

// 取得 alert 方法
const alert = useAlertStore();
const { apiResAlert, apiErrAlert } = alert;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 取得 useApi 方法
const { fetchAdminOrders, fetchDelAdminOrder, fetchDelAdminOrderAll } = useApi();

const orders = ref({});
const pagination = ref({});

// 時間顯示
const time = computed(() => (value) => {
  const year = new Date(value).getFullYear();
  const month = new Date(value).getMonth() + 1;
  const day = new Date(value).getDay() + 1;
  return `${year}/${month}/${day}`;
});

// 取得訂單 GET
async function getOrders(page = 1) {
  isLoadingOn('isFullLoading');
  try {
    const res = await fetchAdminOrders(page);

    orders.value = res.data.orders;
    pagination.value = res.data.pagination;
  } catch (err) {
    apiErrAlert(err.response.data.message);
  } finally {
    isLoadingOff('isFullLoading');
  }
}

// 單一刪除 Delete
async function delOrder(orderId) {
  isLoadingOn('isFullLoading');
  try {
    const res = await fetchDelAdminOrder(orderId);
    await getOrders();
    apiResAlert(res.data.message);
  } catch (err) {
    apiErrAlert(err.response.data.message);
  } finally {
    isLoadingOff('isFullLoading');
  }
}

// 全部刪除 Delete
async function delOrdersAll() {
  isLoadingOn('isFullLoading');
  try {
    const res = await fetchDelAdminOrderAll();
    await getOrders();
    apiResAlert(res.data.message);
  } catch (err) {
    apiErrAlert(err.response.data.message);
  } finally {
    isLoadingOff('isFullLoading');
  }
}

// 選取方塊一次刪除 Delete

const refDeleteOrderModal = ref(null);
const deleteOrderModal = ref('');

function openModal() {
  deleteOrderModal.value.show();
}

onMounted(() => {
  deleteOrderModal.value = new Modal(refDeleteOrderModal.value);
  getOrders();
});
</script>

<style lang="scss" scoped></style>
