import React from 'react'
import Footer from '../sections/Home/Footer'

const NoPage = () => {
  return (
    <div className='pt-20 flex flex-col h-screen '>
    <div className="flex flex-col justify-center gap-0 h-full p-10">
      <h1 className="text-white text-center text-[200px] font-bold  ">404</h1>
      <p className="text-white  text-center text-lg ">page not found</p>
      </div>

      <Footer/>
    </div>  
  )
}

export default NoPage
