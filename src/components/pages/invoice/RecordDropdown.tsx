import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import Icon from '../../shared/Icon'

import useOnClickOutside from '../../../hooks/useOnClickOutside'

import { recordDropdownItems } from '../../../constants/record_dropdown_items'

interface IRecordDropdownProps {
  onClick: (id: string) => void
}

const RecordDropdown = (props: IRecordDropdownProps) => {
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const ref = useRef(null)

  useOnClickOutside(ref, onClose)

  return (
    <div className="relative flex">
      <button
        className="text-white"
        onClick={onOpen}
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
          {recordDropdownItems.map((item) => (
            <li className="record-dropdown-item" onClick={() => props.onClick(item.id)}>
              <Icon name={item.icon} color="#b4b7bd" width={14} height={14} />
              <span className="text-sm ml-[7px] select-none">{item.title}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default RecordDropdown
