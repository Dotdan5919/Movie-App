import React from 'react'

const Gridpractice = () => {
  return (
    <div className='grid grid-cols-3 gap-3 h-[400px] w-[400px] bg-red-500 '>
      
<div className="text-white bg-teal-500 cols row-span-3 col-start-1 row-start-1">1</div>
<div className="text-white bg-teal-400 col-start-2 row-start-1  ">2</div>
<div className="text-white bg-teal-500">3</div>
<div className="text-white bg-teal-700">4</div>
<div className="text-white bg-teal-500">5</div>
<div className="text-white bg-teal-500 col-start-1 row-start-3 bg-red-200">6</div>
<div className="text-white bg-teal-500">7</div>
<div className="text-white bg-teal-500">8</div>
<div className="text-white bg-teal-500">9</div>
<div className="text-white bg-teal-500">10</div>
<div className="text-white bg-teal-400">11</div>
<div className="text-white bg-teal-400">11</div>





    </div>
  )
}

export default Gridpractice
