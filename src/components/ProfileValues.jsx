import React from 'react'

const ProfileValues = (props) => {
  return (
    <div className="flex justify-between">

    <h1 className='text-gray-400'>{props.value}</h1>
    
    <p className='text-red-400 hover:text-red-600 cursor-pointer'>{props.navigator}</p>
    </div>
  )
}

export default ProfileValues
