import React from 'react'
import SingleMovie from '../../components/SingleMovie';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const SearchSection = () => {

    const searchterm=useParams();
    const[Array,setArray]=useState([]);

    let url;


url='https://www.omdbapi.com/?s=' + searchterm.id + "&apikey=60879b0d";
let Arrayval;


    useEffect(
        ()=>
        {
        

            const fetchData = async () => {   
        
        
            try {
              const response = await fetch(url);
              Arrayval = await response.json();
              
              setArray([...Arrayval.Search]);
            
                 
            
             
              
             
            
            
            
            } catch (error) {
              console.error(error);
            }
            
            }
            fetchData();
            
        
        console.log(searchterm.id);
        
        
        },[url,searchterm]);
        
    

  return (
    <div className='flex-flex-col pt-20 px-10 '>
    <h1 className="text-white font-bold  p-10 w-full text-2xl" > Search</h1>
<div className='grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3   grid-cols-2    self-center gap-12 '>
    {Array && Array.map((e)=>{

        if(parseInt(e.Year)>2000)
        {
      
      
      return ( <SingleMovie  name={e.Title} year={e.Year} image={e.Poster} />)
    }
    
}
    
    
    

    )}
    </div>
    </div>
  )
}

export default SearchSection
