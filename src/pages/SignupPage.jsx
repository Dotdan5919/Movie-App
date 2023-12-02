import React, { useEffect, useState } from 'react'
import Moplay from '../assets/logos/moplay logo.png'
import NavBar from '../components/NavBar'
import MotionInput from '../components/MotionInput'
import { IoIosCheckmarkCircle, IoIosMusicalNote, IoIosPhoneLandscape, IoIosPhonePortrait, IoIosTabletLandscape, IoIosTabletPortrait, IoIosTv, IoIosVideocam, IoMdSave } from 'react-icons/io'
import { motion , AnimatePresence } from 'framer-motion'
import Basic from '../assets/images/Basic.jpg'
import Standard from '../assets/images/Standard.jpg'

import Premium from '../assets/images/Premium.jpg'


const SignupPage = () => {

const[step,setStep]=useState(1);
const[plan,setPlan]=useState("standard");
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
 
  <motion.div  variants={variantAnim} initial="initial"  exit={{x:-100,opacity:0}} animate="final" className='grid gap-7'>  
<p>Step 1 of 3</p>
<h1 className='text-[35px] font-bold'>Welcome <br/>
Joining Moplay is easy.
</h1>

<p>Enter your password and you'll be watching in no time</p>


<div className="flex flex-col ">
<p>Email</p>
<h></h>
</div>
<MotionInput name="Email" type="password" color="white" />

<MotionInput name="Password" type="password" color="white" />

<button className='w-full bg-red-700 p-5 text-white text-xl  hover:bg-red-600' onClick={()=>{setStep(2)}}>Next</button>



</motion.div> );
break;
case 2:
  stepContent=(  
    <AnimatePresence>   
    <motion.div variants={variantAnim} initial="initial" exit={{x:-100,opacity:0}} animate="final" className='grid gap-7'>  
  <p>Step 2 of 3</p>
<h1 className='text-[35px] font-bold'>
Choose your plan.
</h1>


<div className="marks flex flex-col gap-5 items-start">

<div className="flex justify-center items-center gap-3">
  <div> <IoIosCheckmarkCircle className='text-[50px] text-red-700'/>  </div>
  <h1 className='text-[18px]'>No Commitments, cancen anytime.</h1>
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


<button className='w-full bg-red-700 p-5 text-white text-xl rounded-md  hover:bg-red-600' onClick={()=>{setStep(3)}}>Next</button>


</motion.div>

</AnimatePresence>



   );
   break;

   case 3:

    stepContent=(  
        
      <motion.div variants={variantAnim} initial="initial" exit={{x:-100,opacity:0}} animate="final" className='grid gap-7 w-[60%]'>  
    <p>Step 3 of 3</p>
  <h1 className='text-[35px] font-bold'>
  Choose your plan.
  </h1>
  
  
  <div className="marks flex flex-col gap-5 items-start">
  
  <div className="flex justify-center items-center gap-3">
    <div> <IoIosCheckmarkCircle className='text-[50px] text-red-700'/>  </div>
    <h1 className='text-[18px]'>No Commitments, cancen anytime.</h1>
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
  

<div className="flex gap-10 justify-start items-start w-full">

<div className={"flex flex-col gap-2 rounded-md  bg-white shadow-md p-10 items-start h-[370px] " + " " + (plan==="basic"?"text-red-500":"text-black") } onClick={()=>{setPlan("basic")}}>

<h1 className=' text-[20px]'>Basic Plan</h1>

<p className='text-[45px] font-bold'>$3 </p>
<hr />
<p className='flex gap-2 justify-center items-center'> <IoMdSave/> 480p </p>

<p className='flex justify-center items-center gap-2'> <IoIosVideocam/> Good Video quality</p>
<p className='flex justify-center items-center gap-2'> <IoIosPhonePortrait/> Mobile Device </p>
{plan==="basic" &&  (<div className="bg-red-300 w-full p-1 mt-5"> </div>)}

</div>

<div className={"flex flex-col gap-2 rounded-md  bg-white shadow-md p-10 items-start h-[370px] " + " " + (plan==="standard"?"text-red-500":"text-black") } onClick={()=>{setPlan("standard")}}>

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
<div className={"flex flex-col gap-2 rounded-md  bg-white shadow-md p-10 items-start h-[370px] " + " " + (plan==="premium"?"text-red-500":"text-black") } onClick={()=>{setPlan("premium")}}>

<h1 className=' text-[20px]'>Premium Plan</h1>

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
















  
  <button className='w-full bg-red-700 p-5 text-white text-xl rounded-md  hover:bg-red-600' onClick={()=>{setStep(4)}}>Next</button>
  
  
  </motion.div>
  

  
  
  
     );

     break;

  case 4:

  stepContent=(  
        <AnimatePresence>
    <motion.div variants={variantAnim} initial="initial" exit={{x:-100,opacity:0,delay:.5}} animate="final" className='grid gap-7 w-[40%]'>  
  

    <p>Step 3 of 3</p>
    <h1 className='text-[35px] font-bold'>
    Set up your credit or debit card
    </h1>
    
    <div className="grid grid-cols-2 grid-rows-3 gap-4">
    <MotionInput name="Card Number" color="white"  extraclass="col-span-2" / >
    <MotionInput name="Expiration date" color="white" / >
    <MotionInput name="CVV" color="white" / >
    <MotionInput name="Name on card" color="white" extraclass="col-span-2" / >
    </div>


<div className="flex justify-between">
<div className='flex'>adfaf
<h1 className="font-bold">adfa</h1>
<p>Basic</p>

</div>

<a href="#"> Change</a>
</div>

<p>Your payments will be processed internationally. Additional bank fees may apply.</p>

<p>By Checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. Moplay willautomatically continue your 
memebership and charge the membership fee(currently {}) to your payment method until you cance. You may cancel at any time to avoid future changes </p>

<div className="flex gap-3">
<input type="checkbox" />
<p>I agree.</p>
</div>




    
    

















<button className='w-full bg-red-700 p-5 text-white text-xl rounded-md  hover:bg-red-600' onClick={()=>{setStep(4)}}>Start membership</button>


</motion.div>
</AnimatePresence>





   );

  break;
  



default:




}

useEffect(()=>




{

console.log(step);


})


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