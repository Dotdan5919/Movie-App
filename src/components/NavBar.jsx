import React from 'react'
import logo from '../assets/logos/moplay logo_1.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-full  h-24 flex justify-between z-[99] relative items-center'>
      <img src={logo} alt="" srcset="" className='w-[180px]'/>
    <NavLink to="/signin">
      <button className='bg-red-600 rounded-sm text-white hover:bg-red-800 h-10 p-3 flex items-center' >Sign in</button> </NavLink>
    </div>
  )
}

export default NavBar
