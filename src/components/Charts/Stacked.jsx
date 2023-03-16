import React from 'react';
import { ChartComponent, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective } from '@syncfusion/ej2-react-charts/src';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
    width={width}
    height={height}
    id="charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{ border: {width:0} }}
    tooltip={{ enable: true }}
    background={ currentMode === 'Dark' ? '#f3f4f6' : '#fff' }
    legendSettings={{ background: 'white' }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked 