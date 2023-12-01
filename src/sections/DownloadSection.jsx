import React from 'react'
import phone from '../assets/images/phone.png'

const DownloadSection = () => {
  return (
    <div className='w-full bg-black flex sm:flex-row flex-col gap-20 relative items-center justify-center sm:p-10 leading-tight p-10'>

    <img src={phone} alt="" srcset="" className='w-96' />


    <div className="flex flex-col gap-2 sm:text-left text-white text-center w-full sm:w-[30%]">
    <h1 className='text-[50px] font-bold'>Download your shows to watch offline</h1>
    <p className='text-[20px]'>Save your favorites easily and always have something to watch.</p>
    
    </div>

      
    </div>
  )
}

export default DownloadSection
