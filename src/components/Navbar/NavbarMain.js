import React from 'react'
import TopNav from './TopNav'
import SecondNav from './SecondNav'

const NavbarMain = () => {
  return (
    <div className='bg-white'>
      <div >
          <TopNav/>
         <div className='bg-[#f5f5f5]'>
         <SecondNav />
         </div>
      </div>
    </div>
  )
}

export default NavbarMain