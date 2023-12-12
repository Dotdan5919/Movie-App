import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HomeHeroContext } from '../Contexts/HomeHeroContext'
import { WatchlistContext } from '../Contexts/WatchListContext'
import { useContext } from 'react'
import { useEffect } from 'react'


const SingleMovie1 = (props) => {

  const {videocontoller,setVideoController,movies,setmovies,isClicked,setIsClicked,PlayVideo,setplayVideo}=useContext(HomeHeroContext);
  const {inViewActive,setInViewActive}=useContext(WatchlistContext);

  const variant={initial:{scale:1},animate:{scale:1.3}};
  

  const handlePlay=()=>
  {
    

   setplayVideo(!PlayVideo);
  

  }
 
  
useEffect(()=>


{
  let timeoutId;

  

  timeoutId= inViewActive && setTimeout(() => {
  
     setplayVideo(true);
    // setIsClicked(props.id);

  
}, 5000);



if(inViewActive===false){

  setplayVideo(false);

}

return ()=>clearTimeout(timeoutId); //Clears timeout

})

  
    // const source=require(props.src);
  return (
    <motion.div className='text-white w-[150px] shadow-lg flex flex-col gap-2 h-full'   variants={variant}   initial="initial" animate={isClicked===props.id?"animate":"initial"} onClick={()=>{props.clicker(props.id); isClicked===props.id?setIsClicked(null):setIsClicked(props.id);handlePlay()}}   >
      
    <img src={props.src} alt="" className='w-[150px] h-[230px]'/>
    
    
    {props.name}


    {     videocontoller===props.id?<motion.div className='w-20 h-[2px] rounded-md bg-red-600' initial={{scale:1,translateX:'40px'}} animate={{scale:1,translateX:'0px'}} transition={{duration:.9}}  ></motion.div>:"" }


    </motion.div>
      
  )
}

export default SingleMovie1
