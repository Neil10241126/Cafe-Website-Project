<template>
  <HeaderView></HeaderView>
  <div class="bg-secondary-tint">
    <RouterView></RouterView>
  </div>
  <FooterView></FooterView>
</template>

<script setup>
import HeaderView from '@/components/HeaderView.vue';
import FooterView from '@/components/FooterView.vue';
</script>

<style lang="scss" scoped>
</style>
