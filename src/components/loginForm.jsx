import React from 'react'
import MotionInput from './MotionInput'
import { NavLink } from 'react-router-dom'
import { FirebaseApp,initializeApp } from 'firebase/app'
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth'


const LoginForm = () => {


  
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

let errorListner;
const handleSubmit=(e)=>
{
  e.preventDefault();

  let UserEmail=e.target.email.value;
  let UserPassword=e.target.password.value;


signInWithEmailAndPassword(auth,UserEmail,UserPassword).then(
(cred)=>{


  console.log(cred.user);
}





).catch(
(err)=>
{

  errorListner=(<h1>Incorrect Details</h1>);
console.log(err.message);

}


)



}



  return (
   <form className=' bg-black lg:w-[30%] sm:w-[50%] w-[70%] bg-opacity-40   text-white p-12 grid gap-7 grid-rows-6 relative' onSubmit={(e)=>{handleSubmit(e)}}>
   <h1 className='text-[30px] font-bold'>Sign in</h1>


 

<MotionInput type="email" name="Email Address" color="black"/>
<MotionInput type="password" name="Password" color="black"/>
<p className='text-red-500 hover:text-red-300'>
{errorListner===""?"":"Incorrect Details"}
</p>


<button className='grid f row-start-5  bg-red-600 hover:bg-red-800 rounded-md justify-center items-center'>Submit</button>
<div className="flex justify-between items-center row-start-6">
<div className='flex gap-2 justify-center items-center'>
<input type="checkbox" name="Remember me" id="" />
<label name="Remember me">Remember me</label>
</div> 

<div>
Need help?</div>
</div>

<p className='row-start-7'>New on Moplay? <NavLink to="/signup">Signup</NavLink>   </p>




   </form>
  )
}

export default LoginForm
