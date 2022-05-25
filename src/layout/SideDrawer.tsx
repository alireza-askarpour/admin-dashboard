import { ReactNode } from 'react'

import { classNames } from '../utils/classNames'

interface IProps {
  show: boolean
  hideMenu: () => void
  children: ReactNode
}

const SideDrawer = ({ show, hideMenu, children }: IProps) => {
  return (
    <section
      className={classNames(
        'w-full h-screen transition-all fixed inset-0 z-40 xl:hidden',
        !show && 'invisible',
      )}
    >
      <section
        className={classNames(
          'w-64 h-screen transition-all duration-300 fixed top-0 bottom-0 z-20',
          show ? 'left-0' : '-left-full',
        )}
      >
        {children}
      </section>
      <section
        className="w-full h-screen fixed inset-0 bg-[#22292f80]"
        onClick={hideMenu}
      ></section>
    </section>
  )
}

export default SideDrawer
