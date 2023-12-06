import React from 'react'
import Leftoffbox from '../../components/Leftoffbox'
import { IoMdArrowDropleft,IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from 'react-icons/io'

const LeftoffSection = () => {



    const handleClick=(direction)=>
    {
        let leftOffslide=document.getElementById("leftOffslide");
        leftOffslide.style.scrollBehavior="smooth";

        if(direction==="left"){
            leftOffslide.scrollLeft-=700;

            

        }

        else if (direction==="right")
        {

            leftOffslide.scrollLeft+=700;


        }



    }
    

  return (
    <div className='w-full text-white flex flex-col p-10 gap-3 z-40 relative'>
    <h1 className="text-white font-bold text-lg">Continue where you left off</h1>
      
    <div className="w-full gap-3 grid grid-flow-col grid-rows-1 overflow-scroll" id="leftOffslide">
    <Leftoffbox/>
      <Leftoffbox/>
      <Leftoffbox/>
      <Leftoffbox/>
      <Leftoffbox/>
      <Leftoffbox/>
      <Leftoffbox/>
      <Leftoffbox/>

      </div>
      <div className="flex gap-2   text-[30px]  text-white -bottom-10 pt-2 bg-red-500 bg-opacity-10 w-fit">
    <IoIosArrowDropleftCircle   onClick={()=>handleClick("left")}  className='hover:shadow-sm hover:text-red-400'/>
    <IoIosArrowDroprightCircle   onClick={()=>handleClick("right")}  className='hover:shadow-sm hover:text-red-400'/>
      
    
    </div>

    </div>
  )
}

export default LeftoffSection
