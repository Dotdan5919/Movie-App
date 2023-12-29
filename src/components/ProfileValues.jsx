import React, { useContext, useRef, useState } from 'react'
import { WatchlistContext } from '../Contexts/WatchListContext';
import { updateProfile,updatePassword } from 'firebase/auth';
import { Firestore,updateDoc,query,where ,onSnapshot} from 'firebase/firestore';


const ProfileValues = (props) => {

  const {auth,colRef}=useContext(WatchlistContext);
const[inputActive,setInputActive]=useState(true);
const[text,setText]=useState("Change");
const[newPropsVal,setNewPropsVal]=useState(props.value);

const inputRef=useRef();
const user=auth.currentUser;




const handleSubmit=()=>{
  let update;  //this value is used to update the value of the selected collection element in firebase auth
switch(props.name)
{

  case "Name":
     update={
      displayName:inputRef.current.value

    }
    updateProfile(user,update)
.then(()=>{})
.catch((err)=>{  })

    break;



    case "Membership":
      update={
        phoneNumber:inputRef.current.value
  
      }
   

    break;
    case "Email":
      update={
        email:inputRef.current.value
  
      }

   

    break;
   
    
   

    


    default:


}


 







  


}



  return (
    <div className="flex justify-between">

   {inputActive?(<h1 className='text-gray-400'>{newPropsVal}</h1>):
   ( <input  value={newPropsVal} ref={inputRef} onChange={(e)=>setNewPropsVal(e.target.value)} type={props.name==="Password"?("password"):('text')} name={props.name}  className='p-3' />      )} 
    
    <p className='text-red-400 hover:text-red-600 cursor-pointer' onClick={()=>{setInputActive(!inputActive);text==="Change"?setText("Save"):setText("Change"); text==="Save" && handleSubmit()}} > {text} {props.name}</p>
    </div>
  )
}

export default ProfileValues
