import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HomeContext } from '../Contexts/HomeContext'
import { useContext } from 'react'
import { useEffect } from 'react'


const SingleMovie1 = (props) => {

  const {videocontoller,setVideoController,movies,setmovies,isClicked,setIsClicked,PlayVideo,setplayVideo}=useContext(HomeContext);
  const variant={initial:{scale:1},animate:{scale:1.3}};

  const handlePlay=()=>
  {

   PlayVideo?setplayVideo(false):setplayVideo(true);
  

  }
  
useEffect(()=>


{
setTimeout(() => {
  
    setplayVideo(true);

}, 5000);




},[])

  
    // const source=require(props.src);
  return (
    <motion.div className='text-white w-[150px] shadow-lg'  variants={variant}   initial="initial" animate={isClicked===props.id?"animate":"initial"} onClick={()=>{props.clicker(props.id); isClicked===props.id?setIsClicked(null):setIsClicked(props.id);handlePlay()}}  >
      
    <img src={props.src} alt="" className='w-[150px] h-[230px]'/>
    
    
    {props.name}

    </motion.div>
  )
}

export default SingleMovie1
