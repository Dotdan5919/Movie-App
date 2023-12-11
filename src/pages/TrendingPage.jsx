import React from 'react'
import TrendingSection from '../sections/OtherPages/TrendingSection'
import NavBarLoggedIn from '../components/NavBarLoggedIn'
import Footer from '../sections/Home/Footer'

const TrendingPage = () => {
  return (
    <div>
    <NavBarLoggedIn/>
      <TrendingSection/>
      <Footer/>
    </div>
  )
}

export default TrendingPage
