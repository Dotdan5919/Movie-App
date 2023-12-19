import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

const MotionInput = (props) => {

const[activeInput,setActiveInput]=useState(false);
const ref=useRef(null);
const [value,setValue]=useState(props.val);
let InputClass;
let InputContent;
if(props.color==="white"){
 InputClass="h-[50px] w-full bg-white outline-none p-8 border-2  border-red-400"
}
else if(props.color==="black")
{

   InputClass="h-[50px] w-full bg-gray-600 outline-none p-8"


}
else{

   InputClass="h-[50px] w-full  outline-none p-8"


}

switch (props.type)
{
 case "email":
InputContent=(<input name={props.type} type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}  value={value} onChange={()=>{setValue()}} maxLength={props.type==="password"?10:50} required/>);

 break;

 case "password":
InputContent=(  <input name={props.type} type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}   onChange={(e)=>{setValue(e.target.value);props.pwdListner(e.target.value)}} maxLength={props.type==="password"?10:50}
required minLength={8}
/>
);
 break;

 case "number":
  InputContent=(  <input name={props.type} type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}   onChange={(e)=>{setValue(e.target.value);props.pwdListner(e.target.value)}} maxLength={props.type==="password"?10:50}
  required minLength={8}
  />);
 break;

 case "text":
  InputContent=(<input name={props.type} type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}   onChange={(e)=>{setValue(e.target.value);props.pwdListner(e.target.value)}} maxLength={props.type==="password"?10:50}
  required minLength={8}
  />);

 default:



}


useEffect(()=>{

  
ref.current.value===""?setActiveInput(false):setActiveInput(true);
  



},[])


  return (
    <div className={'w-full flex flex-col gap-3 relative'+ " " +props.extraclass}>
      

   <motion.h1 initial={{x:0,y:0}} animate={activeInput?{x:1,y:-20,scale:.7,transitionDelay:2}:"d"} className='absolute p-5 cursor-pointer opacity-40 '>{props.name} </motion.h1> 
    { 
    //   props.type==="email"?
    //   <input name={props.type} type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}  value={value} onChange={()=>{setValue()}} maxLength={props.type==="password"?10:50}
    // required
    // />:
    // <input name={props.type} type={props.type} className={InputClass} ref={ref} onFocus={()=>{setActiveInput(true)}} onBlur={()=>{ref.current.value===""?setActiveInput(false):setActiveInput(true)}}   onChange={(e)=>{setValue(e.target.value);props.pwdListner(e.target.value)}} maxLength={props.type==="password"?10:50}
    // required minLength={8}
    // />
  
    InputContent}
<p className='absolute top-[65px] left-[2px]'>{props.error}</p>

    </div>
  )
}

export default MotionInput
