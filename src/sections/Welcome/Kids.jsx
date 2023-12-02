import React from 'react'
import Kids from '../../assets/images/kids.png'

const kids = () => {
  return (
    <div className='w-full bg-black flex sm:flex-row flex-col gap-20 relative items-center justify-center sm:p-10 leading-tight p-10'>

    <img src={Kids} alt="" srcset="" className='w-96' />


    <div className="flex flex-col gap-2 sm:text-left text-white text-center w-full sm:w-[30%]">
    <h1 className='text-[50px] font-bold'>Create profiles for kids</h1>
    <p className='text-[20px]'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
    
    </div>

      
    </div>
  )
}

export default kids
