import Dashboard from '../containers/Dashboard'
import Calendar from '../containers/Calendar'
import Mail from '../containers/Mail'
import Invoice from '../containers/Invoice'
import ToDo from '../containers/ToDo'

export const routes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
  {
    path: '/mail',
    element: <Mail />,
  },
  {
    path: '/invoice',
    element: <Invoice />,
  },
  {
    path: '/todo',
    element: <ToDo />,
  },
]
