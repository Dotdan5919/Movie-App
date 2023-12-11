import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'

const Footer = () => {
  return (
    <div className=' p-7 text-white  cursor-pointer w-screen bg-black'>
    <hr className='w-full border-1 border-white' />
    <div className="grid gap-2 grid-rows-15 grid-cols-15  p-7 ">
    <div className="flex flex-col col-start-1 row-span-1 gap-2">
    <h1 className='text-white '>Social</h1>
    <div className="flex gap-3 text-white row-start-2 col-start-1">
    <IoLogoFacebook/>
    <IoLogoInstagram/>
    <IoLogoYoutube/>

    
    </div>
    </div>

<h1 className=' col-start-1 row-start-3 text-gray-500 font-bold'>About</h1>
<p className='text-gray-50 text-xs font-thin col-start-1 row-start-4 '>Moplay information</p>
<p className='text-gray-50 text-xs font-thin col-start-1 row-start-5'>History</p>

<h1 className='row-start-3 col-start-2 text-gray-500 font-bold'>Hot Type</h1>
<p className='text-gray-50 text-xs font-thin row-start-4 col-start-2'>Action</p>
<p className='text-gray-50 text-xs font-thin row-start-5 col-start-2'>Sci-fi</p>
<p className='text-gray-50 text-xs font-thin row-start-6 col-start-2'>Adventure</p>
<p className='text-gray-50 text-xs font-thin row-start-7 col-start-2'>Superheroes</p>
<p className='text-gray-50 text-xs font-thin row-start-[8] col-start-2'>Horror</p>



<h1 className='row-start-3 col-start-3 text-gray-500 font-bold'>Policy</h1>
<p className='text-gray-50 text-xs font-thin col-start-3 row-start-4'>Term of Service</p>
<p className='text-gray-50 text-xs font-thin col-start-3 row-start-5'>Privacy</p>

<h1 className='md:row-start-3 md:col-start-4  row-start-[10]  col-start-1 text-gray-500 font-bold'>Customer support</h1>
<p className='text-gray-50 text-xs font-thin md:col-start-4 col-start-1 row-start-[11] md:row-start-4 '>Online support</p>
<p className='text-gray-50 text-xs font-thin md:col-start-4 col-start-1 row-start-[12] md:row-start-5 '>Common question</p>


<h1 className='md:row-start-3 row-start-[10] text-gray-500 font-bold '>Contact</h1>
<p className='text-gray-50 text-xs font-thin row-start-[11] md:row-start-4'>Hotline:124-245-2495</p>
<p className='text-gray-50 text-xs font-thin row-start-[12] md:row-start-5'>Email:contact@moplay.com</p>

<h1 className='md:row-start-3 text-gray-500 font-bold row-start-[10] '>Recruit</h1>
<p className='text-gray-50 text-xs font-thin md:row-start-4 row-start-[11]'>Job list</p>
<p className='text-gray-50 text-xs font-thin md:row-start-5 row-start-[12]'>Send your Cv</p>


<p className='text-gray-50 text-xs font-thin col-start-1 md:row-start-[9] row-start-[14]'>2024.Moplay.All rights reserved</p>






    
    </div>
      
    </div>
  )
}

export default Footer
