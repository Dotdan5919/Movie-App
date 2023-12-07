import React from 'react'
import { motion } from 'framer-motion'

const Leftoffbox = (props) => {
  return (
    <motion.div className='w-80 h-60 relative overflow-hidden ' whileHover={{scale:1.2}}>
    <div className="w-full bottom-0 absolute bg-black bg-opacity-70 h-20 p-5">
    <h1 className="text-white">{props.name}</h1>
    <p className="text-white font-thin text-sm">{props.percentage}</p>

    </div>
      <img src={props.url} alt="" srcset="" className=' object-cover w-full h-full ' />
    
          </motion.div>
  )
}

export default Leftoffbox
