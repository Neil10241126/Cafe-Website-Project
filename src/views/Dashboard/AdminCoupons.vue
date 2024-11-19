<template>
  <LoadingUi></LoadingUi>

  <DeleteModal
    ref="delModalEl"
    title="刪除優惠券"
    :content="tempCoupon.title"
    @delete-emit="deleteAdminCoupon(couponID)"
  ></DeleteModal>

  <div
    class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 mb-lg-4"
    style="position: relative; z-index: 1"
  >
    <div class="d-flex align-items-center mb-3 mb-md-0">
      <div id="energy-bar" :style="{ '--energy-bar-width': `${energyBarPercent}%` }">
        {{ activeCoupons }}/ {{ coupons.length }}
      </div>
      <span class="text-db-netural-dark ms-3">啟用優惠券數量 {{ energyBarPercent }}%</span>
    </div>

    <div class="input-group w-auto border border-2 border-db-netural-dark rounded-2">
      <div class="input-group-text bg-transparent border-0 p-2">
        <svg width="24" height="24" class="text-db-netural-dark">
          <use xlink:href="/public/icons/dashboard-icons.svg#fig-search"></use>
        </svg>
      </div>
      <input type="search" class="form-control border-0" placeholder="搜尋優惠券名稱" />
    </div>
  </div>

  <div class="card bg-transparent mb-3 mb-lg-4">
    <div
      class="card-header d-flex justify-content-between border border-db-background-lighten px-lg-4"
    >
      <button type="button" class="btn btn-outline-netural" @click="setDefaultValue()">
        <svg width="24" height="24">
          <use xlink:href="/public/icons/dashboard-icons.svg#fig-reset"></use>
        </svg>
        <span class="ms-2 d-none d-md-block">預設值</span>
      </button>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-netural me-2">
          <svg width="24" height="24">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-undo"></use>
          </svg>
          <span class="ms-2 d-none d-md-block">上一步</span>
        </button>
        <button
          type="button"
          class="btn btn-primary"
          :class="{ disabled: !meta.valid }"
          @click="onSubmit()"
        >
          <svg width="24" height="24">
            <use
              :xlink:href="`/public/icons/dashboard-icons.svg#fig-${isNew ? 'plus' : 'save'}`"
            ></use>
          </svg>
          <span class="ms-2 d-none d-md-block">{{ isNew ? '新增優惠券' : '儲存設定' }}</span>
        </button>
      </div>
    </div>

    <div
      class="card-body border border-db-background-lighten border-top-0 rounded-bottom-2 px-lg-4"
    >
      <div class="row row-cols-2 row-cols-lg-6 g-3 g-lg-4">
        <div class="col">
          <label for="name" class="form-label text-db-netural-dark mb-3"
            >標題
            <span class="fs-8 text-chart-red ms-1">{{ errors.title }}</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="優惠券名稱"
            v-model="tempCoupon.title"
          />
        </div>
        <div class="col">
          <label for="discount" class="form-label text-db-netural-dark mb-3"
            >折扣 (%)
            <span class="fs-8 text-chart-red ms-1">{{ errors.percent }}</span>
          </label>
          <input
            type="number"
            min="1"
            max="99"
            class="form-control"
            id="discount"
            placeholder="折扣百分比"
            v-model.number="tempCoupon.percent"
          />
        </div>
        <div class="col">
          <label for="start-time" class="form-label text-db-netural-dark mb-3"
            >開始時間
            <span class="fs-8 text-chart-red ms-1">{{ errors.start_date }}</span>
          </label>
          <VueDatePicker
            ref="datePickerStart"
            model-type="timestamp"
            :dark="true"
            :enable-time-picker="false"
            v-model="tempCoupon.start_date"
          />
        </div>
        <div class="col">
          <label for="end-time" class="form-label text-db-netural-dark mb-3"
            >結束時間
            <span class="fs-8 text-chart-red ms-1">{{ errors.due_date }}</span>
          </label>
          <VueDatePicker
            ref="datePickerEnd"
            model-type="timestamp"
            :dark="true"
            :enable-time-picker="false"
            v-model="tempCoupon.due_date"
          />
        </div>
        <div class="col">
          <label for="code" class="form-label text-db-netural-dark mb-3"
            >代碼 (code)
            <span class="fs-8 text-chart-red ms-1">{{ errors.code }}</span>
          </label>
          <input
            type="text"
            class="form-control"
            id="code"
            placeholder="折扣優惠碼"
            v-model="tempCoupon.code"
          />
        </div>
        <div class="col">
          <label for="isEnable" class="form-label text-db-netural-dark mb-3"
            >是否啟用
            <span class="fs-8 text-chart-red ms-1">{{ errors.is_enabled }}</span>
          </label>
          <div>
            <input
              type="checkbox"
              class="input-toggle"
              id="isEnable"
              :true-value="1"
              :false-value="0"
              v-model="tempCoupon.is_enabled"
            />
            <label for="isEnable" class="checkbox-switch"></label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 優惠券 Card -->
  <div class="card">
    <div class="card-header d-flex justify-content-between px-md-4">
      <div>
        <h3 class="fs-6 text-db-netural lh-base mb-0">優惠券清單</h3>
        <span class="text-db-netural-dark">總計 {{ coupons.length }} 筆</span>
      </div>

      <div class="d-flex align-items-center">
        <button type="button" class="btn btn-outline-netural">
          <svg width="20" height="20">
            <use xlink:href="/public/icons/dashboard-icons.svg#fig-filter"></use>
          </svg>
          <span class="d-none d-md-block ms-2">篩選</span>
        </button>
      </div>
    </div>

    <!-- 優惠券清單 Table -->
    <div class="card-body table-responsive px-md-4">
      <table class="table table-db-background-light">
        <thead class="align-middle text-nowrap">
          <tr>
            <th scope="col" class="fw-normal py-3 pe-3">項次</th>
            <th scope="col" class="fw-normal pe-3">標題</th>
            <th scope="col" class="fw-normal pe-3">開始時間</th>
            <th scope="col" class="fw-normal pe-3">結束時間</th>
            <th scope="col" class="fw-normal pe-3">折扣 (%)</th>
            <th scope="col" class="fw-normal pe-3">代碼 (code)</th>
            <th scope="col" class="fw-normal text-end pe-3">是否啟用</th>
            <th scope="col" class="fw-normal text-end pe-0">操作</th>
          </tr>
        </thead>
        <tbody class="align-middle text-nowrap">
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td scope="row" class="pt-3 pe-3 border-0">{{ coupon.num }}</td>
            <td class="pt-3 pe-3 border-0">{{ coupon.title }}</td>
            <td class="pt-3 pe-3 border-0">{{ timeFormate(coupon.start_date) }}</td>
            <td class="pt-3 pe-3 border-0">{{ timeFormate(coupon.due_date) }}</td>
            <td class="pt-3 pe-3 border-0">{{ coupon.percent }}%</td>
            <td class="pt-3 pe-3 border-0">{{ coupon.code }}</td>
            <td class="pt-3 pe-3 border-0 text-end">
              <span class="tag tag-success" :class="{ 'tag-danger': !coupon.is_enabled }">{{
                coupon.is_enabled ? '已啟用' : '未啟用'
              }}</span>
            </td>
            <td class="pt-3 pe-0 border-0">
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-primary me-1"
                  @click="setUpdateValue(coupon), (isNew = false)"
                >
                  <svg width="14" height="14" class="me-1">
                    <use xlink:href="/public/icons/dashboard-icons.svg#fig-pen"></use>
                  </svg>
                  <span class="fs-9">編輯</span>
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="delModal.show(), setUpdateValue(coupon)"
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
              href="#"
              aria-label="Previous"
              @click.prevent="getAdminCoupons(pagination.current_page - 1)"
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
              @click.prevent="getAdminCoupons(page)"
              >{{ page }}</a
            >
          </li>

          <li class="page-item">
            <a
              class="page-link"
              :class="{ disabled: !pagination.has_next }"
              href="#"
              aria-label="Next"
              @click.prevent="getAdminCoupons(pagination.current_page + 1)"
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
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
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

import { useForm } from 'vee-validate';
import useValidation from '@/composables/useValidation';

// 取得 useApi 方法
const {
  fetchAdminCoupons,
  fetchAddAdminCoupons,
  fetchUpdateAdminCoupons,
  fetchDeleteAdminCoupons,
} = useApi();

// 取得 timeFormate 方法
const { timeFormate } = useTimeFormate();

// 取得 alert 方法
const alertStore = useAlertStore();
const { apiResAlert, apiErrAlert } = alertStore;

// 取得 loading 方法
const loaderStore = useLoadingStore();
const { isLoadingOn, isLoadingOff } = loaderStore;

// 使用自定義的 useAdminCoupon hook 來處理優惠券 api CRUD 操作
const {
  coupons,
  couponID,
  pagination,
  activeCoupons,
  energyBarPercent,
  isNew,
  createAdminCoupn,
  updateAdminCoupon,
  deleteAdminCoupon,
} = useAdminCoupon();

function useAdminCoupon() {
  // 狀態管理
  const coupons = ref([]); // 優惠券列表
  const couponID = ref(''); // 當前操作的優惠券 ID
  const pagination = ref({}); // 分頁資訊
  const isNew = ref(true); // 是否為新增狀態

  // 計算啟用中的優惠券數量
  const activeCoupons = computed(() => {
    return coupons.value.reduce((old, { is_enabled: isEnabled }) => {
      return old + isEnabled;
    }, 0);
  });

  // 計算啟用優惠券的百分比
  const energyBarPercent = computed(() => {
    const result = (activeCoupons.value / coupons.value.length) * 100;
    return result.toFixed(0);
  });

  // 獲取分頁優惠券列表 GET
  async function getAdminCoupons(page = 1) {
    isLoadingOn('isFullLoading');

    try {
      const { data } = await fetchAdminCoupons(page);
      coupons.value = data.coupons;
      pagination.value = data.pagination;
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 新增優惠券 POST
  async function createAdminCoupn(data) {
    isLoadingOn('isFullLoading');

    try {
      const { data: couponData } = await fetchAddAdminCoupons(data);
      apiResAlert(couponData.message);
      getAdminCoupons();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 更新優惠券 PUT
  async function updateAdminCoupon(id, data) {
    isLoadingOn('isFullLoading');

    try {
      const { data: couponData } = await fetchUpdateAdminCoupons(id, data);
      apiResAlert(couponData.message);
      isNew.value = true;
      getAdminCoupons();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 刪除優惠券 DELETE
  async function deleteAdminCoupon(id) {
    isLoadingOn('isFullLoading');

    try {
      const { data } = await fetchDeleteAdminCoupons(id);
      apiResAlert(data.message);
      delModal.value.hide();
      getAdminCoupons();
    } catch (err) {
      const { data, status } = err.response;
      apiErrAlert(`${status} ${data.message}`);
    } finally {
      isLoadingOff('isFullLoading');
    }
  }

  // 組件掛載時獲取優惠券列表
  onMounted(() => getAdminCoupons());

  return {
    coupons,
    couponID,
    pagination,
    activeCoupons,
    energyBarPercent,
    isNew,
    createAdminCoupn,
    updateAdminCoupon,
    deleteAdminCoupon,
  };
}

// 使用自定義 useModal hook 來處理 Modal 相關邏輯
const { delModalEl, delModal, datePickerStart, datePickerEnd } = useModal();

function useModal() {
  // 狀態管理
  const delModalEl = ref(null); // 刪除彈窗 ref element
  const delModal = ref(''); // 刪除彈窗 實體

  const datePickerStart = ref(null); // 起始日期選擇器 ref element
  const datePickerEnd = ref(null); // 結束日期選擇器 ref element

  onMounted(() => {
    // 組件生成時掛載 Modal 實體至 delModal
    delModal.value = new Modal(delModalEl.value.$el);

    // 設置日期選擇器輸入框的 ID
    const inputStartEl = datePickerStart.value.$el.querySelector('input');
    const inputEndEl = datePickerEnd.value.$el.querySelector('input');
    inputStartEl.id = 'start-time';
    inputEndEl.id = 'end-time';
  });

  return {
    delModalEl,
    delModal,
    datePickerStart,
    datePickerEnd,
  };
}

// 取出 schema 驗證規則
const { addCouponSchema } = useValidation();

// 使用 useForm 來處理表單驗證，並套用驗證
const { defineField, setValues, handleSubmit, errors, meta } = useForm({
  validationSchema: addCouponSchema,
});

// 使用自定義的 useCouponForm hook 來處理優惠券表單邏輯
const { tempCoupon, setUpdateValue, setDefaultValue, onSubmit } = useCouponForm();

function useCouponForm() {
  // 定義表單欄位
  const tempCoupon = reactive({
    title: defineField('title')[0],
    percent: defineField('percent')[0],
    start_date: defineField('start_date')[0],
    due_date: defineField('due_date')[0],
    code: defineField('code')[0],
    is_enabled: defineField('is_enabled')[0],
  });

  // 設置更新時的表單值
  function setUpdateValue(data) {
    couponID.value = data.id;

    setValues({
      title: data.title,
      percent: data.percent,
      start_date: data.start_date,
      due_date: data.due_date,
      code: data.code,
      is_enabled: data.is_enabled,
    });
  }

  // 設置默認的表單值
  function setDefaultValue() {
    const oneWeekLater = new Date(new Date().setDate(new Date().getDate() + 7)).getTime();

    setValues({
      title: '預設優惠券',
      percent: 80,
      start_date: new Date().getTime(),
      due_date: oneWeekLater,
      code: 'testCode',
      is_enabled: 1,
    });

    //
    isNew.value = true;
  }

  // 表單處理提交函數
  const onSubmit = handleSubmit((data, { resetForm }) => {
    // 判斷是新增還是更新操作
    if (isNew.value) {
      createAdminCoupn({ data });
    } else {
      updateAdminCoupon(couponID.value, { data });
    }

    // 送出表單後清除內容
    resetForm();
  });

  return {
    tempCoupon,
    setUpdateValue,
    setDefaultValue,
    onSubmit,
  };
}
</script>

<style lang="scss" scoped>
// 能量條 Style
#energy-bar {
  position: relative;
  width: 75px;
  color: #a0a0a0;
  text-align: center;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    width: var(--energy-bar-width, 0%);
    height: 100%;
    background: #2fe5a7;
    z-index: -1;
    transition: width 0.5s;
  }
}

// Vue Datepicker 日曆套件 Style
// 僅調整部分變數以統一表單設計，其他客製化請參考官方文件
:deep(.dp__theme_dark) {
  // dark variable
  --dp-border-color: #a0a0a0;
  --dp-border-color-focus: #fcc55f;
  --dp-primary-color: #fcc55f;
  --dp-primary-text-color: #282828;

  // :root variable
  --dp-input-padding: 8px 30px 8px 12px;

  .dp__input {
    border-width: 2px;
  }
}
</style>
