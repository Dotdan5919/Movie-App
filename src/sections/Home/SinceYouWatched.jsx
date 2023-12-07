import React from 'react'
import SingleMovie from '../../components/SingleMovie'
import { useEffect,useState } from 'react'

const SinceYouWatched = () => {

    let Array=[];

const [SinceYouWatchedArray, setSinceYouWatchedArray] = useState([]);

let result;
let JON;

useEffect(()=>{

const fetchData = async () => {  const url = 'https://www.omdbapi.com/?s=John&apikey=60879b0d';


try {
  const response = await fetch(url);
   result = await response.json();

     setSinceYouWatchedArray(result.Search);

 
  
 



} catch (error) {
  console.error(error);
}

}
fetchData();


},[])
  return (
    <div className=' flex flex-col p-10 gap-7 '>
    <h1 className='text-white font-bold text-lg'>Since you watched John Wick</h1>
    <div className='grid grid-rows-1  grid-flow-col gap-7  overflow-scroll'>
    {SinceYouWatchedArray.map((e)=>{


        return (<SingleMovie  name={e.Title} image={e.Poster} year={e.Year} type={e.Type}  />)

    })}
    </div>

      
      

    </div>
  )
}

export default SinceYouWatched
