import Award from 'assets/icons/Award'
import Calendar from 'assets/icons/Calendar'
import Chart from 'assets/icons/Chart'
import Close from 'assets/icons/Close'
import Menu from 'assets/icons/Menu'
import Messages from 'assets/icons/Messages'
import Notifications from 'assets/icons/Notifications'
import Search from 'assets/icons/Search'
import Sms from 'assets/icons/Sms'
import Star from 'assets/icons/Star'
import Task from 'assets/icons/Task'
import Users from 'assets/icons/Users'
import LogOut from 'assets/icons/LogOut'
import Trash from 'assets/icons/Trash'
import Check from 'assets/icons/Check'
import MoreVertical from 'assets/icons/MoreVertical'
import ChevronDown from 'assets/icons/ChevronDown'
import ChevronUp from 'assets/icons/ChevronUp'
import FileText from 'assets/icons/FileText'
import Send from 'assets/icons/Send'
import Eye from 'assets/icons/Eye'
import ArrowDownCircle from 'assets/icons/ArrowDownCircle'
import Save from 'assets/icons/Save'
import CheckCircle from 'assets/icons/CheckCircle'
import Info from 'assets/icons/Info'
import Edit from 'assets/icons/Edit'
import Copy from 'assets/icons/Copy'
import Download from 'assets/icons/Download'
import TrendingUp from 'assets/icons/TrendingUp'

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
      return <Award />
    case 'LogOut':
      return <LogOut />
    case 'Trash':
      return <Trash />
    case 'Check':
      return <Check />
    case 'MoreVertical':
      return <MoreVertical />
    case 'ChevronDown':
      return <ChevronDown />
    case 'ChevronUp':
      return <ChevronUp />
    case 'FileText':
      return <FileText />
    case 'Send':
      return <Send />
    case 'Eye':
      return <Eye />
    case 'ArrowDownCircle':
      return <ArrowDownCircle />
    case 'Save':
      return <Save />
    case 'CheckCircle':
      return <CheckCircle />
    case 'Info':
      return <Info />
    case 'Download':
      return <Download />
    case 'Copy':
      return <Copy />
    case 'Edit':
      return <Edit />
    case 'TrendingUp':
      return <TrendingUp />
    default:
      throw new Error('Not found icon!')
  }
}

export default getIcon
