import React from 'react'
import SingleMovie from '../../components/SingleMovie'
import { useEffect,useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const SinceYouWatched = () => {

    let Array=[];

const [SinceYouWatchedArray, setSinceYouWatchedArray] = useState([]);
const handleClick=(direction)=>
    {
      
        let SinceYouWatched=document.getElementById("slideme");
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
    <div className=' flex flex-col p-10 gap-7 w-screen bg-black relative '>
    
    

    
    <IoIosArrowDropleft className='absolute text-white flex bottom-[35%] left-4  justify-between   text-5xl z-30 hover:scale-[1.2] transition-all duration-700' onClick={()=>{handleClick("left")}} />
    <IoIosArrowDropright className='absolute text-white flex bottom-[35%] right-4  justify-between   text-5xl z-30 hover:scale-[1.2] transition-all duration-700' onClick={()=>{handleClick("right")}} />
    
    <div className="absolute bg-gradient-to-l from-transparent  to-black w-20 h-[95%] z-[1]"></div>
    <div className="absolute bg-gradient-to-r from-transparent right-7 to-black w-20 h-[95%] z-[1]"></div>
    
    <h1 className='text-white font-bold text-lg z-[2]'>Since you watched John Wick</h1>

    <div className='grid grid-rows-1  grid-flow-col gap-7  overflow-x-scroll' id="slideme">
    {SinceYouWatchedArray.map((e)=>{


        return (<SingleMovie  name={e.Title} image={e.Poster} year={e.Year} type={e.Type}  />)

    })}
    </div>

      
      

    </div>
  )
}

export default SinceYouWatched
