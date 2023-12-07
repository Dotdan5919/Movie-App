import React from 'react'
import { useEffect,useState } from 'react';
import SingleMovie from '../../components/SingleMovie'


const Watchlist = () => {
    let Array=[];

const [WatchlistArray, setWatchlistArray] = useState([]);

let result;
let JON;

useEffect(()=>{

const fetchData = async () => {  const url = 'https://www.omdbapi.com/?s=baby&apikey=60879b0d';


try {
  const response = await fetch(url);
   result = await response.json();

     setWatchlistArray(result.Search);

  console.log(WatchlistArray);
  
 



} catch (error) {
  console.error(error);
}

}
fetchData();


})
  return (
    <div className="flex flex-col  gap-2 ">
    <h1 className='text-white font-bold text-lg p-10'>Let take a look at your Watchlist</h1>
    <div className='grid grid-rows-1  grid-flow-col gap-7 w-full  overflow-scroll'>
    

    {WatchlistArray.map((e)=>{


        return (<SingleMovie  name={e.Title} image={e.Poster} year={e.Year}  />)

    })}
      

      
      

    </div>
    </div>
  )

}

export default Watchlist
