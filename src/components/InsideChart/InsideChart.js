import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import { mobileAndDesktopOS, valueFormatter } from './webUsageStats';

export default function PieAnimation() {
  const [radius, setRadius] = React.useState(80);
  const [itemNb, setItemNb] = React.useState(2);

  return (
    <Box>
      <PieChart
        height={300}
        width={500}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            outerRadius: radius+30,
            innerRadius: radius,
            arcLabel:  '',
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
      />
    </Box>
  );
}
