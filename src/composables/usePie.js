// ECharts Pie 組件相關引入
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
// 引入深色主題配置
import darkMode from './black-mode.json';
// 將 Json 格式轉換物件格式
const obj = JSON.parse(JSON.stringify(darkMode));

echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]);

export default function usePie(element) {
  // 註冊深色主題 obj，並命名為 'dark'
  echarts.registerTheme('dark', obj);

  // 1.初始化 : 傳入HTML element，並套用主題色 'dark'
  const pieChart = echarts.init(element, 'dark');

  // 2. 封裝參數設定
  const setOption = (data) => {
    const option = {
      legend: {
        bottom: 10,
        left: 'center',
        icon: 'circle',
        itemWidth: 12,
        itemHeight: 12,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#F2F2F2',
        },
      },
      series: [
        {
          name: '商品占比',
          type: 'pie',
          radius: ['55%', '80%'],
          bottom: '30px',
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              lineHeight: 30,
              fontWeight: 'bold',
              formatter: '{b} \n {d}%',
            },
          },
          data,
        },
      ],
    };

    return pieChart.setOption(option);
  };

  // 3. 圖表響應式 RWD : https://stackoverflow.com/questions/33454946/echarts-and-bootstrap-responsive-width
  new ResizeObserver(() => pieChart.resize()).observe(element);

  return {
    setOption,
  };
}
