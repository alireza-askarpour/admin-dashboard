import { useRef } from 'react'
import { classNames } from 'utils/classNames'
import SelectItem from './SelectItem'
import Icon from '../Icon'


const handleClickOutside = (contentRef: any, toggleRef: any) => {
  document.addEventListener('click', (e: any) => {
    if (toggleRef.current && toggleRef.current.contains(e.target)) {
      contentRef.current.classList = `
        absolute left-0 right-0 top-14 transition-all 
        bg-[#283046] rounded-md overflow-hidden shadow-lg
        border border-[#3b4253] opacity-100 visible`
    } else {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList = `
         absolute top-14 left-0 right-0 transition-all 
         rounded-md bg-[#283046] overflow-hidden shadow-lg
         border border-[#3b4253] opacity-0 invisible`
      }
    }
  })
}

interface IMultiSelectProps {
  options: string[]
  value: string[]
  onChange: any
}

const MultiSelect = ({ options, value, onChange }: IMultiSelectProps) => {
  const toggleRef = useRef(null)
  const contentRef = useRef(null)

  const handleChecked = (input: any, checkedItem: string) => {
    if (input.checked) {
      const updateSelected = [...value, checkedItem]
      onChange(updateSelected)
    } else {
      const updateSelected = value.filter((item: string) => item !== checkedItem)
      onChange(updateSelected)
    }
  }

  handleClickOutside(contentRef, toggleRef)

  return (
    <section className="relative w-full">
      <div
        ref={toggleRef}
        className={classNames(
          'w-full min-h-[37.5px] bg-[#283046] ',
          'border border-[#404656] rounded-[5px]',
          'flex items-center justify-between',
          'text-[xs] cursor-pointer text-left ',
        )}
      >
        <div className="flex items-center justify-start flex-wrap pb-[6px] pr-[6px]">
          {value.map((item, index) => (
            <div
              key={index}
              className={classNames(
                'px-2 py-[3px] ml-[6px] mt-[6px]',
                'bg-[#7367f01f] rounded-[4px] flex items-center ',
              )}
            >
              <div className="text-[#7367f0] text-[13px] px-[2px] capitalize">{item}</div>
            </div>
          ))}
        </div>

        <div className="pr-[6px]">
          <Icon
            name="ChevronDown"
            color="#b8c2cc"
            width={16}
            height={16}
            className="ml-1 cursor-pointer"
          />
        </div>
      </div>

      {/* Content - ( Dropdown Menu ) */}
      <div ref={contentRef} className="opacity-0 invisible">
        <ul>
          {options.map((item, index) => (
            <SelectItem
              key={index}
              title={item}
              checked={value.includes(item)}
              onChange={(input) => handleChecked(input, item)}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default MultiSelect
