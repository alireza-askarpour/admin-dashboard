import React, { FC } from 'react'
import ReactApexChart from 'react-apexcharts'

import Icon from '../../Icon'

interface ISeries {
  name: string
  data: number[]
}

interface IChartCardProps {
  icon: string
  title: string
  result: string
  series: ISeries
  color: string
  bgIcon: string
}

const AreaChartCard: FC<IChartCardProps> = ({
  icon,
  title,
  result,
  series,
  color,
  bgIcon,
}) => {
  return (
    <div className="rounded-md overflow-hidden bg-[#283046] flex flex-col justify-between items-start">
      <div className="w-full p-5 pb-0">
        <div
          className={`w-[45px] h-[45px] shadow-main mb-[14px] flex items-center justify-center rounded-full bg-[${bgIcon}]`}
        >
          <Icon name={icon} color={color} width={21} height={21} />
        </div>
        <div>
          <h2 className="text-[23px] font-bold">{result}</h2>
          <span className="text-sm">{title}</span>
        </div>
      </div>
      <div className="w-full">
        <ReactApexChart
          options={{
            chart: {
              id: series.name,
              group: series.name,
              height: 80,
              sparkline: {
                enabled: true,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: 'smooth',
              width: 3,
            },
            colors: [color],
            tooltip: {
              theme: 'dark',
              x: {
                show: false,
              },
            },
            grid: {
              show: false,
            },
          }}
          series={[series]}
          type="area"
          height={90}
        />
      </div>
    </div>
  )
}

export default AreaChartCard
