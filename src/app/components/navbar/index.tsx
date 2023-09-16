import React from 'react'
import { FlippBidIcon, MenuIcon } from '../icons'
import NavbarItem from './navitem'
import { Button } from '..'

const Navbar = () => {
  return (
    <nav className="bg-gradient-primary w-full h-[105px] flex px-[105px] items-center justify-between">
    <FlippBidIcon className="w-[78px] h-[27px] sm:h-[58px] sm:w-[172px] "/>
      <div className="w-max h-max bg-red-4000 flex justify-between items-center gap-16">
        <MenuIcon className=""/>
        <div className="s1200:flex gap-[45px] hidden">
          <NavbarItem text="Free Trial" active/>
          <NavbarItem text="Get ARV" />
          <NavbarItem text="Pricing" />
          <NavbarItem text=" Verified Investments" />
        </div>
        <Button text="Contact" className="!py-[14px] !px-[20px] bg-white text-orange rounded-[54px] text-[18px] font-semibold"/>
      </div>
      </nav>

  )
}

export default Navbar
