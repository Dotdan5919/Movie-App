import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import SingleMovie from '../../components/SingleMovie'
import { WatchlistContext } from '../../Contexts/WatchListContext';
import { IoIosArrowDropleft,IoIosArrowDropright } from 'react-icons/io';


const Watchlist = (props) => {
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
     

 newWatchListArray && setWatchlistArray([...newWatchListArray]);




},[])
  return (
    <div className={props.grid==="1"?"flex flex-col w-screen bg-black gap-2   relative  ":"items-center flex flex-col pt-7"}>
    
    <IoIosArrowDropleft className={props.grid==="1"?'absolute text-white flex bottom-[35%] left-4  justify-between   text-5xl z-30 hover:scale-[1.2] transition-all duration-700':"hidden"} onClick={()=>{handleClick("left")}} />
    <IoIosArrowDropright className={props.grid==="1"?'absolute text-white flex bottom-[35%] right-4  justify-between   text-5xl z-30 hover:scale-[1.2] transition-all duration-700':"hidden"} onClick={()=>{handleClick("right")}} />
    
    <div className={props.grid==="1"?"absolute bg-gradient-to-l from-transparent  to-black w-20 h-[100%] z-[1]":"hidden"}></div>
    <div className={props.grid==="1"?"absolute bg-gradient-to-r from-transparent right-0 to-black w-20 h-[100%] z-[1]":"hidden"}></div>


    <h1 className={props.grid==="1"?'text-white font-bold text-lg p-10':"hidden"} >Let take a look at your Watchlist</h1>
    <h1 className={props.grid==="1"?'hidden':"text-white font-bold  p-10 w-full text-2xl"} > Watchlist</h1>

    <div className={props.grid==="1"?'grid grid-rows-1  grid-flow-col gap-7 w-full justify-start overflow-scroll':
    "grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3   grid-cols-2 sm:w-auto w-screen gap-4  p-3   "
  
  
  } id="watchlist">
    

    {WatchlistArray && WatchlistArray.map((e)=>{


        return (<SingleMovie  name={e.Title} image={e.Poster} year={e.Year}  />)

    })}
    {
      WatchlistArray.length<1?(<h1 className='text-white self-center w-full  bg-slate-500 bg-opacity-10 p-12 ml-auto'>No Movie on your wish list found</h1>):""

    }
      

      
      

    </div>
    </div>
  )

}

export default Watchlist
