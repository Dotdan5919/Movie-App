import React, { useContext, useEffect, useState } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { WatchlistContext } from '../Contexts/WatchListContext';
import { json } from 'react-router-dom';
import { buildTransform } from 'framer-motion';
import { motion,AnimatePresence } from 'framer-motion';
const SingleMovie = (props) => {
    const[fav,setfav]=useState(false);
    const[New,setNew]=useState(false);

    const {WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger}=useContext(WatchlistContext);
    const newValue={
      Title:props.name,
      Year:props.year,
      Type:props.type,
      Poster:props.image

    };
    const store=()=>
    {
      const getVal=localStorage.getItem('WatchListArray');
     
      
     
    
      
      
       if(getVal===""){

      
        // if there is nothing in the local storage watchlist
       localStorage.setItem('WatchListArray',JSON.stringify(newValue))      

    }

    else{
   
    
      const favValues=JSON.parse(localStorage.getItem('WatchListArray'))
    


        favValues.push(newValue);
        localStorage.setItem('WatchListArray',JSON.stringify(favValues));
      
      
    

    }
     const newWatchListArray=JSON.parse(localStorage.getItem('WatchListArray'));
     
     newWatchListArray && setWatchlistArray([...newWatchListArray]);

    }

    const remove=()=>
    {
      const getVal=localStorage.getItem('WatchListArray');
     
      
     
    
      
      
      if(getVal===""){

      //  const newValue=[{
      //    Title:props.name,
      //    Year:props.year,
      //    Type:props.type,
      //    Poster:props.image
 
      //  }];
     
       // if there is nothing in the local storage watchlist
      // localStorage.setItem('WatchListArray',JSON.stringify(newValue))      

   }

   else{
    
   
     const favValues=JSON.parse(localStorage.getItem('WatchListArray'));
    
     
    

      favValues.splice(favValues.findIndex((e)=>e.Title===props.name),1);

    
      localStorage.setItem('WatchListArray',JSON.stringify(favValues));
     
    
   }
    const newWatchListArray=JSON.parse(localStorage.getItem('WatchListArray'));
     
    newWatchListArray && setWatchlistArray([...newWatchListArray]);




    }

useEffect(()=>



{
  const fav=JSON.parse(localStorage.getItem('WatchListArray'));

  if(fav.some((x)=>x.Title===props.name))
  {

    setfav(true);
   
  }
  else{
    setfav(false);



  }

  if(parseInt(props.year)>2021)
  {
setNew(true);

  }

  // console.log(JSON.parse(localStorage.getItem('WatchListArray')))



})


  return (
    <AnimatePresence>
    <motion.div className=' w-52 h-[320px] relative hover:scale-110   transition-all duration-700' exit={{x:-100,opacity:0, scale:0}} whileInView={{x:0}} initial={{x:"-1vw"}} >
    {New?(<button className='bg-red-700 p-2  absolute shadow-lg text-white text-xs right-3 top-4 rounded-lg'>New</button>):""}

    <img src={props.image} alt="" className=' w-96  h-full object-cover' />
      
    <div className="flex absolute justify-between p-3 items-center w-full z-20 bottom-0 bg-black  bg-opacity-50">
    <div className="flex flex-col">
    <h1 className='text-white'>{props.name}</h1>

    <p className='text-white'>{props.year}</p>
    </div>
    {fav? <IoIosHeart className='text-red-500 text-lg' onClick={()=>{setfav(!fav);remove();}}/>: <IoIosHeartEmpty className='text-white text-lg'onClick={()=>{setfav(!fav);store()}}/>}
   
   
    
    </div>

    </motion.div>
    </AnimatePresence>
  )
}

export default SingleMovie
