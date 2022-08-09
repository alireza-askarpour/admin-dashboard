import { FC } from 'react'
import getIcon from 'helpers/getIcon'

interface IIconProps {
  name: string
  width?: number
  height?: number
  color?: string
  className?: string
  onClick?: () => void
}

const Icon: FC<IIconProps> = ({ name, width, height, color, className, onClick }) => {
  const iconComponent = getIcon(name)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 20}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`feather feather-users ${className}`}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      {iconComponent}
    </svg>
  )
}

export default Icon
