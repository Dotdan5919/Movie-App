import React from 'react'

const Explore = () => {
  return (
    <div className='p-24 m-7 mt-20 w-11/12 grid grid-rows-2 grid-cols-6 gap-7 justify-center relative   '>
    <div className="absolute bg-gradient-to-l from-transparent  to-blue-950 w-full h-full z-[1]"></div>
    <div className="absolute bg-moviecollage w-full h-full z-[0]"></div>

    <h1 className='text-white font-bold  text-[25px] col-span-3 relative  z-[3]'>Explore more and more exclusive movies with Moplay Premium</h1>
    <button className='hover:shadow-lg bg-red-700 col-start-1 text-white rounded-lg shadow-md p-2 h-12 relative z-[3]'>Get updated</button>
    <p className='text-white text-sm  col-span-2 justify-items-center place-items-center relative z-[3]'>Only 45/month in the first year.</p>

      
    </div>
  )
}

export default Explore
