import React, { useState } from 'react'

import Icon from '../components/Icon'
import SideDrawer from './SideDrawer'

import { navbarRightItems } from '../constants/navbar_right_items'
import Navigation from './Navigation'

const Navbar = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const handleShowSideDrawer = (): void => setShowSideDrawer(true)
  const handleHideSideDrawer = (): void => setShowSideDrawer(false)

  return (
    <header className="bg-[#161d30] fixed left-0 xl:left-64 top-0 right-0 px-4 sm:px-7 pt-5 pb-7">
      <section className="flex items-center justify-between h-16 p-[14px] bg-[#283046] rounded-md">
        {/* Side Drawer */}
        <SideDrawer show={showSideDrawer} hideMenu={handleHideSideDrawer}>
          <Navigation sideDrawerMenu closeMenu={handleHideSideDrawer} />
        </SideDrawer>

        {/* Left Items */}
        <div className="flex items-center">
          <ul className="flex items-center">
            <li
              className="px-[7px] cursor-pointer xl:hidden"
              onClick={handleShowSideDrawer}
            >
              <Icon
                name="Menu"
                width={21}
                height={21}
                color="#d0d2d6"
                className="cursor-pointer"
              />
            </li>
            {navbarRightItems.map((item) => (
              <li
                key={item.id}
                className="px-[7px] cursor-pointer hidden md:inline-block"
              >
                <Icon name={item.icon} width={21} height={21} color={item.color} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Items */}
        <div className="flex justify-center items-center">
          <div className="mr-5">
            <button className="p-[6px] rounded-md mr-1 relative">
              <div className="absolute top-[-3px] right-[-1px] bg-[#7367f0] text-[11px] font-semibold w-[18px] h-[18px] text-white flex justify-center items-center rounded-full">
                3
              </div>
              <Icon name="Sms" width={21} height={21} color="#d0d2d6" />
            </button>
            <button className="p-[6px] rounded-md relative">
              <div className="absolute top-[-3px] right-[-1px] bg-[#ea5455] text-[11px] font-semibold w-[18px] h-[18px] text-white flex justify-center items-center rounded-full">
                5
              </div>
              <Icon name="Notifications" width={21} height={21} color="#d0d2d6" />
            </button>
          </div>
          <div>
            <div className="flex items-center justify-start cursor-pointer pr-3">
              <div className="mr-2 flex flex-col items-end justify-center">
                <p className="text-[#d0d2d6] font-semibold tracking-wider text-[14px]">
                  John Doe
                </p>
                <span className="text-[11px] text-[#d0d2d6] tracking-widest leading-3">
                  admin
                </span>
              </div>
              <img src="/images/user.png" className="w-10" alt="John Doe" />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Navbar
