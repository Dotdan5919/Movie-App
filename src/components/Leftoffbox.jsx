import React from 'react'

const Leftoffbox = (props) => {
  return (
    <div className='w-80 h-60 relative overflow-hidden'>
    <div className="w-full bottom-0 absolute bg-black bg-opacity-70 h-20 p-5">
    <h1 className="text-white">John Wick</h1>
    <p className="text-white font-thin text-sm">70%</p>

    </div>
      <img src="https://images.unsplash.com/photo-1701688115772-1b523294080f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8" alt="" srcset="" className=' object-cover w-full h-full ' />
    
          </div>
  )
}

export default Leftoffbox
