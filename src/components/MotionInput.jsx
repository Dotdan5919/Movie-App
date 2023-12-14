import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

const MotionInput = (props) => {

const[activeInput,setActiveInput]=useState(false);
const ref=useRef(null);
const [value,setValue]=useState(props.val);
let InputClass;
if(props.color==="white"){
 InputClass="h-[50px] w-full bg-white outline-none p-8 border-2  border-red-400"
}
else if(props.color==="black")
{

   InputClass="h-[50px] w-full bg-gray-600 outline-none p-8"


}
else{

   InputClass="h-[50px] w-full  outline-none p-8"


}

useEffect(()=>{

  
ref.current.value===""?setActiveInput(false):setActiveInput(true);

  



},[])


  return (
    <div className={'w-full flex flex-col gap-3 relative'+ " " +props.extraclass}>
      

   <motion.h1 initial={{x:0,y:0}} animate={activeInput?{x:1,y:-20,scale:.7,transitionDelay:2}:"d"} className='absolute p-5 cursor-pointer opacity-40 '>{props.name} </motion.h1> 
    <input type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}  value={value} onChange={()=>{setValue()}} maxLength={props.type==="password"?10:50}
    
    />
<p className='absolute top-[65px] left-[2px]'>{props.error}</p>

    </div>
  )
}

export default MotionInput
