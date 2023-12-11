import React from 'react'
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
const HomePage = () => {




  const [WatchlistArray, setWatchlistArray] = useState([]);
  const [WatchlistTrigger, setWatchlistTrigger] = useState(false);

  useEffect(() => {
    // 
     
    
     const checkLocalStorage=localStorage.getItem('WatchListArray');
   

     if (checkLocalStorage==="" || localStorage.length===0  || checkLocalStorage===null) {

      //if localstorage has not being created


      
      localStorage.setItem('WatchListArray',JSON.stringify(WatchlistArray));
      // console.log("watchlist created");
      //  const newWatchlistArray=JSON.parse(checkLocalStorage);
     
      //  setWatchlistArray(...newWatchlistArray);
      // localStorage.setItem('watchlistArray',JSON.stringify(WatchlistArray));
      // newWatchlistArray.push(...WatchlistArray);
     
    
    }
    else{

     
      // console.log("watchlist stated stored");
      

     
      // localStorage.setItem('watchlistArray',JSON.stringify(WatchlistArray));

     

    }
    
     // const watchlistArray=JSON.parse(localStorage.getItem('watchlistArray'));
   
    
 
   
  },[]); // Empty dependency array ensures useEffect runs once when the component mounts





  return (
    
    <WatchlistContext.Provider value={{WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger}}>
    <div className='w-screen overflow-x-hidden bg-black'>
<HomeHero/>

<LeftoffSection/>
<SinceYouWatched/>
<Watchlist/>
<Explore/>
<Genre/>
<Footer/>
</div>
</WatchlistContext.Provider>  
    
  )
}

export default HomePage
