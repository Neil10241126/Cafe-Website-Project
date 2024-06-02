<template>
  <!-- small -->
  <div v-if="size === 'small'" class="input-group flex-nowrap">
    <button class="btn-sm btn-primary p-0" type="button"
      @click="btnNumber--" :class="{'pointer-events-none': btnNumber === 0}">-</button>
    <input type="text" class="add-input-sm form-control fs-8 bg-transparent border-2
     border-primary text-center p-0" :value="btnNumber" readonly>
    <button class="btn-sm btn-primary p-0" type="button"
      @click="btnNumber++" :class="{'pointer-events-none': btnNumber === 10}">+</button>
  </div>
  <!-- normal -->
  <div v-else-if="size === 'normal'"  class="input-group flex-nowrap">
    <button class="btn btn-primary fs-6 p-0" type="button"
      @click="btnNumber--" :class="{'pointer-events-none': btnNumber === 0}">-</button>
    <input type="text" class="add-input form-control fs-7 bg-transparent border-2
      border-primary text-center p-0" :value="btnNumber" readonly>
    <button class="btn btn-primary fs-6 p-0" type="button"
      @click="btnNumber++" :class="{'pointer-events-none': btnNumber === 10}">+</button>
  </div>
  <!-- large -->
  <div v-else-if="size === 'large'" class="input-group flex-nowrap">
    <button class="btn-lg btn-primary fs-6 p-0" type="button"
      @click="btnNumber--" :class="{'pointer-events-none': btnNumber === 0}">-</button>
    <input type="text" class="add-input-lg form-control fs-7 bg-transparent border-2
     border-primary text-center p-0" :value="btnNumber" readonly>
    <button class="btn-lg btn-primary fs-6 p-0" type="button"
      @click="btnNumber++" :class="{'pointer-events-none': btnNumber === 10}">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const btnNumber = ref(0);

defineProps({
  size: {
    type: String,
    default() {
      return 'small';
    },
  },
});

</script>

<style lang="scss" scoped>
@import "/src/assets/helper/colors";

.btn {
  width: 38px;
  height: 38px;
  &.disabled {
    background: $primary;
    border: 1px solid $primary;
    opacity: 1;
  }
  &-sm {
    width: 24px;
    height: 24px;
  }
  &-lg {
    width: 48px;
    height: 48px;
  }
}

.add-input {
  height: 38px;
  max-width: 60px;
  &-sm {
    height: 24px;
    max-width: 30px;
  }
  &-lg {
    height: 48px;
    max-width: 70px;
  }
}

</style>
