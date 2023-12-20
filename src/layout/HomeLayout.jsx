import React from 'react'
import { Route, Outlet } from 'react-router-dom'
import NavBarLoggedIn from '../components/NavBarLoggedIn'

const HomeLayout = () => {
  return (
    <div className='bg-black w-screen relative overflow-hidden '>
    <NavBarLoggedIn/>
      <Outlet/>
    </div>
  )
}

export default HomeLayout
