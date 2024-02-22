import React from 'react'
import SideNavbar from './components/SideNavbar'

function layout({ children }) {
    return (
        <div>
            <div className='sm:w-64 hidden fixed sm:block'>
                <SideNavbar />
            </div>
            <div className='ml-64'>
                {children}
            </div>
        </div>
    )
}

export default layout