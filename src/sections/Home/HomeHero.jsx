import React, { useEffect, useRef, useState } from 'react'
import NavBarLoggedIn from '../../components/NavBarLoggedIn'
import Movie from '../../assets/videos/Avengers.mp4'
import MoviePoster from '../../assets/images/end game.jpeg'
import MovieSlider from '../../components/MovieSlider'
import ReactPlayer from 'react-player'
import { Moviearray } from '../../components/MovieArray'
const HomeHero = () => {

  const [videocontoller,setVideoController]=useState(1);
const videoref=useRef(null);
const [movies,setmovies]=useState(Moviearray);
let MoviePlaying;


switch(videocontoller){

  case 1:
 MoviePlaying= movies.filter(function(movie){

return movie.id===1;

 });
    break;

    case 2:
      MoviePlaying= movies.filter(function(movie){

        return movie.id===2;
        
         });
      break;

      case 3:
        MoviePlaying= movies.filter(function(movie){

          return movie.id===3;
          
           });
           MoviePlaying=MoviePlaying.MovieName;
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
    <div className='w-screen h-screen'>
      <NavBarLoggedIn/>
      
      {/*<video src={Movie} className='absolute z-0  top-[-80px] '  loop   width="90000" ref={videoref} id="videoref" > </video>*/}
    <div className="absolute  w-screen h-screen z-0 p-7 top-[-160px] left-[-300px]">
      <ReactPlayer className="absolute z-0  " url={MoviePlaying}  width="1860px" height="1000px" playing="true" />
      </div>
    <div className="flex w-full h-full absolute z-1 bg-gray-900 opacity-70 top-0">
    
    </div>
<div className="grid relative grid-cols-7 grid-rows-9   p-10 leading-tight z-10  h-[100%]">
    <h1 className=' text-white text-[50px] font-bold  col-start-1 row-start-2 col-span-2  '> The Avengers</h1>
        <p className='text-white col-start-1 row-span-2 col-span-2 row-start-2 mt-20 leading-5 text-[12px] '>Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name.
      Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to 2012's The Avengers
       and 2015's Avengers: Age of Ultron, and the 22nd film in the Marvel Cinematic Universe (MCU). </p>
        <button className='bg-red-600 text-white row-start-3  col-start-1 mt-20 p-5 h-20 rounded-xl shadow-md hover:bg-red-800'>Watch now</button>
    
    
    <MovieSlider clicker={(set)=>setVideoController(set)}/>
        </div>
  
    
      </div>
  )
}

export default HomeHero
