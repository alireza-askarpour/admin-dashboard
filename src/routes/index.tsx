import Dashboard from '../containers/Dashboard'
import Calendar from '../containers/Calendar'
import Mail from '../containers/Mail'
import Contacts from '../containers/Contacts'
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
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/todo',
    element: <ToDo />,
  },
]
