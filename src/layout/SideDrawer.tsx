import React, { FC, ReactNode } from 'react'

interface ISideDrawerProps {
  show: boolean
  hideMenu: () => void
  children: ReactNode
}

const SideDrawer: FC<ISideDrawerProps> = ({ show, hideMenu, children }) => {
  const sideDrawer = show
    ? 'w-full h-screen transition-all fixed inset-0 z-10 xl:hidden'
    : 'w-full h-screen transition-all fixed inset-0 z-10 xl:hidden invisible'

  const sideDrawerMenu = show
    ? 'w-64 h-screen transition-all duration-300 fixed top-0 left-0 bottom-0 z-20'
    : 'w-64 h-screen transition-all duration-300 fixed top-0 -left-full bottom-0 z-20'

  return (
    <section className={sideDrawer}>
      <section className={sideDrawerMenu}>{children}</section>
      <section
        className="w-full h-screen fixed inset-0 bg-[#22292f80]"
        onClick={hideMenu}
      ></section>
    </section>
  )
}

export default SideDrawer
