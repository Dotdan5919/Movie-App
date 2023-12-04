import React from 'react'
import NavBarLoggedIn from '../components/NavBarLoggedIn'
import HomeHero from '../sections/Home/HomeHero'
import { useEffect } from 'react'
const HomePage = () => {

  useEffect(() => {
    // const fetchData = async () => {
    //   // const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
    //   const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/keyword/avenger';

    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '2e41da2e9emsh5052f0589b6ce86p13a5c8jsn2018eab824dd',
    //       'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    //     },
    //   };

    //   try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

   

   
  }, []); // Empty dependency array ensures useEffect runs once when the component mounts





  return (
    <div className='w-screen overflow-x-hidden'>
      

<HomeHero/>

    
    </div>
  )
}

export default HomePage
