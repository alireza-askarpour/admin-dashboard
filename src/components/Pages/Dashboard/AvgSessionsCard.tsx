import ReactApexChart from 'react-apexcharts'
import { classNames } from '../../../utils/classNames'

const AvgSessionsCard = () => {
  return (
    <div className="relative bg-[#283046] p-[20px] rounded-md">
      <div className="sm:flex sm:items-center">
        <div className="order-2 sm:w-2/4">
          <div>
            <p className="text-right text-sm text-[#676d7d]">Last 7 Days</p>
          </div>
          <ReactApexChart
            options={{
              chart: {
                height: 350,
                type: 'bar',
                sparkline: {
                  enabled: true,
                },
              },
              colors: ['#ced3dc', '#ced3dc', '#685fd6', '#ced3dc', '#ced3dc', '#ced3dc'],
              tooltip: {
                theme: 'dark',
                x: {
                  show: false,
                },
              },
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true,
                  borderRadius: 8,
                },
              },
              dataLabels: {
                enabled: false,
              },
              legend: {
                show: false,
              },
              xaxis: {
                categories: [
                  ['John', 'Doe'],
                  ['Joe', 'Smith'],
                  ['Jake', 'Williams'],
                  'Amber',
                  ['Peter', 'Brown'],
                  ['Mary', 'Evans'],
                  ['David', 'Wilson'],
                  ['Lily', 'Roberts'],
                ],
                labels: {
                  style: {
                    colors: '#f00',
                    fontSize: '12px',
                  },
                },
              },
            }}
            series={[
              {
                data: [57, 125, 225, 175, 125, 75, 24],
              },
            ]}
            type="bar"
            height={200}
          />
        </div>
        <div className="sm:h-[220px] flex flex-col justify-between items-start sm:mr-7 sm:w-2/4">
          <div className="mt-3 sm:mt-0">
            <h2 className="text-[23px] font-bold">2.7k</h2>
            <p className="text-sm mb[21px] mb-5">Avg Sessions</p>
            <h5 className="text-[17px] mb-2 font-bold">
              <span className="mr-2 text-[#28c76f]">+5.2%</span>
              <span>vs last 7 days</span>
            </h5>
          </div>
          <button
            className={classNames(
              'px-5 py-[10px]',
              'w-full bg-[#7367f0]',
              'text-white font-medium text-sm',
              'rounded-md hover:shadow-indigo',
              'transition-shadow duration-300',
            )}
          >
            View Details
          </button>
        </div>
      </div>
      <hr className="my-5 border-[#3b4253]" />
      <div className="flex flex-wrap">
        <div className="pr-[14px] mb-[14px] w-1/2">
          <p className="text-sm mb-2">Goal: $100000</p>
          <div className="bg-[#7367f01f] w-full h-[6px] rounded-full overflow-hidden">
            <div className="bg-[#7367f0] w-2/4 h-full rounded-full"></div>
          </div>
        </div>

        <div className="mb-[14px] w-1/2">
          <p className="text-sm mb-2">Users: 100.0k</p>
          <div className="bg-[#7367f01f] w-full h-[6px] rounded-full overflow-hidden">
            <div className="bg-[#ff9f43] w-2/4 h-full rounded-full"></div>
          </div>
        </div>

        <div className="pr-[14px] mb-[14px] w-1/2">
          <p className="text-sm mb-2">Retention: 90%</p>
          <div className="bg-[#7367f01f] w-full h-[6px] rounded-full overflow-hidden">
            <div className="bg-[#ea5455] w-2/4 h-full rounded-full"></div>
          </div>
        </div>

        <div className="mb-[14px] w-1/2">
          <p className="text-sm mb-2">Duration: 1yr</p>
          <div className="bg-[#7367f01f] w-full h-[6px] rounded-full overflow-hidden">
            <div className="bg-[#28c76f] w-2/4 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvgSessionsCard
