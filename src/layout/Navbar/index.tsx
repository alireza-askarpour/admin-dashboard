import { useState } from 'react'

import Dropdown from './Dropdown'
import SideDrawer from '../SideDrawer'
import Navigation from '../Navigation'
import Icon from '../../components/shared/Icon'

import { mailList } from '../../constants/mail_list'
import { navbarRightItems } from '../../constants/navbar_right_items'
import { notificationsList } from '../../constants/notifications_list'

const Navbar = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  //
  const handleShowSideDrawer = (): void => setShowSideDrawer(true)
  const handleHideSideDrawer = (): void => setShowSideDrawer(false)

  return (
    <header className="bg-[#161d30] fixed left-0 top-0 right-0 xl:left-64 px-4 pt-5 pb-5 sm:px-7 z-30">
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
          <div className="mr-5 flex items-center">
            <Dropdown
              dataList={mailList}
              buttonText="Read all Mail"
              menuBadge="3 New"
              menuTitle="Mail"
              toggleBadge="3"
              toggleBg="#7367f0"
              toggleIcon="Sms"
            />

            <Dropdown
              dataList={notificationsList}
              buttonText="Read all Notifications"
              menuBadge="5 New"
              menuTitle="Mail"
              toggleBadge="5"
              toggleBg="#ea5455"
              toggleIcon="Notifications"
            />
          </div>
          <div>
            <div className="flex items-center justify-start cursor-pointer pr-3">
              <div className="mr-2 flex flex-col items-end justify-center">
                <p className="text-[#d0d2d6] font-semibold tracking-wider text-[14px]">
                  John Doe
                </p>
                <span className="text-[11px] text-[#d0d2d6] leading-3">admin</span>
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
