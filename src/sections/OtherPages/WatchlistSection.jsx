import React from 'react'
import Watchlist from '../Home/Watchlist'
import { WatchlistContext } from '../../Contexts/WatchListContext';
import { useContext } from 'react';

const WatchlistSection = () => {
  const {WatchlistArray,setWatchlistArray}=useContext(WatchlistContext);
  return (
    <div>
      
<Watchlist grid="3"/>

    
    </div>
  )
}

export default WatchlistSection
