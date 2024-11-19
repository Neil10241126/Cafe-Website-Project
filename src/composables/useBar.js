// ECharts Bar 組件相關引入
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
// 引入深色主題配置
import darkMode from './black-mode.json';
// 將 Json 格式轉換物件格式
const obj = JSON.parse(JSON.stringify(darkMode));

echarts.use([GridComponent, BarChart, CanvasRenderer]);

export default function useBar(element) {
  // 註冊深色主題 obj，並命名為 'dark'
  echarts.registerTheme('dark', obj);

  // 1.初始化 : 傳入HTML element，並套用主題色 'dark'
  const barChart = echarts.init(element, 'dark');

  // 2. 封裝參數設定
  const setOption = (data) => {
    const option = {
      grid: {
        left: '0',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        showContent: true,
      },
      legend: {
        show: true,
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#F2F2F2',
        },
      },
      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        axisLabel: {
          padding: [6, 0, 0, 0],
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: [2, 2],
          },
        },
      },
      series: data,
      stateAnimation: {
        duration: 500,
        easing: 'cubicOut',
      },
    };

    return barChart.setOption(option);
  };

  // 3. 圖表響應式 RWD : https://stackoverflow.com/questions/33454946/echarts-and-bootstrap-responsive-width
  new ResizeObserver(() => barChart.resize()).observe(element);

  return {
    setOption,
  };
}
