import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../../components/NavBar'
import bgImage from '../../assets/images/dark-vip-cinema-studio-still-life.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';



const Hero = () => {


  const form=useRef();
  const emailRef=useRef();
const [verifyEmail,setVerifyEmail]=useState();
const [sendState,setSendState]=useState(false);
const [formInput,setFormInput]=useState();

const navigate=useNavigate();



  



const sendMail=()=>{


emailjs.sendForm('service_tbmx7l6', 'template_pwgt1ob',form.current, 'vsgPr6d4Be4gEFu9X')
    .then(
      
      
      
      (result) => {
        
       
        setSendState(false);
      

navigate("/signup/"+ emailRef.current.value);

        emailRef.current.value="";

    }, (error) => {
        
    })

  }
    



const verifyMe=async()=>
{

  const val=verifyEmail;

  const url = 'https://mailcheck.p.rapidapi.com/?domain='+val;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1fa1b2d733mshe73757629ab09f1p1a9202jsnd27da5229596',
      'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();

   
   const resultValue=await result.block;

if(resultValue===true)
{


  setSendState(false);
  
  
  

  alert("incorrect mail");
  emailRef.current.value="";
  
}

else{
  setSendState(true);
  





}
    
    
    
   
  } catch (error) {
    console.error(error);
    
  }


}

const handleValue=()=>
{


//  fetch();
  


}

const send=(e)=>{
  e.preventDefault();


  
  

  verifyMe();
  


    }

    

  useEffect(()=>
  
  
  {
  
    
  // console.log(form.current.user_email.value)

sendState &&  sendMail(formInput);
    
//  send();
// fetch();

  })
  // Call the function
  
  






  return (
    <div className='w-full sm:h-screen  h-fit flex flex-col sm:p-10 p-2' >
      
<NavBar logo="white"/>
<img src={bgImage} alt=""  className='w-full h-full top-0 left-0 absolute z-[0] opacity-40'/>
<div className="flex flex-col items-center justify-center h-full p-10 mt-[80px] z-[2] relative text-center gap-5 ">
<motion.h1 className='text-white font-bold sm:text-[70px] text-[60px] leading-tight ' initial={{opacity:0,x:100}} animate={{opacity:1,x:0,delay:3,type:'spring'}}>Unlimited, movies and TV shows</motion.h1>
<p className='text-white sm:text-[40px] text-[25px] leading-tight '>Bring thearters to you home</p>
<p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
<form  ref={form} onSubmit={send}>
<div className='gap-2 flex w-[100%] h-auto'>
<input type="email" name="user_email" id="" ref={emailRef} className='w-[60%] h-[auto]  p-4 opacity-40 bg-black text-white border-white border-2  '  placeholder='Email Address' onChange={(e)=>{handleValue();setVerifyEmail(e.target.value);}}/>
<button className='bg-red-600 w-40 p-4 text-white hover:bg-red-500 flex items-center justify-center text-xl' name='submit'  onClick={()=>{}}>Get Started <IoIosArrowForward />  </button>
<input type="text" className='hidden' name='from_name' value={
  "MoPlay" 
} /><input type="text"  className='hidden' value={"Welcome to MoPlay"} name='message'/>
<input type="text" className='hidden' name='email' value={"email"} />
<input type="text" className='hidden' name='from_email' value={"dan@ighodarodaniel.com.ng"} />


</div>


</form>
</div>



    </div>
  )
}

export default Hero
