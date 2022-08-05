import ReactApexChart from 'react-apexcharts'

const SalesCard = () => {
  return (
    <div className="relative p-5 rounded-md bg-[#283046] h-full">
      <div>
        <h4 className="text-[#d0d2d6] font-semibold">Sales</h4>
        <p className="text-sm text-[#b4b7bd]">Last 6 months</p>
      </div>
      <div>
        <ReactApexChart
          options={{
            chart: {
              height: 350,
              type: 'radar',
              foreColor: '#fff',
            },
            colors: ['#7368f0', '#00cfe8'],
            fill: {
              opacity: 1,
            },
            markers: {
              size: 0,
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
          }}
          series={[
            {
              name: 'Sales',
              data: [80, 90, 98, 40, 100, 30],
            },
            {
              name: 'Visits',
              data: [80, 90, 80, 70, 20, 80],
            },
          ]}
          type="radar"
          height={350}
        />
      </div>
    </div>
  )
}

export default SalesCard
