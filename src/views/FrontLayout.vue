<template>
  <HeaderView></HeaderView>
  <div class="front-view bg-secondary-tint">
    <RouterView></RouterView>
  </div>
  <FooterView></FooterView>
</template>

<script setup>
// 引入 UI 組件
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
</script>

<style lang="scss" scoped>
.front-view {
  margin-top: 77px;

  @media (min-width: 992px) {
    margin-top: 100px;
  }
}
</style>
