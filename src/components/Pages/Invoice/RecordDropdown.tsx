import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { recordDropdownItems } from 'constants/record_dropdown_items'
import Icon from '../../Shared/Icon'

interface IRecordDropdownProps {
  onClick?: (value: string) => void
}

interface IRecordDropdownItem {
  id: string
  value: string
  label: string
  icon: string
}

const RecordDropdown = (props: IRecordDropdownProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const ref = useRef(null)

  useOnClickOutside(ref, handleClose)

  return (
    <div className="relative flex">
      <button
        className="text-white"
        onClick={handleOpen}
        style={{
          pointerEvents: open ? 'none' : 'auto',
        }}
      >
        <Icon name="MoreVertical" color="#b4b7bd" width={16} height={16} />
      </button>

      <motion.div
        style={{
          boxShadow: '0 4px 24px 0 rgb(0 0 0 / 24%)',
        }}
        className="absolute top-full right-0 w-[140px] z-20 mt-2 py-2 rounded-[4px] bg-ebonyClay overflow-hidden"
        initial="hide"
        ref={ref}
        animate={open ? 'show' : 'hide'}
        transition={{ duration: 0.1, type: 'tween' }}
        variants={{
          show: { opacity: 1, display: 'flex' },
          hide: { opacity: 0, transitionEnd: { display: 'none' } },
        }}
      >
        <ul className="w-full text-[#b4b7bd]">
          {recordDropdownItems.map((item: IRecordDropdownItem, index) => (
            <li
              key={index}
              className="record-dropdown-item"
              onClick={() => {
                props.onClick && props.onClick(item.value)
                handleClose()
              }}
            >
              <Icon name={item.icon} color="#b4b7bd" width={14} height={14} />
              <span className="text-sm ml-[7px] select-none">{item.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default RecordDropdown
