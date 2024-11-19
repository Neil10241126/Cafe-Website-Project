import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
// // 引入深色主題配置
import darkMode from './black-mode.json';
// 將 Json 格式轉換物件格式
const obj = JSON.parse(JSON.stringify(darkMode));

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default function useLine(element) {
  // 註冊深色主題 obj，並命名為 'dark'
  echarts.registerTheme('dark', obj);

  // 1.初始化 : 傳入HTML element，並套用主題色 'dark'
  const lineChart = echarts.init(element, 'dark');

  // 2. 封裝參數設定
  const setOption = (data) => {
    const option = {
      grid: {
        top: '5%',
        left: '0',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
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
      },
      series: [
        {
          data,
          type: 'line',
          symbolSize: 12,
          lineStyle: {
            color: '#fddd60',
          },
          itemStyle: {
            borderColor: 'rgba(253, 221, 96, 0.25)',
            borderWidth: 12,
          },
          areaStyle: {
            opacity: 0.3,
          },
        },
      ],
    };

    return lineChart.setOption(option);
  };

  // 3. 圖表響應式 RWD : https://stackoverflow.com/questions/33454946/echarts-and-bootstrap-responsive-width
  new ResizeObserver(() => lineChart.resize()).observe(element);

  return {
    setOption,
  };
}
