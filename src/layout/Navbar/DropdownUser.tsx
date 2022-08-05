import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import Icon from '../../components/Shared/Icon'

const LIST_OPTIONS = [
  { label: 'Profile', icon: 'Users' },
  { label: 'Inbox', icon: 'Sms' },
  { label: 'Task', icon: 'Task' },
  { label: 'Chat', icon: 'Messages' },
  { label: 'Logout', icon: 'LogOut' },
]

const DropdownUser = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const ref = useRef(null)

  useOnClickOutside(ref, handleClose)

  return (
    <div className="md:relative">
      <button
        className="p-[6px] rounded-md mr-1 relative"
        onClick={handleOpen}
        style={{
          pointerEvents: open ? 'none' : 'auto',
        }}
      >
        <div className="flex items-center justify-start cursor-pointer pr-3">
          <div className="mr-2 flex flex-col items-end justify-center">
            <p className="text-[#d0d2d6] font-semibold tracking-wider text-[14px]">
              John Doe
            </p>
            <span className="text-[11px] text-[#d0d2d6] leading-3">admin</span>
          </div>
          <img src="/images/user.png" className="w-10" alt="John Doe" />
        </div>
      </button>

      <motion.div
        style={{
          boxShadow: '0 4px 24px 0 rgb(0 0 0 / 24%)',
        }}
        className="left-4 right-4 sm:left-7 sm:right-7 absolute md:right-0 md:left-[unset] md:top-11 md:w-40 z-20 mt-2 rounded-lg bg-ebonyClay overflow-hidden"
        initial="hide"
        ref={ref}
        animate={open ? 'show' : 'hide'}
        transition={{ duration: 0.25, type: 'tween' }}
        variants={{
          show: { opacity: 1, display: 'flex', flexDirection: 'column', y: 13 },
          hide: {
            opacity: 0,
            y: 26,
            flexDirection: 'column',
            transitionEnd: { display: 'none' },
          },
        }}
      >
        <ul className="w-full text-[#b4b7bd] p-2">
          {LIST_OPTIONS.map((item: any, index: number) => (
            <li
              key={index}
              className="flex items-center transition duration-100 ease-in-out w-full px-4 py-2 cursor-pointer group rounded-lg hover:bg-[#7367f01f]"
              onClick={handleClose}
            >
              <Icon
                name={item.icon}
                className="mr-2 group-hover:stroke-[#7367f0]"
                color="#b4b7bd"
                width={16}
                height={16}
              />
              <span className="text-sm group-hover:text-[#7367f0]">{item.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default DropdownUser
