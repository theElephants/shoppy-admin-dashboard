import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const AreaChart = () => {
  const { currentMode } = useStateContext();
  const border = { color: 'green', width: 2 };

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category="Area" title="Inflation Rate in Percentage" />
      <ChartComponent
        id='area-chart'
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{ enable: true }}
      >
      <Inject services={[SplineAreaSeries, DateTime, Legend, ]} />
      <SeriesCollectionDirective xName='x' yName='y' type='Bar' columnWidth={0.5} columnSpacing={0.7} fill='red' border={border} >
        {areaCustomSeries.map((item, index) =>
        <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
      </ChartComponent>
    </div>
    
  )
}

export default AreaChart