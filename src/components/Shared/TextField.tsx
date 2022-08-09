import { ChangeEvent } from 'react'
import { classNames } from 'utils/classNames'
import { isEmptyString } from 'utils/validations'

interface ITextFieldProps {
  id: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  label: string
  changeError: (error: boolean) => void
  error: boolean
  errorMessage: string
}

const TextField = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  changeError,
  error,
  errorMessage,
}: ITextFieldProps) => {
  const handleBluer = () => {
    if (isEmptyString(value)) {
      changeError(true)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isEmptyString(e.target.value)) {
      changeError(true)
    } else {
      changeError(false)
    }

    onChange(e)
  }

  return (
    <div className="mb-[14px] flex flex-col items-start">
      <label htmlFor={id} className="text-xs mb-1">
        {label}
      </label>

      <input
        id={id}
        type="text"
        onBlur={handleBluer}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={classNames(
          'px-[14px] py-[7px] outline-none rounded-[5px] w-full',
          'border bg-transparent transition-colors outline-0',
          'text-sm placeholder:text-[#676d7d]',

          error ? 'border-[#ea5455]' : 'border-[#3b4253] focus:border-[#7367f0]',
        )}
      />

      {error && <small className="text-[#ea5455] text-xs mt-1">{errorMessage}</small>}
    </div>
  )
}

export default TextField
