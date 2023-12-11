import React, { useEffect, useRef, useState } from 'react'

import { IoIosClose, IoIosSearch } from 'react-icons/io'
import { AnimatePresence, animate, motion } from 'framer-motion';
const Search = () => {

    const [searchActive,setSearchActive]=useState(false);
    const [filled,setfilled]=useState(false);
    const input=useRef();

    // const input=document.getElementById("input");

    // input.value="hi";
    
    useEffect(()=>
    {
        

        if(input.current.value===""){


            setfilled(false);
        }
        else
        {


            setfilled(true);
        }


    })
    
  return (
    <AnimatePresence>
    <motion.div className={'flex  items-center  gap-2 rounded-sm p-1 text-lg w-50 overflow-hidden  ' + (searchActive?"border-2":"")}  >
    <IoIosSearch className='cursor-pointer hover:text-red-400 hover:scale-125    transition-all duration-300' onClick={()=>{setSearchActive(!searchActive)}}/> 
    <motion.input type="text"  className={'outline-none bg-transparent rounded-sm tx-sm ' + (searchActive?"flex":"hidden")} placeholder='Title,people,genres' ref={input} onChange={()=>{setfilled(true);}}  id="input"
   
    animate={searchActive?{scale:1,translateX:2}:{scale:0,translateX:100}} 
    
    />
      
    {filled?<IoIosClose className={searchActive?"flex":"hidden"} onClick={()=>{input.current.value="";setfilled(false)}} />:""}
    
    </motion.div>
    </AnimatePresence>
  )
}

export default Search
