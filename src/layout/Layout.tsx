import React, { FC } from 'react'

import Navbar from './Navbar'
import Navigation from './Navigation'

const Layout: FC = ({ children }) => {
  return (
    <section>
      <Navigation />
      <section className="ml-0 xl:ml-64">
        <Navbar />
        <section className="mt-[112px] bg-[#161d30] min-h-content-main text-[#d0d2d6] px-4  sm:px-7">
          {children}
        </section>
      </section>
    </section>
  )
}

export default Layout
