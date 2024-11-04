import React, { useEffect, useState } from 'react'
import LoginForm from '../components/loginForm'
import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signOut,deleteUser,signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import logo from '../assets/logos/moplay logo_1.png';



const SigninPage = () => {


  const[activeHint,setActiveHint]=useState(true);



  


  const handleClose=()=>
  {


    setActiveHint(false);
   



  }





  const navigate=useNavigate();
// firebase connection
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

const auth=getAuth(app);

  useEffect(()=>{


    const listen=onAuthStateChanged(auth,(user)=>{


      if(user)
      {
      
        navigate("/home/homepage");
        
      }
      else{
      
      
      
      
      }
    
    
      return ()=>{
    
        listen();
      }
    })



   




  },[])


  return (
    <div className='bg-signin w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed bg-opacity-50  flex items-center justify-center'>
      <div className="bg-black w-screen h-screen p-20 absolute  opacity-40"></div>
      

<LoginForm/>
    

{activeHint?(<div className='absolute bg-slate-950 rounded-md p-4 text-white right-2 bottom-2 animate-bounce hover:animate-none cursor-default bg-opacity-80'>
<IoIosClose className='absolute right-2 text-lg hover:text-xl' onClick={()=>{handleClose()}}/>
<h1 className='font-bold text-red-600 mt-4'>To skip use this email and password</h1>
<p>Email: dighodaro95@gmail.com</p>
<p>Password: Abc123456_</p>


</div>):""                }



    </div>
  )
}

export default SigninPage
