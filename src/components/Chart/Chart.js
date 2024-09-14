import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from './Dataset';

const chartSetting = {
  xAxis: [
    {
      label:'',
    },
  ],
  width: 800,
  height: 250,
};


export default function GridDemo() {
  return (
    <BarChart
      dataset={dataset}
      colors={["#8FD3F7","#0E94A0","#50E3F0"]}
      yAxis={[{ scaleType: 'band', dataKey: 'equity'}]}
      series={[{ dataKey: 'a', label: 'Private Equity Associate' },
      { dataKey: 'b', label: 'Private Equity Associate'},
      { dataKey: 'c', label: 'Public Equity Associate'}]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
  );
}
