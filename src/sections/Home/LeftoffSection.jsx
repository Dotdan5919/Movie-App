import React, { useEffect, useState } from 'react'
import Leftoffbox from '../../components/Leftoffbox'
import { IoMdArrowDropleft,IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from 'react-icons/io'

const LeftoffSection = () => {
  let Array=[];

  const [leftoffArray, setLeftoffArray] = useState([]);

  let result;
let JON;



    
useEffect(()=>{

  const fetchData = async () => {  const url = 'https://www.omdbapi.com/?s=avengers&apikey=60879b0d';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2e41da2e9emsh5052f0589b6ce86p13a5c8jsn2018eab824dd',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

try {
	const response = await fetch(url);
     result = await response.json();
    //  result = await response.json();
    // const JON=JSON.parse(result);
    // const newJON=Object.entries(JON.results);
      // Array.push(...JON.results);
       setLeftoffArray(result.Search);


	
   



} catch (error) {
	console.error(error);
}
 
}
  fetchData();
 

},[])






      const handleClick=(direction)=>
      {
          let leftOffslide=document.getElementById("leftOffslide");
          leftOffslide.style.scrollBehavior="smooth";

          if(direction==="left"){
              leftOffslide.scrollLeft-=700;

              

          }

          else if (direction==="right")
          {

              leftOffslide.scrollLeft+=700;


          }



      }
    

  return (
    <div className=' text-white flex flex-col p-10 gap-3 z-1 relative w-screen bg-black mt-3'>
    <h1 className="text-white font-bold text-lg">Continue where you left off</h1>
      
    <div className="w-full gap-3 grid grid-flow-col grid-rows-1 overflow-x-scroll" id="leftOffslide">
    {
      leftoffArray && leftoffArray.map((e)=>{

        return ( <Leftoffbox url={e.Poster} name={e.Title}  percentage="10%"/> )


      })


    }
 

      </div>
      <div className="flex gap-2   text-[30px]  text-white -bottom-10 pt-2  bg-opacity-10 w-fit">
    <IoIosArrowDropleftCircle   onClick={()=>handleClick("left")}  className='hover:shadow-sm hover:text-red-400'/>
    <IoIosArrowDroprightCircle   onClick={()=>handleClick("right")}  className='hover:shadow-sm hover:text-red-400'/>
      
    
    </div>

    </div>
  )
}

export default LeftoffSection
