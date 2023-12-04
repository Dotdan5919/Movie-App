import React, { useState } from 'react'


import SingleMovie1 from './SingleMovie1'

import { Moviearray } from './MovieArray'
import { click } from '@testing-library/user-event/dist/click'
import { useContext } from 'react'
import { HomeContext } from '../Contexts/HomeContext'


const MovieSlider = (prop) => {

    const [movieArray,setMovieArray]=useState(Moviearray)
    const{videocontoller,setVideoController,movies,setmovies}=useContext(HomeContext);
    



  return (
    
      
    <div className="flex flex-col gap-5 col-start-4 row-start-3">
    <h1 className='text-white font-bold'>Hot movies</h1>
    <div className='w-[800px]  flex  gap-5 h-96'>
    {

        movieArray.map((e)=>{

            return(

                <SingleMovie1 name={e.MovieName} src={e.Source}  clicker={(x)=>prop.clicker(x)} id={e.id}/>

            )


        })

    }
    
    
    


    

    
    </div>
    
    </div>
    
  )
}

export default MovieSlider
