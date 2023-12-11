import React, { useRef, useState } from 'react'


import SingleMovie1 from './SingleMovie1'

import { Moviearray } from './MovieArray'
import { click } from '@testing-library/user-event/dist/click'
import { useContext } from 'react'
import { HomeHeroContext } from '../Contexts/HomeHeroContext'
import { IoIosArrowDropleftCircle, IoMdArrowDroprightCircle, IoMdArrowForward, IoIosArrowDroprightCircle,IoIosArrowDropleft,IoIosArrowDropright } from 'react-icons/io'


const MovieSlider = (prop) => {

    const [movieArray,setMovieArray]=useState(Moviearray)
    const{videocontoller,setVideoController,movies,setmovies}=useContext(HomeHeroContext);
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
    
      
    <div className="flex flex-col h-fit gap-5 sm:col-start-4 sm:row-start-3 col-start-1 w-fit row-start-4 bg-opacity-10 relative" >
    <h1 className='text-white font-bold z-[3]'>Hot movies</h1>
    <IoIosArrowDropleft onClick={()=>handleClick("left")}  className='absolute text-white flex bottom-[35%] left-0     text-5xl z-30 hover:scale-[1.2] transition-all duration-700'  />
    <IoIosArrowDropright onClick={()=>handleClick("right")}  className='absolute text-white flex bottom-[35%]  right-[7%]    text-5xl z-30 hover:scale-[1.2] transition-all duration-700' />
    
    <div className="absolute bg-gradient-to-l from-transparent  to-black  opacity-[.2] my-10 w-20 h-[75%] z-[1]"></div>
    <div className="absolute bg-gradient-to-r from-transparent right-[7%] to-black  opacity-[.9] my-10 w-20 h-[75%] z-[1]"></div>
   
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
    
    
    </div>
    
  )
}

export default MovieSlider
