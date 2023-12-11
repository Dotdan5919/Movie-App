import React from 'react'
import logo2 from '../assets/logos/moplay logo_1.png'
import { IoIosArrowDown, IoIosNotifications, IoIosSearch } from 'react-icons/io'
import Profilepics from '../assets/images/profilesample.jpg'

const NavBarLoggedIn = () => {
  return (
    <div className='w-full  h-24 flex justify-between z-[99] relative items-center p-4'>
    <img src={logo2} alt="" srcset="" className='w-[180px]'/>

<div className="flex gap-4 text-white justify-center items-center">
<div className="md:flex gap-12 hidden">
    <li className='list-none text-md'>Exclusive</li>
    <li className='list-none text-md'>Trending</li>
    <li className='list-none text-md'>Upcoming</li>
    <li className='list-none text-md'>Watchlist</li>
    </div>
    <div className='flex gap-2'>
    <IoIosSearch/>
    <IoIosNotifications/>
    </div>
    <div className="profile-picture flex items-center justify-center">
    <div className="rounded-full overflow-hidden  flex items-center justify-center h-10">
    <img src={Profilepics} alt="" className='w-10 h-10'/>
    </div>
    <IoIosArrowDown/>
    </div>

<select >
<option>En</option>
</select>
    

</div>

   </div>
  )
}

export default NavBarLoggedIn
