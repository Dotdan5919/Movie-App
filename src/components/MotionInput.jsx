import React, { useEffect, useState } from 'react'

const MotionInput = (props) => {

const[activeInput,setActiveInput]=useState(false);

useEffect(()=>{

console.log(activeInput);
})


  return (
    <div className='w-full flex flex-col gap-3 relative'>
      

   <h1 className='absolute p-5 cursor-pointer opacity-40 '>{props.name} </h1> 
    <input type="props.type" className='h-[50px] w-full bg-gray-600 outline-none p-8' onFocus={()=>{setActiveInput(true)}} />
<p className='absolute top-[65px] left-[2px]'>{props.error}</p>

    </div>
  )
}

export default MotionInput
