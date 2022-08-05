import ReactApexChart from 'react-apexcharts'

const SupportTrackerCard = () => {
  return (
    <div className="relative bg-[#283046] rounded-md p-5 h-full">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Support Tracker</h4>
        <p className="text-right text-sm text-[#676d7d]">Last 7 Days</p>
      </div>

      <div className="sm:flex items-start mt-2">
        <div className="flex justify-center items-center flex-col sm:w-1/6">
          <h1 className="mt-2 font-bold text-[44px]">163</h1>
          <small className="text-xs text-[#b4b7bd]">Tickets</small>
        </div>

        <div className="flex items-center justify-center sm:w-[83.333333%]">
          <ReactApexChart
            options={{
              chart: {
                height: 280,
                type: 'radialBar',
                offsetY: -10,
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '12px',
                      color: '#5e5873',
                      offsetY: -5,
                    },
                    value: {
                      offsetY: 10,
                      fontSize: '22px',
                      color: '#5e5873',
                      formatter: function (val) {
                        return val + '%'
                      },
                    },
                  },
                },
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  shadeIntensity: 0.15,
                  inverseColors: false,
                  gradientToColors: ['#ea5455'],
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 123],
                },
              },
              stroke: {
                dashArray: 8,
              },
              labels: ['Completed Tickets'],
            }}
            series={[83]}
            type="radialBar"
            height={280}
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <div className="flex justify-center items-center flex-col">
          <p className="text-[#b4b7bd] mb-[2px] text-sm text-center">New Tickets</p>
          <span className="text-[#b4b7bd] text-[28px] font-semibold text-center">29</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <p className="text-[#b4b7bd] mb-[2px] text-sm text-center">Open Tickets</p>
          <span className="text-[#b4b7bd] text-[28px] font-semibold text-center">63</span>
        </div>

        <div className="flex justify-center items-center flex-col">
          <p className="text-[#b4b7bd] mb-[2px] text-sm text-center">Response Time</p>
          <span className="text-[#b4b7bd] text-[28px] font-semibold text-center">1d</span>
        </div>
      </div>
    </div>
  )
}

export default SupportTrackerCard
