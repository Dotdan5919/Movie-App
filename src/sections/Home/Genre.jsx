import React, { useEffect, useState } from 'react'
import GenreNav from '../../components/GenreNav'
import SingleMovie from '../../components/SingleMovie';

const Genre = () => {
    const[activeNav,setActiveNav]=useState("Action");
    const[Array,setArray]=useState([]);
    const[ArrayLimit,setArrayLimit]=useState(16);



let url;
let url1;
let url2;



switch(activeNav)
{
    case "Action":

    url='https://www.omdbapi.com/?s=fight&apikey=60879b0d';
    url1='https://www.omdbapi.com/?s=Dragon&apikey=60879b0d';
    url2='https://www.omdbapi.com/?s=Mission&apikey=60879b0d';

        break;
        case "Kids":

        url='https://www.omdbapi.com/?s=Kids&apikey=60879b0d';
        url1='https://www.omdbapi.com/?s=Doo&apikey=60879b0d';
        url2='https://www.omdbapi.com/?s=child&apikey=60879b0d';


            break;

            case "Superheroes":

            url='https://www.omdbapi.com/?s=Adam&apikey=60879b0d';
            url1='https://www.omdbapi.com/?s=Avengers&apikey=60879b0d';
            url2='https://www.omdbapi.com/?s=marvel&apikey=60879b0d';

            break;

            case "Lovestory":

            url='https://www.omdbapi.com/?s=love&apikey=60879b0d';
            url1='https://www.omdbapi.com/?s=princess&apikey=60879b0d';
            url2='https://www.omdbapi.com/?s=titanic&apikey=60879b0d';

            break;
            case "Latest":

            url='https://www.omdbapi.com/?s=hidden&y=2023&apikey=60879b0d';
        url1='https://www.omdbapi.com/?s=dance&y=2023&apikey=60879b0d';
        url2='https://www.omdbapi.com/?s=come&y=2023&apikey=60879b0d';

            break;

    default:
        url='https://www.omdbapi.com/?s=war&y=2023%apikey=60879b0d';
            url1='https://www.omdbapi.com/?s=action&y=2023%apikey=60879b0d';


}
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
    




},[activeNav]



    )


    
  return (
    <div className='p-7 flex flex-col gap-5 bg-black w-screen'>
      <h1 className='text-white w-full   text-center text-2xl font-bold '> Find your favourite genre</h1>
    <div className="flex sm:gap-3 justify-center">
      <GenreNav name="Action" click={(x)=>setActiveNav(x)} activeNav={activeNav}/>
      <GenreNav name="Kids" click={(x)=>setActiveNav(x)} activeNav={activeNav}/>
      <GenreNav name="Superheroes" click={(x)=>setActiveNav(x)} activeNav={activeNav}/>
      <GenreNav name="Lovestory" click={(x)=>setActiveNav(x)} activeNav={activeNav}/>
      <GenreNav name="Latest" click={(x)=>setActiveNav(x)} activeNav={activeNav}/>



      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3   grid-cols-2    self-center gap-12 overflow-hidden   ">
      
      {Array && Array.slice(0,ArrayLimit).map((e)=>{

        if(parseInt(e.Year)>2009)
        
        {return ( <SingleMovie  name={e.Title} year={e.Year} image={e.Poster} />)
      }
      
      
      

      })}
      


      </div>
      
      <button className='text-white sm:w-96  mx-auto w-40  border-2 border-red-600 hover:bg-red-600 transition-all duration-700 p-4 ' onClick={()=>{ArrayLimit<17?setArrayLimit(ArrayLimit+15):setArrayLimit(ArrayLimit-15)}}>{ArrayLimit<17?"See More":"See less"}</button>
      



    </div>
  )
}

export default Genre
