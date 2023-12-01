import React from 'react'
import laptop from '../assets/images/watch on laptop.png'

const Watch = () => {
  return (
    <div className='w-full bg-black flex sm:flex-row flex-col gap-20 relative items-center sm:ml-20 ml-0 justify-center sm:p-10 leading-tight p-10 '>

    <div className="flex flex-col gap-4 sm:text-left text-center text-white sm:w-[20%] w-full ">
    <h1 className='text-[50px] font-bold'>Watch everywhere</h1>
    <p className='text-[20px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
    </div>
<img src={laptop} alt="" className='sm:w-[40%] w-[60%]' />


    </div>
  )
}

export default Watch
