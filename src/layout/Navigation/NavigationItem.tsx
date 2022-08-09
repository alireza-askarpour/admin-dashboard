import { useNavigate } from 'react-router-dom'
import { classNames } from 'utils/classNames'
import Icon from 'components/Shared/Icon'

interface IProps {
  icon: string
  title: string
  route: string
  badge?: number
  active: boolean
}

const NavigationItem = ({ icon, title, route, badge, active }: IProps) => {
  const navigate = useNavigate()

  const handleItemClick = () => navigate(route)

  return (
    <div
      onClick={handleItemClick}
      className={classNames(
        'mx-4 py-[10px] px-[15px] rounded-md cursor-pointer flex justify-between items-center hover:pl-5 transition-all duration-300',
        active && 'bg-gradient-to-r from-[#7367f0] to-[#7367f0b3]',
      )}
    >
      <div className="flex justify-start items-center">
        <Icon name={icon} color={active ? '#ffffff' : '#d0d2d6'} className="mr-3" />
        <p
          className={classNames('text-[15px]', active ? 'text-white' : 'text-[#d0d2d6]')}
        >
          {title}
        </p>
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
