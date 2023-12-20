import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signOut,deleteUser,signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';



const SigninPage = () => {

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
    





    </div>
  )
}

export default SigninPage
