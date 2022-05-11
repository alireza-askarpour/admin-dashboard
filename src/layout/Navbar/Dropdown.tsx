import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import useOnClickOutside from '../../hooks/useOnClickOutside'
import Icon from '../../components/shared/Icon'

interface IProps {
  dataList: object[]
  buttonText: string
  menuBadge: string
  menuTitle: string
  toggleBadge: string
  toggleBg: string
  toggleIcon: string
}

const Dropdown = (props: IProps) => {
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
        <div
          className={`absolute top-[-3px] right-[-1px] text-[11px] font-semibold w-[18px] h-[18px] text-white flex justify-center items-center rounded-full bg-[${props.toggleBg}]`}
        >
          {props.toggleBadge}
        </div>
        <Icon name={props.toggleIcon} width={21} height={21} color="#d0d2d6" />
      </button>

      <motion.div
        style={{
          boxShadow: '0 4px 24px 0 rgb(0 0 0 / 24%)',
        }}
        className="left-4 right-4 sm:left-7 sm:right-7 absolute md:right-0 md:left-[unset] md:w-[400px] z-20 mt-2 rounded-[4px] bg-ebonyClay overflow-hidden"
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
        <div className="flex items-center justify-between px-4 py-[14px] border-b border-b-[#3b4253]">
          <h4 className="text-lg font-medium text-[#d0d2d6]">{props.menuTitle}</h4>
          <span className="text-[#7367f0] bg-[#7367f01f] text-[13px] font-semibold px-2 py-[1px] rounded-full">
            {props.menuBadge}
          </span>
        </div>
        <ul className="w-full text-[#b4b7bd]">
          {props.dataList.map((item: any, index: number) => (
            <li
              key={index}
              className="flex items-center transition duration-100 ease-in-out w-full px-4 py-2 cursor-pointer hover:bg-[#161d31] border-b border-b-[#3b4253]"
              onClick={handleClose}
            >
              <div>
                <img src={item.avatar} alt={item.title} className="w-8 h-8 mr-2" />
              </div>
              <div>
                <p className="text-sm ml-[7px] select-none text-[#d0d2d6] font-medium">
                  {item.title}
                </p>
                <small className="text-xs ml-[7px] select-none text-[#676d7d]">
                  {item.text}
                </small>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between px-4 py-[14px]">
          <button
            className="px-5 py-[9px] w-full bg-[#7367f0] text-white font-medium text-sm rounded-md hover:shadow-indigo transition-shadow duration-300"
            onClick={handleClose}
          >
            {props.buttonText}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Dropdown
