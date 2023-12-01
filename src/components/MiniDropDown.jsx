import React, { useEffect, useState } from 'react'
import { IoCloseSharp, IoMdAdd, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const MiniDropDown = ({title,question,paragraph2}) => {
    const[activeDrop,setActiveDrop]=useState(false);
    const[dropClass,setDropClass]=useState();
// this is variant for framer-motion
const FreqVariant={

hidden:{

    opacity:0,
    x:'100vw'
},

visible:{

opacity:1,
x:0
    
},
transition:{
    type:'spring',
    stiffness:20,
    delay:.5


}

}

useEffect(

()=>


{

    activeDrop?setDropClass(" h-fit"):setDropClass("h-0 hidden ");

}


)


  return (
    <motion.div  variants={FreqVariant} animate="visible" initial="hidden" transition="transition" className=' w-3/4  flex flex-col text-left text-[25px] gap-1 '>
    <div className="w-full bg-gray-700 flex justify-between p-6 cursor-pointer" onClick={()=>{activeDrop?setActiveDrop(false):setActiveDrop(true)}}>
      <h1 className='font-bold'>{title}</h1>
      { activeDrop?(<IoMdClose/>):(<IoMdAdd/>) }
      
      </div>

<div className={"w-full bg-gray-700 p-5 flex flex-col gap-5 overflow-hidden transition-all duration-100 ease-in" +dropClass}>      
<p className='font-light'>{question}</p>

<p className='font-light'>{paragraph2}</p>

</div>
    </motion.div>
  )
}

export default MiniDropDown
