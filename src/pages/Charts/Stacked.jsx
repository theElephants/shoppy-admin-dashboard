import React from 'react';
import { stackedChartData} from '../../data/dummy';

import { ChartsHeader, Stacked as StackedChart } from '../../components';


const Stacked = () => {

  return (
    <div className='m-4 md:10 mt-24 p-10 bg-white dark:bg-gray-100 rounded-3xl'>
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className='w-full'>
      <StackedChart />
      </div>
    </div>
  )
}



export default Stacked