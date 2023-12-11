import React from 'react'
import SingleMovie from '../../components/SingleMovie';
import { useEffect,useState } from 'react';
const TrendingSection = () => {
    const[Array,setArray]=useState([]);
    let url;
let url1;
let url2;


url='https://www.omdbapi.com/?s=locked&y=2023&apikey=60879b0d';
url1='https://www.omdbapi.com/?s=Gangs&y=2023&apikey=60879b0d';
url2='https://www.omdbapi.com/?s=christmas&y=2023&apikey=60879b0d';
let Arrayval;
    let Arrayval2;
    let Arrayval3;

useEffect(
    ()=>
    {
    
        const fetchData = async () => {   
    
    
        try {
          const response = await fetch(url);
          Arrayval = await response.json();
          const response2 = await fetch(url1);
          Arrayval2 = await response2.json();
          const response3 = await fetch(url2);
          Arrayval3 = await response3.json();
          setArray([...Arrayval.Search,...Arrayval2.Search,...Arrayval3.Search]);
        
             
        
         
          
         
        
        
        
        } catch (error) {
          console.error(error);
        }
        
        }
        fetchData();
        
    
    
    
    
    },[]);
    
    
  return (
    <div className="w-11/12 justify-center mx-auto  md:pt-7 p-5 flex flex-col">
    <h1 className="text-white font-bold  p-10 w-full text-2xl" > Trending</h1>
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3   grid-cols-2    self-center gap-12 overflow-hidden   ">
      
    {Array && Array.map((e)=>{

      
      
      return ( <SingleMovie  name={e.Title} year={e.Year} image={e.Poster} />)
    
}
    
    
    

    )}
    


    </div>
    </div>



    
  )

}

export default TrendingSection
