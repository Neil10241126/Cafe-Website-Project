<template>
  <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header danger">
          <h5 class="modal-title fs-6 fw-normal">{{ title }}</h5>
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
          <div class="d-flex align-items-center text-chart-red mb-3">
            <svg width="20" height="20" class="me-2">
              <use xlink:href="/public/icons/dashboard-icons.svg#fig-error"></use>
            </svg>
            <p class="mb-0">警告:<span class="ms-2">此操作將會無法復原 !</span></p>
          </div>
          <p class="mb-0">
            確定將 <strong class="text-chart-red"> {{ content }} </strong> 進行刪除 ?
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-netural" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="emits('deleteEmit')">
            確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});

const emits = defineEmits(['deleteEmit']);
</script>

<style lang="scss" scoped></style>
