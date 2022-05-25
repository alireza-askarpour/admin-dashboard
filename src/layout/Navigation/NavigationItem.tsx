import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Icon from '../components/shared/Icon'

interface IItemProps {
  icon: string
  title: string
  route: string
  badge?: number
  active: boolean
}

const NavigationItem: FC<IItemProps> = ({ icon, title, route, badge, active }) => {
  const navigate = useNavigate()

  const handleItemClick = () => navigate(route)

  const activeItem = active
    ? 'mx-4 py-[10px] px-[15px] rounded-md cursor-pointer flex justify-between items-center bg-gradient-to-r from-[#7367f0] to-[#7367f0b3] hover:pl-5 transition-all duration-300'
    : 'mx-4 py-[10px] px-[15px] rounded-md cursor-pointer flex justify-between items-center hover:pl-5 transition-all duration-300'

  const iconColor = active ? '#ffffff' : '#d0d2d6'
  const titleColor = active ? 'text-white text-[15px]' : 'text-[#d0d2d6] text-[15px]'

  return (
    <div onClick={handleItemClick} className={activeItem}>
      <div className="flex justify-start items-center">
        <Icon name={icon} color={iconColor} className="mr-3" />
        <p className={titleColor}>{title}</p>
      </div>
      {badge && (
        <div className="bg-[#ff9f43] text-[11px] font-semibold w-[18px] h-[18px] text-white flex justify-center items-center rounded-full">
          {badge}
        </div>
      )}
    </div>
  )
}

export default NavigationItem
