import React, { useContext } from 'react'
import { WatchlistContext } from '../../Contexts/WatchListContext'
import ProfileValues from '../../components/ProfileValues';

const Profile = () => {

    const {userCred,setUserCred,setMembership,membership,setProfileImg,profileImg}=useContext(WatchlistContext);


    console.log(userCred);






    


  return (
    <div className='w-full h-full bg-slate-50 flex justify-center '>
      <div className="w-[70%] p-12 flex flex-col gap-4">
<h1 className='font-bold text-2xl '>Profile</h1>
<hr className='w-full border-1  bg-black border-black ' />


<ProfileValues value={ userCred.displayName }  name={"Name"} />
<ProfileValues value={ userCred.email}  name={"Email"} />

{/*membership*/}


<ProfileValues value={membership}  name={"Membership"} />  









<hr className='w-full border-1  bg-black border-black ' />






</div>

    </div>
  )
}

export default Profile
