// components
import AppDesignCard from '../components/Pages/Dashboard/AppDesignCard'
import AreaChartCard from '../components/Pages/Dashboard/AreaChartCard'
import AvgSessionsCard from '../components/Pages/Dashboard/AvgSessionsCard'
import CongratulationsCard from '../components/Pages/Dashboard/CongratulationsCard'
import SalesCard from '../components/Pages/Dashboard/SalesCard'
import SupportTrackerCard from '../components/Pages/Dashboard/SupportTrackerCard'
import UserTimelineCard from '../components/Pages/Dashboard/UserTimelineCard'

const Dashboard = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7 lg:grid-rows-[227px_400px_553px]">
      {/* Congratulations Card */}
      <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-7">
        <CongratulationsCard />
      </div>

      {/* Subscribers Gained Chart */}
      <div className="sm:col-start-1 sm:col-end-2 lg:col-start-7 lg:col-end-10">
        <AreaChartCard
          icon="Users"
          title="Subscribers Gained"
          result="92.6k"
          series={{
            name: 'Subscribers',
            data: [28, 40, 36, 52, 38, 60, 55],
          }}
          color="#7367f0"
          bgIcon="#7367f01f"
        />
      </div>

      {/* Orders Received Chart */}
      <div className="sm:col-start-2 sm:col-end-3 lg:col-start-10 lg:col-end-13">
        <AreaChartCard
          icon="Users"
          result="38.4k"
          title="Orders Received"
          series={{
            name: 'Orders',
            data: [10, 15, 8, 15, 7, 12, 8],
          }}
          color="#ff9f43"
          bgIcon="#ff9f431f"
        />
      </div>

      {/* Avg Sessions Card */}
      <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-7">
        <AvgSessionsCard />
      </div>

      {/* Support Tracker Card */}
      <div className="sm:col-start-1 sm:col-end-3 lg:col-start-7 lg:col-end-13">
        <SupportTrackerCard />
      </div>

      {/* User Timeline Card */}
      <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-5">
        <UserTimelineCard />
      </div>

      {/* Sales Card */}
      <div className="sm:col-start-1 sm:col-end-3 lg:col-start-5 lg:col-end-9">
        <SalesCard />
      </div>

      {/* App design Card */}
      <div className="sm:col-start-1 sm:col-end-3 lg:col-start-9 lg:col-end-13">
        <AppDesignCard />
      </div>
    </section>
  )
}

export default Dashboard
