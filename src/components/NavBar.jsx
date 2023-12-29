import React, { useContext, useEffect,useState } from 'react'
import logo from '../assets/logos/moplay logo_1.png'
import logo2 from '../assets/logos/moplay logo.png'

import { NavLink } from 'react-router-dom'
import { WatchlistContext } from '../Contexts/WatchListContext'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signOut,deleteUser,signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

const NavBar = (props) => {

// this navbar is used when user is not logged in
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
  const user=auth.currentUser;
  const [isLoading,setIsLoading]=useState();

  const {isLoggedIn,setIsLoggedIn}=useContext(WatchlistContext);


  const handleSignOut=()=>{

    

    signOut(auth).then(
()=>{

  
  
}

    )
    .catch((err)=>{

    })




  }
  

  useEffect(()=>
  {

    const listen=onAuthStateChanged(auth,(user)=>{


      if(user)
      {
      
      
        setIsLoggedIn(true)
        
      }
      else{
      
      
        setIsLoggedIn(false)
        
      
      }


      return ()=>{

        listen();

        //the above method listens to any authentication changes in the application
      }

    },[]);

      

    






  })
  return (
    <div className='w-full  h-24 flex justify-between z-[99] relative items-center'>
    <NavLink to="/">
    {props.logo==="black"?( <img src={logo2} alt="" srcset="" className='w-[180px]'/>):( <img src={logo} alt="" srcset="" className='w-[180px]'/>)}
    </NavLink>

    {isLoggedIn?( <button className='bg-red-600 rounded-sm text-white hover:bg-red-800 h-10 p-3 flex items-center' onClick={()=>{handleSignOut()}} >Sign out</button>):(
      <NavLink to="/signin">
    <button className='bg-red-600 rounded-sm text-white hover:bg-red-800 h-10 p-3 flex items-center'  >Sign in</button> </NavLink>
 
 )}
     </div>
  )
}

export default NavBar
