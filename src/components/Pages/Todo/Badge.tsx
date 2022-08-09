import { Tags } from 'store/state'
import { classNames } from 'utils/classNames'

interface IBadgeProps {
  text: Tags
}

const Badge = ({ text }: IBadgeProps) => {
  return (
    <span
      className={classNames(
        'rounded-full leading-3',
        'py-1 px-[7px] mr-[14px]',
        'text-xs font-semibold capitalize',
        text === 'team' && 'bg-[#7367f01f] text-[#7367f0]',
        text === 'low' && 'bg-[#28c76f1f] text-[#28c76f]',
        text === 'medium' && 'bg-[#ff9f431f] text-[#ff9f43]',
        text === 'high' && 'text-[#ea5455] bg-[#ea54551f]',
        text === 'update' && 'text-[#00cfe8] bg-[#00cfe81f]',
      )}
    >
      {text}
    </span>
  )
}

export default Badge
