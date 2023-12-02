import React from 'react'
import NavBar from '../../components/NavBar'
import bgImage from '../../assets/images/dark-vip-cinema-studio-still-life.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='w-full sm:h-screen  h-fit flex flex-col sm:p-10 p-2' >
      
<NavBar logo="white"/>
<img src={bgImage} alt=""  className='w-full h-full top-0 left-0 absolute z-[0] opacity-40'/>
<div className="flex flex-col items-center justify-center h-full p-10 mt-[80px] z-[2] relative text-center gap-5 ">
<motion.h1 className='text-white font-bold sm:text-[100px] text-[60px] leading-tight ' initial={{opacity:0,x:100}} animate={{opacity:1,x:0,delay:3,type:'spring'}}>Unlimited, movies and TV shows</motion.h1>
<p className='text-white sm:text-[40px] text-[25px] leading-tight '>Bring thearters to you home</p>
<p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
<form>
<div className='gap-2 flex w-[100%] h-auto'>
<input type="email" name="" id="" className='w-[60%] h-[auto]  p-4 opacity-40 bg-black text-white border-white border-2  '  placeholder='Email Address'/>
<button className='bg-red-600 w-40 p-4 text-white hover:bg-red-500 flex items-center justify-center text-xl'>Get Started <IoIosArrowForward />  </button>
</div>


</form>
</div>



    </div>
  )
}

export default Hero
