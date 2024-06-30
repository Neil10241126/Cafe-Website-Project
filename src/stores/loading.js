import { defineStore } from 'pinia';
import { h } from 'vue';
import { useLoading } from 'vue-loading-overlay';
import loaderUi from '@/components/LoadingUi.vue';

export default defineStore('loadingStore', () => {
  const $loading = useLoading(
    {},
    {
      default: h(loaderUi),
    }
  );

  const loader = $loading.show({
    canCancel: true,
  });

  function loading() {
    $loading.show({
      canCancel: true,
      active: true,
    });
  }

  function hiden() {
    loader.hide();
    console.log();
  }

  return {
    loading,
    hiden,
  };
});
