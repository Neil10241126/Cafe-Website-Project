<template>
  <CountUp :end-val="props.endValue" :duration="props.duration" :options="options"></CountUp>
</template>

<script setup>
// vue-countup-v3 文件教學 :https://github.com/jizai1125/vue-countup-v3
import CountUp from 'vue-countup-v3';

const props = defineProps({
  endValue: Number,
  duration: Number,
});

const options = { // 共用選項配置 :
  enableScrollSpy: true, // (boolean) 目標進入可視範圍才開始動畫
  suffix: ' +', // (string) : 数值后缀
};
</script>
