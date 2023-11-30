import React from 'react'
import EnjoyImage from '../assets/images/2150866083.jpg'
const EnjoySection = () => {
  return (
    <div className='w-full bg-black flex sm:flex-row flex-col gap-20 relative items-center justify-center sm:p-10 leading-tight p-10'>

<div className="flex flex-col text-center sm:text-left text-white relative gap-4">
    <h1 className='text-[50px] font-bold'>Enjoy on your Tv</h1>
    <p className='text-[20px]'>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players, and more.</p>
    
    </div>
<img src={EnjoyImage} className='w-96' alt="" srcset="" />

      
    </div>
  )
}

export default EnjoySection
