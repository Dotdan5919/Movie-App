import React from 'react'
import MotionInput from './MotionInput'

const LoginForm = () => {
  return (
   <form className=' bg-black lg:w-[30%] sm:w-[50%] w-[70%] bg-opacity-40   text-white p-12 grid gap-7 grid-rows-6 relative'>
   <h1 className='text-[30px] font-bold'>Sign in</h1>


 

<MotionInput type="Email" name="Email Address"/>
<MotionInput type="password" name="Password"/>


<button className='grid f row-start-5  bg-red-600 hover:bg-red-800 rounded-md justify-center items-center'>Submit</button>
<div className="flex justify-between row-start-6">
<div>
<input type="checkbox" name="Remember me" id="" />
<label>Remember me</label>
</div> 

<div>
Need help?</div>
</div>

<p className='row-start-7'>New on Moplay? Signup  </p>




   </form>
  )
}

export default LoginForm
