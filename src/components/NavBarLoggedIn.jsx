import React, { useContext, useEffect, useState } from 'react'
import logo2 from '../assets/logos/moplay logo_1.png'
import { IoIosArrowDown, IoIosArrowUp, IoIosNotifications, IoIosSearch } from 'react-icons/io'
import Profilepics from '../assets/images/profilesample.jpg'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signOut,deleteUser,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { Firestore,getDoc,onSnapshot,query,where } from 'firebase/firestore'
import { WatchlistContext } from '../Contexts/WatchListContext'
import Watch from '../sections/Welcome/Watch'

const NavBarLoggedIn = () => {
  const [notificationActive,setNotificationActive]=useState(false);
  const [userNav,setUserNav]=useState(false);
  const {WatchlistArray,colRef,setProfileImg,profileImg,setMembership,membership,searchActive,setSearchActive}=useContext(WatchlistContext);


  
const navigate=useNavigate();

const firebaseConfig = {
    apiKey: "AIzaSyB0BZUtbN-CIb7yV71UoC4iMwifSkqoDnY",
    authDomain: "movie-app-16fcb.firebaseapp.com",
    projectId: "movie-app-16fcb",
    storageBucket: "movie-app-16fcb.appspot.com",
    messagingSenderId: "1046262940262",
    appId: "1:1046262940262:web:81bb6114b747a7e8e4a3a7",
    measurementId: "G-B7RQLELCC7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth(app);
 


  const handleSignOut=()=>

  {




    signOut(auth).then(()=>
    
    
    
    {


navigate("/signin")

// signout then return to signin page

    })
    




  }






  useEffect(()=>
  {

if(searchActive===true)
{

setNotificationActive(false);
setUserNav(false);

//this tells notication and user navigation to close when the search bar is open this also goes vice-versal


}


    const listen=onAuthStateChanged(auth,(user)=>{


        if(user)
        {
        
        



          
        }
        else{
        
        
         navigate("/signin")
        
        }
  
  
        return ()=>{
  
          listen();


          //listens for auth changes in the application
        }
    })








  })


  return (
    <div className='w-full  h-24 flex justify-between z-[99] absolute items-center p-4'>
    <div className="flex gap-5 justify-center items-center text-white " onClick={()=>{setNotificationActive(false);setUserNav(false)}}>
    <NavLink to="/home/homepage">
    <img src={logo2} alt="" srcset="" className='w-[180px]'/>
    </NavLink>
    <div className="md:flex gap-12 hidden ">
    <NavLink to="/home/exclusive">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Exclusive</li>
    </NavLink>
    <NavLink to="/home/trending">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Trending</li>
    </NavLink>
    <NavLink to="/home/upcoming">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Upcoming</li>
    </NavLink>
    <NavLink to="/home/watchlist">
    <li className='list-none text-md cursor-pointer hover:text-red-400 transition-all duration-300'>Watchlist</li>
    </NavLink>
    </div>
    </div>

<div className="flex gap-4 text-white justify-center items-center">

    <div className='flex gap-2 text-lg items-center relative'>
    <Search/>
    <IoIosNotifications className='cursor-pointer hover:text-red-400 transition-all duration-300' onClick={()=>{setNotificationActive(!notificationActive);userNav?setUserNav(false):setUserNav(false);searchActive?setSearchActive(false):setSearchActive(false)}}/>

    <div className={notificationActive?("flex flex-col absolute bg-black  bg-opacity-70 w-50  top-10 md:right-1 -right-7 w-80 h-70 overflow-y-hidden"):"hidden"} onClick={()=>{setNotificationActive(false)}}>
<h1 className='p-3 bg-teal-100 bg-opacity-20'>Notification</h1>
<div className="flex gap-2 items-center hover:bg-black hover:bg-opacity-70 justify-start p-5">
<div className="w-10 h-20 flex justify-center items-center">
<div className="rounded-full overflow-hidden  w-10 h-10">
    <img src={profileImg} alt="" className='w-10 h-10'/>
    </div>
</div>
<p className='text-xs text-left'> 
<NavLink to="/home/watchlist">
You have {WatchlistArray.length} movies in your watchlist 
</NavLink> </p>
</div>
<div className="flex justify-center items-center">
<hr className=' w-11/12 '/></div>
<div className="flex gap-2 items-center  hover:bg-black hover:bg-opacity-40 justify-start p-5">
<div className="w-10 h-20 flex justify-start items-center">
<div className="rounded-full overflow-hidden  w-10 h-10">
    <img src="/images/Avatar.jpg" alt="" className='w-10 h-10'/>
    </div>
</div>
<p className='text-xs text-left '>
<NavLink to="/home/trending"> 
Check out our new Movies </NavLink> </p>
</div>

</div>

    
    </div>
    <div className="profile-picture flex items-center justify-center relative  gap-2">
    <div className="rounded-full overflow-hidden   items-center justify-center h-10">
    {searchActive?"":(<img src={profileImg} alt="" className='w-10 h-10'/>)}
 
    </div>
    {userNav?(<IoIosArrowUp onClick={()=>{setUserNav(!userNav); notificationActive?setNotificationActive(false):setNotificationActive(false);searchActive?setSearchActive(false):setSearchActive(false) }}/>
):(<IoIosArrowDown onClick={()=>{setUserNav(!userNav); notificationActive?setNotificationActive(false):setNotificationActive(false);searchActive?setSearchActive(false):setSearchActive(false) }}/>
)}
    {   
    userNav?(  <div className=" md:w-[100px]  w-[150px] -left-20  flex flex-col py-5 absolute md:-left-12 top-12 bg-black bg-opacity-50 mr-2">
    <li className='list-none p-2 cursor-pointer text-center hover:bg-slate-400 w-full md:hidden flex justify-center items-center' ><NavLink className="flex justify-center items-center" to="/home/exclusive">Exclusive</NavLink></li>
    <li className='list-none p-2 cursor-pointer text-center hover:bg-slate-400 w-full md:hidden flex justify-center items-center' ><NavLink className="flex justify-center items-center" to="/home/trending">Trending</NavLink></li>
    <li className='list-none p-2 cursor-pointer text-center hover:bg-slate-400 w-full md:hidden flex justify-center items-center' ><NavLink className="flex justify-center items-center" to="/home/upcoming">Upcoming</NavLink></li>
    <li className='list-none p-2 cursor-pointer text-center hover:bg-slate-400 w-full md:hidden flex justify-center items-center' ><NavLink className="flex justify-center items-center" to="/home/watchlist">Watchlist</NavLink></li>
    <li className='list-none p-2 cursor-pointer text-center hover:bg-slate-400 w-full' onClick={()=>{setUserNav(false)}}><NavLink to="/home/profile">Profile</NavLink></li>
    <li className='list-none p-2 cursor-pointer text-center hover:bg-slate-400 w-full' onClick={()=>{handleSignOut()}}>Signout</li>
</div>):""



}




    </div>


    

</div>

   </div>
  )
}

export default NavBarLoggedIn
