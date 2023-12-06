import React, { useRef, useState } from 'react'


import SingleMovie1 from './SingleMovie1'

import { Moviearray } from './MovieArray'
import { click } from '@testing-library/user-event/dist/click'
import { useContext } from 'react'
import { HomeContext } from '../Contexts/HomeContext'
import { IoIosArrowDropleftCircle, IoMdArrowDroprightCircle, IoMdArrowForward, IoIosArrowDroprightCircle } from 'react-icons/io'


const MovieSlider = (prop) => {

    const [movieArray,setMovieArray]=useState(Moviearray)
    const{videocontoller,setVideoController,movies,setmovies}=useContext(HomeContext);
    const navRef=useRef();

    const handleClick=(direction)=>
    {
      if(direction==="right"){
    let slider=document.getElementById("slider");
    slider.style.scrollBehavior="smooth";
    slider.scrollLeft+=1200;
  }
  else if(direction==="left")
  {

    let slider=document.getElementById("slider");
    slider.style.scrollBehavior="smooth";
    slider.scrollLeft-=1200;

  }






    }
    



  return (
    
      
    <div className="flex flex-col h-fit gap-5 col-start-4 row-start-3 w-fit  bg-opacity-10 relative" >
    <h1 className='text-white font-bold'>Hot movies</h1>
    <div className='w-[900px]  grid grid-flow-col relative gap-7 h-fit p-10 overflow-scroll' id="slider">
    {

        movieArray.map((e)=>{

            return(

                <SingleMovie1 name={e.MovieName} src={e.Source}  clicker={(x)=>prop.clicker(x)} id={e.id}/>

            )


        })

    }
    
    
    
<div className='w-40 p-7 '></div>

    

    
    </div>
    <div className="absolute flex gap-2   text-[30px]  text-white -bottom-10 pt-2 bg-red-500 bg-opacity-10 w-fit">
    <IoIosArrowDropleftCircle   onClick={()=>handleClick("left")}  className='hover:shadow-sm hover:text-red-400'/>
    <IoIosArrowDroprightCircle   onClick={()=>handleClick("right")}  className='hover:shadow-sm hover:text-red-400'/>
      
    </div>
    
    </div>
    
  )
}

export default MovieSlider
