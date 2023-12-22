import React, { useContext, useRef, useState } from 'react'
import { WatchlistContext } from '../Contexts/WatchListContext';
import { updateProfile,updatePhoneNumber,updatePassword } from 'firebase/auth';


const ProfileValues = (props) => {

  const {auth}=useContext(WatchlistContext);
const[inputActive,setInputActive]=useState(true);
const[text,setText]=useState("Change");
const[newPropsVal,setNewPropsVal]=useState(props.value);

const inputRef=useRef();
const user=auth.currentUser;




const handleSubmit=()=>{
  let update;
switch(props.name)
{

  case "Name":
     update={
      displayName:inputRef.current.value

    }
    updateProfile(user,update)
.then(()=>{console.log("updated")})
.catch((err)=>{console.log(err.message)})
    break;

    case "Phone number":
      update={
        phoneNumber:inputRef.current.value
  
      }
   

    break;
    case "Email":
      update={
        email:inputRef.current.value
  
      }
   

    break;
    case "Photo":
      update={
        photoURL:inputRef.current.value
  
      }
   

    break;
    case "Password":
      update={
        photoURL:inputRef.current.value
  
      }
   updatePassword(user,inputRef.current.value)
   .then(()=>{console.log("password updated")})
   .catch((err)=>{console.log(err.message)})

    break;


    default:


}


 







  


}



  return (
    <div className="flex justify-between">

   {inputActive?(<h1 className='text-gray-400'>{newPropsVal}</h1>):( <input  value={newPropsVal} ref={inputRef} onChange={(e)=>setNewPropsVal(e.target.value)} type={props.name==="Password"?("password"):('text')} name={props.name}  className='p-3' />      )} 
    
    <p className='text-red-400 hover:text-red-600 cursor-pointer' onClick={()=>{setInputActive(!inputActive);text==="Change"?setText("Save"):setText("Change"); text==="Save" && handleSubmit()}} > {text} {props.name}</p>
    </div>
  )
}

export default ProfileValues
