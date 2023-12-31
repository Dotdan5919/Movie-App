import React, { useContext, useEffect, useRef, useState } from 'react'
import Moplay from '../assets/logos/moplay logo.png'
import NavBar from '../components/NavBar'
import MotionInput from '../components/MotionInput'
import { IoIosCheckmarkCircle,  IoIosPhonePortrait, IoIosTabletPortrait, IoIosTv, IoIosVideocam, IoMdSave } from 'react-icons/io'
import { motion , AnimatePresence } from 'framer-motion'
import Basic from '../assets/images/Basic.jpg'
import Standard from '../assets/images/Standard.jpg'

import Premium from '../assets/images/Premium.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { WatchlistContext } from '../Contexts/WatchListContext'
import { useParams } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signOut,deleteUser,signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';



const SignupPage = () => {

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
const analytics = getAnalytics(app);
const auth=getAuth(app);
const user=auth.currentUser;
const [isLoading,setIsLoading]=useState()
const {isLoggedIn,setIsLoggedIn}=useContext(WatchlistContext);
const navigate=useNavigate();

// deleteUser(user).then(()=>
// {
// console.log("user Created");


// }).catch((err)=>{});













// all states and plans

const[step,setStep]=useState(1);
const[plan,setPlan]=useState("standard");
const firstForm=useRef();
const errorLabel=useRef();

// passwords
const [passwordOne,setPasswordOne]=useState();
const [passwordTwo,setPasswordTwo]=useState();

// 
const [planType,setPlanType]=useState();



const {colRef,userCred}=useContext(WatchlistContext);

 
const submitPlan=(Plan)=>{

addDoc(colRef,{ Picture:"/images/Avatar.jpg",UID:userCred.uid,Plan:Plan,email:userCred.email   })
.then()
.catch((err)=>{console.log(err.message)});







}



const handleSubmit =(e)=>
{

  function validatePassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_@#$%^&*])[a-zA-Z0-9-_\@#$%^&*]{8,}$/;
    return pattern.test(password);
  }

e.preventDefault();

 const email=firstForm.current.email.value;
 const  password=passwordOne;







  if(validatePassword(passwordOne)){


    if(passwordOne===passwordTwo){

  console.log(firstForm.current.email.value)
  errorLabel.current.textContent="Ok"
  errorLabel.current.className="bg-green-400 text-white p-2"


createUserWithEmailAndPassword(auth,email,password)

.then((cred)=>


{

 
 console.log('user created',cred.user)


navigate("/signup/" + cred.user.email)

setStep(2)

}).catch((err)=>{

  
  if(err.message==="Firebase: Error (auth/email-already-in-use).")
  {
alert("account already registered");

  }
  else{

   
  }


})



}

else{


  errorLabel.current.textContent="Inconsistent password"
  errorLabel.current.className="bg-red-400 text-white p-2"




}

}
else{

  errorLabel.current.textContent="Your password must have at least one lowercase,one uppercase,at least a number, at least a special character"
  errorLabel.current.className="bg-red-400 text-white p-2"



}

}

const id=useParams();
let stepContent;
const variantAnim={

initial:{

  x:-100,
  opacity:0,

},

final:{

x:0,
opacity:100
}

}



switch(step)
{
case 1:

stepContent=(
 
  <motion.div  variants={variantAnim} initial="initial"  exit={{x:-100,opacity:0}} animate="final" className='grid gap-7 md:w-[60%] w-[95%]'>  
<p>Step 1 of 3</p>
<h1 className='text-[35px] font-bold'>Welcome <br/>
Joining Moplay is easy. 
</h1>

<p>Enter your password and you'll be watching in no time</p>


<div className="flex flex-col ">

<h></h>
</div>
<form className='grid gap-7' ref={firstForm} onSubmit={handleSubmit}>
<MotionInput name="Email" type="email" color="white" val={id.id} />

<MotionInput name="Password" type="password" color="white"    pwdListner={(pwd)=>{setPasswordOne(pwd)}}/>
<MotionInput name="Re-Enter Password" type="password" color="white"    pwdListner={(pwd)=>{setPasswordTwo(pwd)}}/>

<h1 ref={errorLabel}></h1>

<button className='w-full bg-red-700 p-5 text-white text-xl  hover:bg-red-600' type='submit' onClick={()=>{/**/}}>Next</button>

</form>


</motion.div> );
break;

   case 2:

    stepContent=(  
        
      <motion.div variants={variantAnim} initial="initial" exit={{x:-100,opacity:0}} animate="final" className='grid gap-7 md:w-[60%] w-[95%]'>  
    <p>Step 2 of 3</p>
  <h1 className='text-[35px] font-bold'>
  Choose your plan.
  </h1>
  
  
  <div className="marks flex flex-col gap-5 items-start">
  
  <div className="flex justify-center items-center gap-3">
    <div> <IoIosCheckmarkCircle className='text-[50px] text-red-700'/>  </div>
    <h1 className='text-[18px]'>No Commitments, cancel anytime.</h1>
  </div>
  
  <div className="flex justify-center items-center gap-3">
  <div> <IoIosCheckmarkCircle className='text-[50px] text-red-700'/>  </div>
  <h1 className='text-[18px]'>Everything on Moplay for one low price.</h1>
  </div>
  
  <div className="flex justify-center items-center gap-3">
  <div> <IoIosCheckmarkCircle className='text-[50px] text-red-700'/>  </div>
  <h1 className='text-[18px]'>No ads and no extra fees. Ever.</h1>
  </div>
  
  </div>
  

<div className="grid md:grid-cols-3 gap-5 justify-start items-start w-full ">

<div className={"flex   cursor-pointer flex-col gap-2 rounded-md  bg-white shadow-md p-10 items-start h-full " + " " + (plan==="basic"?"text-red-500":"text-black") } onClick={()=>{setPlan("basic")}}>

<h1 className=' text-[20px]'>Basic Plan</h1>

<p className='text-[45px] font-bold'>$3 </p>
<hr />
<p className='flex  gap-2 justify-center items-center'> <IoMdSave/> 480p </p>

<p className='flex justify-center items-center gap-2'> <IoIosVideocam/> Good Video quality</p>
<p className='flex justify-center items-center gap-2'> <IoIosPhonePortrait/> Mobile Device </p>
{plan==="basic" &&  (<div className="bg-red-300 w-full p-1 mt-5"> </div>)}

</div>

<div className={"flex    cursor-pointer  flex-col gap-2 rounded-md  bg-white shadow-md p-10 items-start h-full " + " " + (plan==="standard"?"text-red-500":"text-black") } onClick={()=>{setPlan("standard")}}>

<h1 className=' text-[20px]'>Standard Plan</h1>

<p className='text-[45px] font-bold'>$7 </p>
<hr />

<p className='flex gap-2 justify-center items-center'> <IoMdSave/> 720p </p>


<p className='flex justify-center items-center gap-2'> <IoIosVideocam/> Better Video quality</p>
<p className='flex justify-center items-center gap-2'> <IoIosPhonePortrait/> Mobile Devices + 1 Tablet </p>
<p className='flex justify-center items-center gap-2'>  <IoIosTabletPortrait/> Laptop </p>
<p className='flex justify-center items-center gap-2'> <IoIosTv/> Tv </p>

{plan==="standard" &&  (<div className="bg-red-300 w-full p-1 "> </div>)}

</div>
<div className={"flex cursor-pointer  flex-col gap-2 rounded-md  bg-white shadow-md p-10 items-start h-full " + " " + (plan==="premium"?"text-red-500":"text-black") } onClick={()=>{setPlan("premium")}}>

<h1 className=' text-[20px]  '>Premium Plan</h1>

<p className='text-[45px] font-bold'>$15 </p>
<hr />

<p className='flex gap-2 justify-center items-center'> <IoMdSave/> 1080p + 4k </p>


<p className='flex justify-center items-center gap-2'> <IoIosVideocam/> Best Video quality</p>
<p className='flex justify-center items-center gap-2'> <IoIosPhonePortrait/> 2 Mobile Devices + 1 Tablet </p>
<p className='flex justify-center items-center gap-2'>  <IoIosTabletPortrait/> Laptop </p>
<p className='flex justify-center items-center gap-2'> <IoIosTv/> 2 Tv </p>


{plan==="premium" &&  (<div className="bg-red-300 w-full p-1 "> </div>)}

</div>






</div>
















  
  <button className='w-full bg-red-700 p-5 text-white text-xl rounded-md  hover:bg-red-600' onClick={()=>{setStep(3)}}>Next</button>
  
  
  </motion.div>
  

  
  
  
     );

     break;

  case 3:

  stepContent=(  
        <AnimatePresence>
    <motion.div variants={variantAnim} initial="initial" exit={{x:-100,opacity:0,delay:.5}} animate="final" className='grid gap-7 md:w-[60%] w-[92%]'>  
  

    <p>Step 3 of 3</p>
    <h1 className='text-[35px] font-bold'>
    Set up your credit or debit card
    </h1>
    
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
    <MotionInput name="Card Number" color="white"  extraclass="col-span-2" type="number"  maxLength="12" / >
    <MotionInput name="Expiration date" color="white"  type="number" maxLength="6" / >
    <MotionInput name="CVV" color="white" type="number" maxLength="4" / >
    <MotionInput name="Name on card" color="white" extraclass="col-span-2" type="text"  / >
    </div>


<div className="flex justify-between">
<div className=''>
<h1 className="font-bold capitalize ">{plan}  plan</h1>


</div>

<a href="#" onClick={()=>{setStep(2)}} className='p-5 hover:text-red-700 '> Change</a>
</div>

<p>Your payments will be processed internationally. Additional bank fees may apply.</p>

<p>By Checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Moplay willautomatically continue your 
memebership and charge the membership fee(currently {}) to your payment method until you cance. You may cancel at any time to avoid future changes </p>

<div className="flex gap-3">
<input type="checkbox" />
<p>I agree.</p>
</div>




    
    

















<button className='w-full bg-red-700 p-5 text-white text-xl rounded-md  hover:bg-red-600' onClick={()=>{submitPlan(plan)}}><NavLink to="/home/homepage">
Start membership</NavLink></button>


</motion.div>
</AnimatePresence>





   );

  break;
  



default:




}

useEffect(()=>




{

  

 
const listen=onAuthStateChanged(auth,(user)=>{


  if(user)
  {

  
  
    setStep(2);
  }
  else{
  
  
  
  
  }


  return ()=>{

    listen();
  }
})






},[])


  return (
    <div className='w-screen h-screen bg-white p-7'>
    <NavBar logo="black"/>
    <hr/>
    
    <div className="flex flex-col justify-center items-center p-10">
     
{stepContent}


    </div>
      


    </div>
  )
}

export default SignupPage
