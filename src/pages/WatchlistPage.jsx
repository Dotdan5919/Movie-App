import React from 'react'
import NavBarLoggedIn from '../components/NavBarLoggedIn'
import Footer from '../../src/sections/Home/Footer'
import { WatchlistContext } from '../Contexts/WatchListContext'
import WatchlistSection from '../sections/OtherPages/WatchlistSection'
import { useContext } from 'react'


const WatchlistPage = () => {

  const {WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger}=useContext(WatchlistContext);

  return (
    
    <div className='p-10'>

    

    <WatchlistSection grid="2"/>
    <Footer/>


      
    </div>
    
  )
}

export default WatchlistPage
