import { ChangeEvent } from 'react'
import { classNames } from 'utils/classNames'

interface ITextareaProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  name: string
  placeholder: string
  rows: number
  label: string
}

const Textarea = ({
  id,
  value,
  onChange,
  rows,
  placeholder,
  name,
  label,
}: ITextareaProps) => {
  return (
    <div className="mb-[14px]">
      <label htmlFor={id} className="text-xs mb-1">
        {label}
      </label>

      <textarea
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className={classNames(
          'bg-[#283046] text-sm resize-none ',
          'placeholder:text-sm placeholder:italic',
          'border border-[#3b4253] rounded-[5px] ',
          'outline-none focus:border-[#7367f0]',
          'w-full px-[14px] py-3 transition-colors',
        )}
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    </div>
  )
}

export default Textarea
