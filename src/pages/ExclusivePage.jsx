import React from 'react'
import ExclusiveSection from '../sections/OtherPages/ExclusiveSection'
import NavBarLoggedIn from '../components/NavBarLoggedIn'
import Footer from '../sections/Home/Footer'

const ExclusivePage = () => {
  return (
    <div>
    <NavBarLoggedIn/>
      <ExclusiveSection/>

      <Footer/>
    </div>  
  )
}

export default ExclusivePage
