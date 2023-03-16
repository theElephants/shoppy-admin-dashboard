import React from 'react';
import { Header, LineChart } from '../../components';


const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-gray-100 rounded-3xl'>
      <Header category="Chart" title="Inflation Rate" className="text-center dark:text-gray-200 text-xl mb-2 mt-3" />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line