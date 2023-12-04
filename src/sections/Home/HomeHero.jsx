import React, { useEffect, useRef, useState } from 'react'
import NavBarLoggedIn from '../../components/NavBarLoggedIn'
import Movie from '../../assets/videos/Avengers.mp4'
import MoviePoster from '../../assets/images/end game.jpeg'
import MovieSlider from '../../components/MovieSlider'
import ReactPlayer from 'react-player'
import { Moviearray } from '../../components/MovieArray'
import { HomeContext } from '../../Contexts/HomeContext'
const HomeHero = () => {

  const [videocontoller,setVideoController]=useState(1);
  const [PlayVideo,setplayVideo]=useState(false);

const videoref=useRef(null);
const [movies,setmovies]=useState(Moviearray);
const [isClicked,setIsClicked]=useState(1);

let Movie;
let MoviePlaying;

let MovieThumbnail;
let MovieName;
let MovieDescription;





switch(videocontoller){

  case 1:
    Movie= movies.filter((movie)=>{
      return movie.id===1
        
        
         });
         MovieThumbnail=Movie[0].MovieThumbnail;
         MoviePlaying=Movie[0].VideoSource;
         MovieName=Movie[0].MovieName;
         MovieDescription=Movie[0].Description;
         



    break;

    case 2:
      Movie= movies.filter((movie)=>{
        return movie.id===2
          
          
           });
         MovieThumbnail=Movie[0].MovieThumbnail;

           MoviePlaying=Movie[0].VideoSource;
         MovieName=Movie[0].MovieName;
         MovieDescription=Movie[0].Description;


      break;

      case 3:
        Movie= movies.filter((movie)=>{
        return movie.id===3
          
          
           });
         MovieThumbnail=Movie[0].MovieThumbnail;

           MoviePlaying=Movie[0].VideoSource;
         MovieName=Movie[0].MovieName;
         MovieDescription=Movie[0].Description;


           
    break;



    default:


}


useEffect(()=>
{

  
 setTimeout(() => {
  
    // videoref.current.play();
  // document.getElementById('videoref').play();
}, 4000);

  console.log(MoviePlaying);

})

  return (
    <HomeContext.Provider value={{videocontoller,setVideoController,movies,setmovies,isClicked,setIsClicked,PlayVideo,setplayVideo}}>
    <div className='w-screen h-screen relative'>
    
    
      <NavBarLoggedIn/>
      
   
      {/*<video src={Movie} className='absolute z-0  top-[-80px] '  loop   width="90000" ref={videoref} id="videoref" > </video>*/}
    <div className="absolute flex  bg-red-300 w-[2200px] h-full z-0 p-7 top-[-160px] left-[-300px] overflow-hidden">
    {PlayVideo?false:<img src={MovieThumbnail} alt='Thumbnail' className=' z-20 w-[1860px] h-[1000px]'/>}
      <ReactPlayer className="absolute z-0  " url={MoviePlaying}  width="1860px" height="1000px" playing={PlayVideo} loop={true} autoPlay={true}  />
      </div>
     
    <div className="flex w-full h-full absolute z-1 bg-gray-900 opacity-70 top-0">
    
    </div>
<div className="grid relative grid-cols-7 grid-rows-9   p-10 leading-tight z-10  h-[100%]">
    <h1 className=' text-white text-[50px] font-bold  col-start-1 row-start-2 col-span-3  '> {MovieName}</h1>
        <p className='text-white col-start-1 row-span-2 col-span-2 row-start-2 mt-20 leading-5 text-[12px] '>{MovieDescription}</p>
        <button className='bg-red-600 text-white row-start-3  col-start-1 mt-20 p-5 h-20 rounded-xl shadow-md hover:bg-red-800'>Watch now</button>
    
    
    <MovieSlider clicker={(set)=>setVideoController(set)}/>
        </div>
  
       
      </div>
      </HomeContext.Provider>
  )
}

export default HomeHero
