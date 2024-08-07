<template>
  <!-- Loading -->
  <LoadingUi></LoadingUi>

  <div class="row">
    <div class="col-8">
      <div class="card shadow">
        <div class="card-header d-flex justify-content-between align-items-center py-3">
          <h5 class="fs-6">商品清單</h5>
          <button
            type="button"
            class="btn btn-sm btn-primary rounded-0 d-flex align-items-center"
            @click="openModal('create')"
          >
            新增優惠券
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
                <th scope="col">優惠券標題</th>
                <th scope="col" class="text-end">代碼(code)</th>
                <th scope="col" class="text-end">數量</th>
                <th scope="col" class="text-end">折扣數(%)</th>
                <th scope="col" class="text-end">到期時間</th>
                <th scope="col" class="text-end">是否啟用</th>
                <th scope="col" class="text-end">功能</th>
              </tr>
            </thead>
            <tbody class="align-middle">
              <tr v-for="coupon in coupons" :key="coupon.id">
                <td scope="row">{{ coupon.title }}</td>
                <td class="text-end">{{ coupon.code }}</td>
                <td class="text-end">{{ coupon.num }}</td>
                <td class="text-end">{{ coupon.percent }}</td>
                <td class="text-end">{{ formateDueDate(coupon.due_date) }}</td>
                <td class="text-end">
                  <svg width="20" height="20">
                    <use
                      v-if="coupon.is_enabled"
                      xlink:href="/public/icons/icons.svg#check-circle"
                      class="text-success"
                    />
                    <use v-else xlink:href="/public/icons/icons.svg#x-circle" class="text-danger" />
                  </svg>
                </td>
                <td class="text-end">
                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="btn btn-netural-800"
                      @click="openModal('edit', coupon)"
                    >
                      <svg width="14" height="14" class="d-flex">
                        <use xlink:href="/public/icons/icons.svg#box-arrow-up-right" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="openModal('delete', coupon)"
                    >
                      <svg width="14" height="14" class="d-flex">
                        <use xlink:href="/public/icons/icons.svg#trash3" />
                      </svg>
                    </button>
                  </div>
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
                  @click="getCoupons(pagination.current_page - 1)"
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
                  @click="getCoupons(page)"
                  :disabled="pagination.current_page === page"
                >
                  {{ page }}
                </button>
              </li>

              <li class="page-item" :class="{ 'd-none': pagination.has_next === false }">
                <button
                  type="button"
                  class="page-link"
                  @click="getCoupons(pagination.current_page + 1)"
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

  <!-- Modal -->
  <div class="modal fade" id="productModal" ref="refCouponModal">
    <div class="modal-dialog">
      <div class="modal-content" data-bs-theme="dark">
        <!-- Modal Header -->
        <div class="modal-header bg-netural-800 text-netural-100 py-3">
          <h1 class="modal-title fs-6">{{ isNew ? '新增優惠券' : '修改優惠券' }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body" data-bs-theme="light">
          <div class="mb-2">
            <label for="title" class="form-label fs-8"
              >優惠券標題<span class="text-danger ms-1">{{ errors['title'] }}</span></label
            >
            <input
              type="text"
              class="form-control form-control-sm"
              id="title"
              :class="{ 'is-invalid': errors['title'] }"
              placeholder="請輸入優惠券標題"
              v-model="title"
              v-bind="titleAttrs"
            />
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-2">
                <label for="percent" class="form-label fs-8"
                  >折扣<span class="text-danger ms-1">{{ errors['percent'] }}</span></label
                >
                <input
                  type="number"
                  min="1"
                  max="99"
                  class="form-control form-control-sm"
                  :class="{ 'is-invalid': errors['percent'] }"
                  id="percent"
                  placeholder="請輸入折扣百分比"
                  v-model="percent"
                  v-bind="percentAttrs"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="mb-2">
                <label for="code" class="form-label fs-8"
                  >代碼<span class="text-danger ms-1">{{ errors['code'] }}</span></label
                >
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="{ 'is-invalid': errors['code'] }"
                  id="code"
                  placeholder="請輸入折扣代碼"
                  v-model="code"
                  v-bind="codeAttrs"
                />
              </div>
            </div>
          </div>
          <div class="mb-2">
            <label class="form-label fs-8"
              >到期時間<span class="text-danger ms-1">{{ '測試錯誤' }}</span>
            </label>
            <VueDatePicker v-model="date" range :enable-time-picker="false" />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="isEnable"
              :checked="true"
              v-model="isEnabled"
              v-bind="isEnabledAttrs"
              :true-value="1"
              :false-value="0"
            />
            <label class="form-check-label fs-8" for="isEnable">是否啟用</label>
          </div>
          {{ errors }}
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
  <div class="modal fade" id="exampleModal" ref="refDelCouponModal">
    <div class="modal-dialog">
      <div class="modal-content" data-bs-theme="dark">
        <!-- Modal Header -->
        <div class="modal-header bg-danger text-netural-100 py-3">
          <h1 class="modal-title fs-6">刪除優惠券</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body py-4 fs-6">
          確認刪除<span class="text-bg-danger mx-1 px-1 rounded-1">{{ tempCoupon.title }}</span
          >優惠券 ?
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer bg-danger">
          <button type="button" class="btn btn-outline-netural-100" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-netural-900" @click="deleteCoupon(tempCoupon.id)">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useForm } from 'vee-validate'; // 引入 useForm 處理表單
import Modal from 'bootstrap/js/dist/modal';
// 引入 UI 組件
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
  fetchAdminCoupons,
  fetchAddAdminCoupons,
  fetchUpdateAdminCoupons,
  fetchDeleteAdminCoupons,
} = useApi();

// 取得 useAdminCoupons 資料、方法
const {
  coupons,
  pagination,
  tempCoupon,
  isNew,
  getCoupons,
  addCoupon,
  deleteCoupon,
  updateCoupon,
} = useAdminCoupons();

function useAdminCoupons() {
  const coupons = ref([]);
  const pagination = ref({});
  const tempCoupon = ref({});
  const isNew = ref(false);

  // 取得優惠券 GET
  async function getCoupons(page = 1) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchAdminCoupons(page);

      coupons.value = res.data.coupons;
      pagination.value = res.data.pagination;
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 新增優惠券 POST
  async function addCoupon(data) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchAddAdminCoupons(data);

      await getCoupons();
      apiResAlert(res.data.message);
      closeModal('coupon');
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 刪除優惠券 DELETE
  async function deleteCoupon(id) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchDeleteAdminCoupons(id);

      await getCoupons();
      apiResAlert(res.data.message);
      closeModal('delete');
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 修改優惠券 PUT
  async function updateCoupon(id, data) {
    isLoadingOn('isFullLoading');
    try {
      const res = await fetchUpdateAdminCoupons(id, data);

      await getCoupons();
      apiResAlert(res.data.message);
      closeModal('coupon');
    } catch (err) {
      apiErrAlert(err.response.data.message);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  onMounted(() => getCoupons());

  return {
    coupons,
    pagination,
    tempCoupon,
    isNew,
    getCoupons,
    addCoupon,
    deleteCoupon,
    updateCoupon,
  };
}

// 取得 useCouponModal 資料、方法
const { refCouponModal, refDelCouponModal, openModal, closeModal } = useCouponModal();

function useCouponModal() {
  const refCouponModal = ref(null);
  const refDelCouponModal = ref(null);
  const couponModal = ref('');
  const delCouponModal = ref('');

  // 開啟 Modal
  function openModal(type, item) {
    if (type === 'create') {
      handleSubmit((values, { resetForm }) => resetForm())();
      isNew.value = true;
      couponModal.value.show();
    } else if (type === 'edit') {
      isNew.value = false;
      tempCoupon.value = item;
      updateFileData(item);
      couponModal.value.show();
    } else if (type === 'delete') {
      isNew.value = false;
      tempCoupon.value = item;
      delCouponModal.value.show();
    }
  }

  // 關閉 Modal
  function closeModal(type) {
    if (type === 'coupon') {
      couponModal.value.hide();
      return;
    }
    delCouponModal.value.hide();
  }

  // 更新表單值
  function updateFileData(item) {
    title.value = item.title;
    percent.value = item.percent;
    code.value = item.code;
    dueDate.value = item.due_date;
    isEnabled.value = item.is_enabled;

    date.value[0] = new Date(item.start_date);
    date.value[1] = new Date(item.due_date);
  }

  onMounted(() => {
    couponModal.value = new Modal(refCouponModal.value);
    delCouponModal.value = new Modal(refDelCouponModal.value);
  });

  return {
    refCouponModal,
    refDelCouponModal,
    openModal,
    closeModal,
  };
}

// 取得 useVueDatepicker 資料
const { date, formateDueDate } = useVueDatepicker();

function useVueDatepicker() {
  const date = ref();

  // 渲染實際時間格式
  const formateDueDate = computed(() => (timeValue) => {
    const year = new Date(timeValue).getFullYear();
    const month = new Date(timeValue).getMonth() + 1;
    const day = new Date(timeValue).getDate();
    return `${year}/${month}/${day}`;
  });

  // 監聽 date，並格式化 endDate 時間戳記值至表單 dueDate 中
  watch(
    () => date.value,
    (newValue) => {
      const startTime = newValue[0];
      const endTime = newValue[1];
      startDate.value = new Date(startTime).getTime();
      dueDate.value = new Date(endTime).getTime();
    }
  );

  onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
  });

  return {
    date,
    formateDueDate,
  };
}

// 取出 schema 驗證規則
const { addCouponSchema } = useValidation();

// 使用 useForm 來處理表單驗證
const { defineField, handleSubmit, errors } = useForm({
  validationSchema: addCouponSchema,
});

// 定義表單欄位
const [title, titleAttrs] = defineField('title');
const [percent, percentAttrs] = defineField('percent');
const [code, codeAttrs] = defineField('code');
const [dueDate] = defineField('dueDate');
const [startDate] = defineField('startDate');
const [isEnabled, isEnabledAttrs] = defineField('isEnabled');

const onSubmit = handleSubmit((values) => {
  const data = {
    title: values.title,
    is_enabled: values.isEnabled,
    percent: values.percent,
    start_date: values.startDate,
    due_date: values.dueDate,
    code: values.code,
  };

  if (isNew.value) {
    addCoupon({ data });
  } else {
    updateCoupon(tempCoupon.value.id, { data });
  }
});
</script>

<style lang="scss" scoped>
.dp__theme_light {
  --dp-background-color: #fff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-disabled-color: #6bacea;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-border-color-focus: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff1900;
  --dp-marker-color: #ff6f60;
  --dp-tooltip-color: #fafafa;
  --dp-disabled-color-text: #8e8e8e;
  --dp-highlight-color: rgb(25 118 210 / 10%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #f3f3f3);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #212121);
  --dp-range-between-border-color: var(--dp-hover-color, #f3f3f3);
}

:deep(.dp__input) {
  border: 2px solid #999999 !important;
}
</style>
