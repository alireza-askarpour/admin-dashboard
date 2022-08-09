import { FC } from 'react'
import Icon from '../../Shared/Icon'
import { classNames } from 'utils/classNames'

interface IListGroupItem {
  icon?: string
  color?: string
  title: string
  active: boolean
  value: string
  onClick: (filter: string) => void
}
const ListGroupItem: FC<IListGroupItem> = ({
  icon,
  title,
  active,
  color,
  value,
  onClick,
}) => {
  const handleClick = () => onClick(value)

  return (
    <li
      className={classNames(
        'px-5 py-2 hover:pl-6 border-l-2 font-medium ',
        'flex items-center cursor-pointer',
        'transition-all duration-200',
        active
          ? 'text-[#7367f0] border-l-[#7367f0]'
          : 'text-[#b4b7bd] border-transparent',
      )}
      onClick={handleClick}
    >
      {icon && (
        <Icon
          name={icon}
          color={classNames(active ? '#7367f0' : '#b4b7bd')}
          className="mr-3"
          width={18}
          height={18}
        />
      )}
      {color && (
        <div
          className={classNames('mr-3 w-[10px] h-[10px] rounded-full', `bg-[${color}]`)}
        ></div>
      )}
      <span className="text-sm">{title}</span>
    </li>
  )
}

export default ListGroupItem
