import React from 'react'
import { Route, Outlet } from 'react-router-dom'
import NavBarLoggedIn from '../components/NavBarLoggedIn'

const HomeLayout = () => {
  return (
    <div className='bg-black '>
    <NavBarLoggedIn/>
      <Outlet/>
    </div>
  )
}

export default HomeLayout
