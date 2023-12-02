import React from 'react'
import { Route, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default RootLayout