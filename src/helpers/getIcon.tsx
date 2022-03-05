import Award from '../assets/icons/Award'
import Calendar from '../assets/icons/Calendar'
import Chart from '../assets/icons/Chart'
import Close from '../assets/icons/Close'
import Menu from '../assets/icons/Menu'
import Messages from '../assets/icons/Messages'
import Notifications from '../assets/icons/Notifications'
import Search from '../assets/icons/Search'
import Sms from '../assets/icons/Sms'
import Star from '../assets/icons/Star'
import Task from '../assets/icons/Task'
import Users from '../assets/icons/Users'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Calendar':
      return <Calendar />
    case 'Chart':
      return <Chart />
    case 'Menu':
      return <Menu />
    case 'Messages':
      return <Messages />
    case 'Notifications':
      return <Notifications />
    case 'Search':
      return <Search />
    case 'Sms':
      return <Sms />
    case 'Task':
      return <Task />
    case 'Users':
      return <Users />
    case 'Star':
      return <Star />
    case 'Close':
      return <Close />
    case 'Award':
      return <Award/>
    default:
      throw new Error('Not found icon!')
  }
}

export default getIcon
