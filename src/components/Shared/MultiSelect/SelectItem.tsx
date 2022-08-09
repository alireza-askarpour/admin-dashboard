import { useRef, Ref } from 'react'
import { classNames } from 'utils/classNames'
import Icon from '../Icon'

interface ISelectItemProps {
  title: string
  checked: boolean
  onChange: (input: Ref<HTMLInputElement>) => void
}

const SelectItem = ({ title, checked, onChange }: ISelectItemProps) => {
  const inputRef = useRef(null)

  const handleChange = () => onChange(inputRef.current)

  return (
    <li
      className={classNames(
        'relative px-4 py-2',
        'text-[#b4b7bd]  ',
        'transition-colors',
        checked
          ? 'hover:text-white bg-[#7367f0]'
          : 'hover:text-[#7367f0] hover:bg-[#7367f01f]',
      )}
    >
      <input
        ref={inputRef}
        onChange={handleChange}
        checked={checked}
        type="checkbox"
        className="outline-none appearance-none cursor-pointer absolute inset-0"
      />

      <div className="flex items-center justify-between">
        <p className="z-200 text-sm capitalize">{title}</p>
        {checked && <Icon name="Check" color="#ffffff" width={15} height={15} />}
      </div>
    </li>
  )
}

export default SelectItem
