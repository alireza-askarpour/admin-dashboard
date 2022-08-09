import { MouseEvent, Ref, useRef } from 'react'
import { classNames } from 'utils/classNames'
import Icon from './Icon'

interface ICheckboxProps {
  checked: boolean
  onChange: (input: Ref<HTMLInputElement>) => void
  onClick: (e: MouseEvent<HTMLLabelElement | HTMLInputElement>) => void
}

const Checkbox = ({ checked, onChange, onClick }: ICheckboxProps) => {
  const checkboxRef = useRef(null)

  const handleChangeCheckbox = () => {
    onChange(checkboxRef.current)
  }

  return (
    <label
      onClick={onClick}
      className={classNames(
        'relative block w-[18px] h-[18px]',
        'transition-colors duration-150',
      )}
    >
      <input
        ref={checkboxRef}
        className={classNames(
          'task-checkbox w-[18px] h-[18px] appearance-none',
          'border rounded-[4px] border-[#404656]',
          'transition duration-150',
        )}
        checked={checked}
        type="checkbox"
        onChange={handleChangeCheckbox}
        onClick={onClick}
      />
      <Icon
        name="Check"
        width={15}
        height={15}
        color="#fff"
        className={classNames(
          'task-checkbox-icon absolute left-[2px] top-[2px]',
          'opacity-0 transition-opacity duration-150',
        )}
      />
    </label>
  )
}

export default Checkbox
