import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import SingleMovie from '../../components/SingleMovie'
import { WatchlistContext } from '../../Contexts/WatchListContext';
import { IoIosArrowDropleft,IoIosArrowDropright } from 'react-icons/io';


const Watchlist = () => {
  const {WatchlistArray,setWatchlistArray}=useContext(WatchlistContext);
  const handleClick=(direction)=>
  {
    
      let SinceYouWatched=document.getElementById("watchlist");
      SinceYouWatched.style.scrollBehavior="smooth";

      if(direction==="left"){
          SinceYouWatched.scrollLeft-=700;
          
         
          console.log("left")

      }

      else if (direction==="right")
      {

          SinceYouWatched.scrollLeft+=700;
          console.log("right")



      }



  }


useEffect(()=>{

  const newWatchListArray=JSON.parse(localStorage.getItem('WatchListArray'));
     
  setWatchlistArray([...newWatchListArray]);




},[])
  return (
    <div className="flex flex-col w-screen bg-black gap-2 relative ">
    
    <IoIosArrowDropleft className='absolute text-white flex bottom-[35%] left-4  justify-between   text-5xl z-30 hover:scale-[1.2] transition-all duration-700' onClick={()=>{handleClick("left")}} />
    <IoIosArrowDropright className='absolute text-white flex bottom-[35%] right-4  justify-between   text-5xl z-30 hover:scale-[1.2] transition-all duration-700' onClick={()=>{handleClick("right")}} />
    
    <div className="absolute bg-gradient-to-l from-transparent  to-black w-20 h-[100%] z-[1]"></div>
    <div className="absolute bg-gradient-to-r from-transparent right-0 to-black w-20 h-[100%] z-[1]"></div>
    <h1 className='text-white font-bold text-lg p-10'>Let take a look at your Watchlist</h1>
    <div className='grid grid-rows-1  grid-flow-col gap-7 w-full justify-start overflow-scroll' id="watchlist">
    

    {WatchlistArray && WatchlistArray.map((e)=>{


        return (<SingleMovie  name={e.Title} image={e.Poster} year={e.Year}  />)

    })}
    {
      WatchlistArray.length<1?(<h1>No Movie on your wish list found</h1>):""

    }
      

      
      

    </div>
    </div>
  )

}

export default Watchlist
