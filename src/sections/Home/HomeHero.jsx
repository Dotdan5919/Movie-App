import React, { useEffect, useRef, useState } from 'react'
import NavBarLoggedIn from '../../components/NavBarLoggedIn'
import Movie from '../../assets/videos/Avengers.mp4'
import MoviePoster from '../../assets/images/end game.jpeg'
import MovieSlider from '../../components/MovieSlider'
import ReactPlayer from 'react-player'
import { Moviearray } from '../../components/MovieArray'
import { HomeHeroContext } from '../../Contexts/HomeHeroContext'
import { IoIosVolumeHigh, IoMdVolumeMute } from 'react-icons/io'
const HomeHero = () => {

  const [videocontoller,setVideoController]=useState(1);
  const [PlayVideo,setplayVideo]=useState(false);
  const [volume, setVolume]=useState(false);

const videoref=useRef(null);
const [movies,setmovies]=useState(Moviearray);
const [isClicked,setIsClicked]=useState(1);

let Movie;
let MoviePlaying;

let MovieThumbnail;
let MovieName;
let MovieDescription;





const BackgroundMovie=()=>
{



  Movie= movies.filter((movie)=>{
    return movie.id===videocontoller
      
      
       });
     MovieThumbnail=Movie[0].MovieThumbnail;

       MoviePlaying=Movie[0].VideoSource;
     MovieName=Movie[0].MovieName;
     MovieDescription=Movie[0].Description;




}

BackgroundMovie();

useEffect(()=>
{

 

 

})

  return (
    <HomeHeroContext.Provider value={{videocontoller,setVideoController,movies,setmovies,isClicked,setIsClicked,PlayVideo,setplayVideo}}>
    <div className='w-screen h-screen relative'>
    
     {/*<video src={Movie} className='absolute z-0  top-[-80px] '  loop   width="90000" ref={videoref} id="videoref" > </video>*/}
     <div className="absolute flex  w-[100vw] h-screen z-0  overflow-hidden">
     {PlayVideo?false:<img src={MovieThumbnail} alt='Thumbnail' className=' z-20 absolute w-[100%] h-fit'/>}
       <ReactPlayer className=" absolute z-0 top-[-100px] left-[-200px] " url={MoviePlaying} playing={PlayVideo} loop={true} muted={volume} width="130%" height="130%" autoPlay={true}  />
       </div>
      
      <NavBarLoggedIn/>
      
   
     
    <div className="flex w-full h-full absolute z-1 bg-gray-900 opacity-70 top-0">
    
    </div>
<div className="grid relative grid-cols-7 grid-rows-6 grid-rows-9    p-10 leading-tight z-10  h-[100%]">
    <h1 className=' text-white text-[50px] font-bold  col-start-1 row-start-1  h-16  col-span-5 self-center  '> {MovieName}</h1>
        <p className='text-white col-start-1 row-span-1 col-span-2 row-start-2  leading-5 text-[12px]  '>{MovieDescription}</p>
        <button className='bg-red-600 text-white row-start-3  col-start-1  row-start-3 h-20 rounded-xl shadow-md hover:bg-red-800 self-end '>Watch now</button>
        <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white row-start-5 col-start-1">
        

        {
          volume?( <IoMdVolumeMute className='text-red-400  text-2xl' onClick={()=>setVolume(false)} />  ):(<IoIosVolumeHigh className='text-red-400  text-2xl' onClick={()=>setVolume(true)}/>)


        }
        
        
        
        </div>
    <MovieSlider clicker={(set)=>setVideoController(set)}/>
        </div>
  
       
      </div>
      </HomeHeroContext.Provider>
  )
}

export default HomeHero
