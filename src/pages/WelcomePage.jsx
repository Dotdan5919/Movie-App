import React from 'react'
import Hero from '../sections/Hero'
import EnjoySection from '../sections/EnjoySection'
import DownloadSection from '../sections/DownloadSection'

const WelcomePage = () => {
  return (
    <div className='w-[100vw] overflow-x-hidden'>
      

<Hero/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<EnjoySection/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<DownloadSection/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />



    </div>
  )
}

export default WelcomePage
