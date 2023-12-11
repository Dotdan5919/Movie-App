import React from 'react'
import logo2 from '../assets/logos/moplay logo_1.png'
import { IoIosArrowDown, IoIosNotifications, IoIosSearch } from 'react-icons/io'
import Profilepics from '../assets/images/profilesample.jpg'
import Search from './Search'
import { NavLink } from 'react-router-dom'

const NavBarLoggedIn = () => {
  return (
    <div className='w-full  h-24 flex justify-between z-[99] relative items-center p-4'>
    <div className="flex gap-5 justify-center items-center text-white ">
    <NavLink to="/homepage">
    <img src={logo2} alt="" srcset="" className='w-[180px]'/>
    </NavLink>
    <div className="md:flex gap-12 hidden ">
    <NavLink to="/exclusive">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Exclusive</li>
    </NavLink>
    <NavLink to="/trending">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Trending</li>
    </NavLink>
    <NavLink to="/upcoming">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Upcoming</li>
    </NavLink>
    <NavLink to="/watchlist">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Watchlist</li>
    </NavLink>
    </div>
    </div>

<div className="flex gap-4 text-white justify-center items-center">

    <div className='flex gap-2 text-lg items-center'>
    <Search/>
    <IoIosNotifications className='cursor-pointer hover:text-red-400 transition-all duration-300'/>
    </div>
    <div className="profile-picture flex items-center justify-center">
    <div className="rounded-full overflow-hidden  flex items-center justify-center h-10">
    <img src={Profilepics} alt="" className='w-10 h-10'/>
    </div>
    <IoIosArrowDown/>
    </div>


    

</div>

   </div>
  )
}

export default NavBarLoggedIn
