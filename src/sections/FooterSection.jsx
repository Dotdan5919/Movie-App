import React from 'react'

const FooterSection = () => {
  return (
    <div className='grid gap-10 underline grid-cols-1  lg:grid-cols-4 sm:grid-cols-2 sm:justify-items-start justify-items-start lg:justify-items-start sm:place-items-center lg:place-items-start place-items-start text-gray-300 sm:p-20 p-10'>
    <div className="left">
    <p>Questions? Contact us</p>
    <p>FAQ</p>
    <p>Investor Relations</p>
    <p>Privacy</p>
    <p>Speed Test</p>
    <p>Engpsh</p>
    
    </div>



    <div className="flex flex-col">
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Cookie Prefrence</p>
        <p>Legal Notices</p>
    </div>

    <div className="flex flex-col">
        <p>Account</p>
        <p>Ways to Watch</p>

        <p> Corporate Information</p>
        <p>Only on Moplay</p>

   </div>

<div className="flex flex-col">
    <p>Media Center</p>
    <p>Terms of Use</p>
    <p>Contact us</p>
</div>


      
    </div>
  )
}

export default FooterSection
