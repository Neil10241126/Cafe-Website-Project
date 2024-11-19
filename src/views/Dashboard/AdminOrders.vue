<template>
  <LoadingUi></LoadingUi>

  <!-- Main Chart Group -->
  <div class="row gy-3 mb-3 mb-md-4">
    <div class="col-12 col-md-8">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">每日銷售排行</h3>
            <span class="text-db-netural-dark">列出最高前五名商品。</span>
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
          <div ref="lineElement" class="" style="height: 245px"></div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between px-md-4">
          <div>
            <h3 class="fs-6 text-db-netural lh-base mb-0">服務數據</h3>
            <span class="text-db-netural-dark">評分由 1 ~ 5 平均</span>
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

  <!-- Main Card Table -->
  <div class="card">
    <div class="card-header d-flex justify-content-between px-md-4">
      <div>
        <h3 class="fs-6 text-db-netural lh-base mb-0">所有訂單</h3>
        <span class="text-db-netural-dark">總計 {{ orders.length }} 筆</span>
      </div>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-netural me-2">
          <svg width="20" height="20">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-filter"></use>
          </svg>
          <span class="d-none d-md-block ms-2">篩選</span>
        </button>
        <button type="button" class="btn btn-danger" @click="delModalAll.show()">
          <svg width="20" height="20">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-trash"></use>
          </svg>
          <span class="d-none d-md-block ms-2">全部刪除</span>
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="card-body table-responsive px-md-4">
      <table class="table table-db-background-light">
        <thead class="align-middle text-nowrap">
          <tr>
            <th scope="col" class="fw-normal py-3 pe-3">項次</th>
            <th scope="col" class="fw-normal pe-3">訂單編號 ( ID )</th>
            <th scope="col" class="fw-normal pe-3">生成時間</th>
            <th scope="col" class="fw-normal pe-3">商品數量</th>
            <th scope="col" class="fw-normal pe-3">是否付款</th>
            <th scope="col" class="fw-normal text-end pe-3">是否出貨</th>
            <th scope="col" class="fw-normal text-end pe-0">操作</th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          <tr v-for="order in orders" :key="order.id">
            <td scope="row" class="pt-3 pe-3 border-0">{{ order.num }}</td>
            <td class="pt-3 pe-3 border-0">
              <div style="width: 200px">
                <p class="mb-0 text-truncate">{{ order.id }}</p>
              </div>
            </td>
            <td class="pt-3 pe-3 border-0">{{ timeFormate(orders.create_at) }}</td>
            <td class="pt-3 pe-3 border-0">{{ Object.keys(order.products).length }} 件</td>
            <td class="pt-3 pe-3 border-0">
              <span class="tag tag-success" :class="{ 'tag-danger': !order.is_paid }">{{
                order.is_paid ? '已付款' : '未付款'
              }}</span>
            </td>
            <td class="pt-3 pe-3 border-0 text-end">
              <span class="tag tag-success">{{ order.is_paid ? '已出貨' : '未出貨' }}</span>
            </td>
            <td class="pt-3 pe-0 border-0">
              <div class="d-flex justify-content-end">
                <RouterLink
                  :to="`/admin/orders/${order.id}`"
                  class="btn btn-primary me-1"
                  @click="tempOrder = { ...order }"
                >
                  <svg width="14" height="14" class="me-1">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                  </svg>
                  <span class="fs-9">編輯</span>
                </RouterLink>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="delModal.show(), (orderID = order.id)"
                >
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
              @click.prevent="getAdminOrders(pagination.current_page - 1)"
              href="#"
              aria-label="Previous"
            >
              <svg width="16" height="16">
                <use xlink:href="/public/icons/dashboard-icons.svg#fig-left"></use>
              </svg>
            </a>
          </li>
          <li v-for="page in pagination.total_pages" :key="page + '123'" class="page-item">
            <a
              class="page-link"
              :class="[
                { active: page === pagination.current_page },
                { disabled: page === pagination.current_page },
              ]"
              href="#"
              @click.prevent="getAdminOrders(page)"
              >{{ page }}</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              :class="{ disabled: !pagination.has_next }"
              href="#"
              aria-label="Next"
              @click.prevent="getAdminOrders(pagination.current_page + 1)"
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

  <!-- 單一刪除 Modal -->
  <DeleteModal
    ref="delModalEl"
    title="刪除訂單"
    :content="orderID"
    @delete-emit="deleteAdminOrder(orderID)"
  ></DeleteModal>

  <!-- 全部刪除 Modal -->
  <DeleteModal
    ref="delModalAllEl"
    title="刪除全部訂單"
    content="全部訂單"
    @delete-emit="deleteAdminOrdersAll()"
  ></DeleteModal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import Modal from 'bootstrap/js/dist/modal';

// 引入自定義組件
import LoadingUi from '@/components/LoadingUi.vue';
import DeleteModal from '@/components/Dashboard/DeleteModal.vue';

// 引入 Composables 方法
import useApi from '@/composables/useApi';
import useTimeFormate from '@/composables/useTimeformate';

// 引入 Pinia 狀態管理
import useAlertStore from '@/stores/alert';
import useLoadingStore from '@/stores/loading';
import useOrderStore from '@/stores/order';

// 取得 useApi 方法
const { fetchAdminOrders, fetchDelAdminOrder, fetchDelAdminOrderAll } = useApi();

// 取得 TimeFormate 方法
const { timeFormate } = useTimeFormate();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 取得 order 資料
const orderStore = useOrderStore();
const { tempOrder } = storeToRefs(orderStore);

const { orders, orderID, pagination, getAdminOrders, deleteAdminOrder, deleteAdminOrdersAll } =
  useAdminOrders();

function useAdminOrders() {
  const orders = ref([]);
  const orderID = ref('');
  const pagination = ref({});

  // 取得訂單 GET
  async function getAdminOrders(page = 1) {
    isLoadingOn('isFullLoading');

    try {
      const { data } = await fetchAdminOrders(page);
      pagination.value = data.pagination;
      orders.value = data.orders;
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 刪除單一訂單 DELETE
  async function deleteAdminOrder(id) {
    isLoadingOn('isFullLoading');

    try {
      const res = await fetchDelAdminOrder(id);
      apiResAlert(res.data.message);
      getAdminOrders();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      delModal.value.hide();
      isLoadingOff('isFullLoading');
    }
  }

  // 刪除全部訂單 DELETE
  async function deleteAdminOrdersAll() {
    isLoadingOn('isFullLoading');

    try {
      const { data } = await fetchDelAdminOrderAll();
      apiResAlert(data.message);
      getAdminOrders();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      delModalAll.value.hide();
      isLoadingOff('isFullLoading');
    }
  }

  onMounted(() => getAdminOrders());

  return {
    orders,
    orderID,
    pagination,
    getAdminOrders,
    deleteAdminOrder,
    deleteAdminOrdersAll,
  };
}

const { delModalEl, delModalAllEl, delModal, delModalAll } = useOderModal();

function useOderModal() {
  const delModalEl = ref(null);
  const delModalAllEl = ref(null);
  const delModal = ref('');
  const delModalAll = ref('');

  onMounted(() => {
    delModal.value = new Modal(delModalEl.value.$el);
    delModalAll.value = new Modal(delModalAllEl.value.$el);
  });

  return {
    delModalEl,
    delModalAllEl,
    delModal,
    delModalAll,
  };
}
</script>

<style lang="scss" scoped></style>
