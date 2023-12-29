import React from 'react'

const GenreNav = (props) => {

  // this code is for navigating to different genre in the home page
  //props.click changes the state of the Active Nav

    let BtnClass;  
        
    if(props.name===props.activeNav){

        BtnClass=" bg-red-600 text-white";
    }
    else{

        BtnClass=" bg-transparent text-white";

    }
    
  return (

    


    <div className={'p-3 shadow-sm hover:bg-red-700 hover:text-white rounded-2xl hover:shadow-lg  duration-700 transition-all text-xs cursor-pointer ' + BtnClass } onClick={()=>{props.click(props.name)}}>
      {props.name}
    </div>



  )
}

export default GenreNav
