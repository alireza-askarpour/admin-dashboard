import { useLocation } from 'react-router-dom'

import NavigationItem from './NavigationItem'

import { navigationItems } from '../../constants/navigation_items'

const NavigationList = () => {
  const { pathname } = useLocation()
  const actieItem = navigationItems.findIndex((item) => item.route === pathname)

  return (
    <div className="overflow-y-auto h-navigation-list">
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
          route={item.route}
          active={index === actieItem}
        />
      ))}
    </div>
  )
}

export default NavigationList
