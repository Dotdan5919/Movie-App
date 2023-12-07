import React, { useState } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

const SingleMovie = (props) => {
    const[fav,setfav]=useState(false);

  return (
    <div className=' w-52 h-[320px] relative hover:scale-110 '>


    <img src={props.image} alt="" className=' w-96  h-full object-cover' />
      
    <div className="flex absolute justify-between p-3 items-center w-full z-20 bottom-0 bg-black  bg-opacity-50">
    <div className="flex flex-col">
    <h1 className='text-white'>{props.name}</h1>

    <p className='text-white'>{props.year}</p>
    </div>
    {fav? <IoIosHeart className='text-red-500 text-lg' onClick={()=>{setfav(!fav)}}/>: <IoIosHeartEmpty className='text-white text-lg'onClick={()=>{setfav(!fav)}}/>}
   
   
    
    </div>

    </div>
  )
}

export default SingleMovie
