import React from 'react'
import SideNavbar from '../components/SideNavbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function layout({children}) {
  return (
    <div>
        <div className="relative min-h-screen">
            <div className="sm:w-64 lg:w-64 hidden fixed sm:block">
              <SideNavbar />
            </div>
            <div className="ml-0 sm:ml-64">
              <Header />
              {children}
            </div>
          </div>
          <div className="
          fixed
          bottom-0
          right-0
          m-5
          ">
          </div>
          <Footer />
    </div>
  )
}

export default layout