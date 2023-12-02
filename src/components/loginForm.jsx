import React from 'react'
import MotionInput from './MotionInput'
import { NavLink } from 'react-router-dom'

const LoginForm = () => {
  return (
   <form className=' bg-black lg:w-[30%] sm:w-[50%] w-[70%] bg-opacity-40   text-white p-12 grid gap-7 grid-rows-6 relative'>
   <h1 className='text-[30px] font-bold'>Sign in</h1>


 

<MotionInput type="Email" name="Email Address" color="black"/>
<MotionInput type="password" name="Password" color="black"/>


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
