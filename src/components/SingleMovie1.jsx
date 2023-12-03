import React from 'react'
import { motion } from 'framer-motion'


const SingleMovie1 = (props) => {

    // const source=require(props.src);
  return (
    <motion.div className='text-white w-[150px]'   initial={{scale:0}} animate={{scale:1}} whileHover={{scale:1.2}}  onClick={()=>{props.clicker(props.id)  }}  >
      
    <img src={props.src} alt="" className='w-[150px] h-[230px]'/>
    
    
    {props.name}

    </motion.div>
  )
}

export default SingleMovie1
