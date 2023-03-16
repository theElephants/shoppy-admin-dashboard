import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {
  const { currentMode } = useStateContext();
  
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-100 rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id='charts'
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
          background={currentMode === 'Dark' ? '#f3f4f6' : '#fff'}
        >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
        <SeriesCollectionDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {barCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      
    </div>
    
  )
}

export default Bar