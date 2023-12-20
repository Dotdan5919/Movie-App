import React, { useContext } from 'react'
import { WatchlistContext } from '../../Contexts/WatchListContext'
import ProfileValues from '../../components/ProfileValues';

const Profile = () => {

    const {userCred,setUserCred}=useContext(WatchlistContext);


    console.log(userCred);






    


  return (
    <div className='w-full h-full bg-slate-50 flex justify-center '>
      <div className="w-[70%] p-12 flex flex-col gap-4">
<h1 className='font-bold text-2xl '>Profile</h1>
<hr className='w-full border-1  bg-black border-black ' />


<ProfileValues value={userCred.displayName}  navigator={"Change Name"} />
<ProfileValues value={userCred.email}  navigator={"Change Email"} />

<ProfileValues value={userCred.password}  navigator={"Change Password"} />
<ProfileValues value={"Standard Plan"}  navigator={"Change Membership"} />
<ProfileValues value={userCred.phoneNumber}  navigator={"Change Phone number"} />
<ProfileValues value={userCred.photoUrl}  navigator={"Change Photo"} />








<hr className='w-full border-1  bg-black border-black ' />






</div>

    </div>
  )
}

export default Profile
