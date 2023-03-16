import React from 'react';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping} from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';


const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:10 mt-24 p-10 bg-white dark:bg-gray-100 rounded-3xl'>
      <ChartsHeader category="Color Mapping" title="USA Climate - Weather by Month" />
      <div className='w-full'>
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: {width: 0} }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={ currentMode === 'Dark' ? '#f3f4f6' : '#fff' }
        >
          <Inject services={[ ColumnSeries, Tooltip, Category, Legend ]} />
          <SeriesCollectionDirective>
            <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight:10,
            }}
          />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping