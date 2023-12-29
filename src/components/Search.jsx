import React, { useContext, useEffect, useRef, useState } from 'react'

import { IoIosClose, IoIosSearch } from 'react-icons/io'
import { AnimatePresence, animate, motion } from 'framer-motion';
import { useLocation, useNavigate, } from 'react-router-dom';
import { WatchlistContext } from '../Contexts/WatchListContext';
const Search = () => {

    const {searchActive,setSearchActive}=useContext(WatchlistContext);
    const [filled,setfilled]=useState(false);
    const input=useRef();
    const [searchTerm,setSearchTerm]=useState('');
    const navigate=useNavigate()
    const {pathname}=useLocation();
    
    let search=()=>{

      


    }

 
    
    useEffect(()=>
    {
        

        if(input.current.value===""){


            setfilled(false);
           
            
         searchActive && navigate('/home/homepage');

         //if the search bar is empty navigate to homepage
        }
        else
        {


            setfilled(true);
            navigate('/home/search/' + searchTerm);

            // if the search bar is filled navigate to search page
        }





    },[searchTerm,setSearchTerm])
    
  return (
    <AnimatePresence>
    <motion.div className={'flex  items-center  gap-2 rounded-sm p-1 text-lg w-50 overflow-hidden  ' + (searchActive?"border-2":"")}  >
    <IoIosSearch className='cursor-pointer hover:text-red-400 hover:scale-125    transition-all duration-300' onClick={()=>{setSearchActive(!searchActive)}}/> 
    <motion.input type="text"  className={'outline-none bg-transparent rounded-sm tx-sm ' + (searchActive?"flex":"hidden")} placeholder='Title,people,genres'
    value={searchTerm}
    
    ref={input} onChange={(event)=>{search();setfilled(true);setSearchTerm(event.target.value)}}  id="input"
   
    animate={searchActive?{scale:1,translateX:2}:{scale:0,translateX:100}} 
    
    />
      
    {filled?<IoIosClose className={searchActive?"flex text-2xl cursor-pointer":"hidden"} onClick={()=>{input.current.value="";setfilled(false);setSearchTerm("")}} />:""}
    
    </motion.div>
    </AnimatePresence>
  )
}

export default Search
