import React from 'react'
import { INavbarItem } from './interface'
import {Text} from 'components'

const NavbarItem: React.FC<INavbarItem> = ({ text, active }) => {
  const isActive = active ? "text-orange" : "text-white"
  return (
    <Text text={text} className={`w-max leading-normal cursor-pointer text-[17px] hover:text-orange transition-colors ${isActive} `} type='span'/>
  )
}

export default NavbarItem
