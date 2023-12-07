import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import SingleMovie from '../../components/SingleMovie'
import { WatchlistContext } from '../../Contexts/WatchListContext';


const Watchlist = () => {
  const {WatchlistArray,setWatchlistArray}=useContext(WatchlistContext);
   

useEffect(()=>{

  const newWatchListArray=JSON.parse(localStorage.getItem('WatchListArray'));
     
  setWatchlistArray([...newWatchListArray]);




},[])
  return (
    <div className="flex flex-col  gap-2 ">
    <h1 className='text-white font-bold text-lg p-10'>Let take a look at your Watchlist</h1>
    <div className='grid grid-rows-1  grid-flow-col gap-7 w-full justify-start overflow-scroll'>
    

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
