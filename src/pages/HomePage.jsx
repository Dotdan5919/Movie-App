import React, { useContext } from 'react'
import NavBarLoggedIn from '../components/NavBarLoggedIn'
import HomeHero from '../sections/Home/HomeHero'
import { useEffect,useState } from 'react'
import LeftoffSection from '../sections/Home/LeftoffSection'
import SinceYouWatched from '../sections/Home/SinceYouWatched'
import Watchlist from '../sections/Home/Watchlist'
import { WatchlistContext } from '../Contexts/WatchListContext'
import Explore from '../sections/Home/Explore'
import Genre from '../sections/Home/Genre'
import Footer from '../sections/Home/Footer'
import { useInView } from 'react-intersection-observer'

const HomePage = () => {

  const{WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger,inViewActive,setInViewActive}=useContext(WatchlistContext);
  const{ref,inView,entry}=useInView({threshold:0})

inView?setInViewActive(true):setInViewActive(false);



  useEffect(() => {
    // 
     
    
     const checkLocalStorage=localStorage.getItem('WatchListArray');
   

     if (checkLocalStorage==="" || localStorage.length===0  || checkLocalStorage===null) {

      //if localstorage has not being created


      
      localStorage.setItem('WatchListArray',JSON.stringify(WatchlistArray));
     
    }
    else{

     
   
     

    }
    
   
     
 
   
  },[]); // Empty dependency array ensures useEffect runs once when the component mounts





  return (
    
    <div className='w-screen overflow-x-hidden bg-black'>
<div ref={ref}>
<HomeHero/>
</div>
<LeftoffSection/>
<SinceYouWatched/>
<Watchlist grid="1" />
<Explore/>
<Genre/>
<Footer/>
</div>
 
    
  )
}

export default HomePage
