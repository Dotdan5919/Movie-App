import React from 'react'
import Hero from '../sections/Hero'
import EnjoySection from '../sections/EnjoySection'
import DownloadSection from '../sections/DownloadSection'
import Watch from '../sections/Watch'
import Kids from '../sections/Kids'
import FrequentlyAsked from '../sections/FrequentlyAsked'
import FooterSection from '../sections/FooterSection'


const WelcomePage = () => {
  return (
    <div className='w-[100vw] overflow-x-hidden'>
      

<Hero/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<EnjoySection/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<DownloadSection/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<Watch/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />

<Kids/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<FrequentlyAsked/>
<hr className='bg-s bg-gray- bg-gray-700 h-2' />
<FooterSection/>


    </div>
  )
}

export default WelcomePage
