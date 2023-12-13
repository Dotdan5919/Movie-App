import React, { useEffect, useRef } from 'react'
import NavBar from '../../components/NavBar'
import bgImage from '../../assets/images/dark-vip-cinema-studio-still-life.jpg'
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';



const Hero = () => {


  const form=useRef();

  
// Username:'dighodaro95@gmail.com',
// Password:'7FFCFC49128708E7942D115CA1425BBE82BD',
// Host:'smtp.elasticemail.com',
// Port:2525,
//3DC9F5A0C3E484F68D6A3B7D9E4B00D4D117966E02F6A466DCB2CB906F625D4A240E9AAD3548449E5DA5090DEFA798D3
// const send=()=>{
// const config={
 
//   SecureToken:'1da5516b-4651-4fca-9911-d5dffba04d6e',
//   To : 'dotdanighodaro@gmail.com',
//     From : "ichristboy@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body",


// }
// if(window.Email){

// window.Email.send(config).then(()=>alert("email sent")).catch(error=>console.log(error))

// }
// }
// const former={user_email:"dighodaro95@gmail.com",name:"daniel",message:"hi"};

const send=(e)=>{
  e.preventDefault();
emailjs.sendForm('service_tbmx7l6', 'template_pwgt1ob',form.current, 'vsgPr6d4Be4gEFu9X')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });

    }

    

  useEffect(()=>
  
  
  {
//  send();


  },[])
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
<input type="email" name="user_email" id="" className='w-[60%] h-[auto]  p-4 opacity-40 bg-black text-white border-white border-2  '  placeholder='Email Address'/>
<button className='bg-red-600 w-40 p-4 text-white hover:bg-red-500 flex items-center justify-center text-xl' name='submit'>Get Started <IoIosArrowForward />  </button>
<input type="text" className='hidden' name='from_name' value={
  "MoPlay"
} /><input type="text"  className='hidden' value={"Welcome to MoPlay"} name='message'/>
<input type="text" className='hidden' name='' value={"email"} />
<input type="text" className='hidden' name='from_email' value={"dan@ighodarodaniel.com.ng"} />


</div>


</form>
</div>



    </div>
  )
}

export default Hero
