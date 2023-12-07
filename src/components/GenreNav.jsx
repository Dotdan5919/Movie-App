import React from 'react'

const GenreNav = (props) => {

    let BtnClass;
        
    if(props.name===props.activeNav){

        BtnClass=" bg-red-600 text-white";
    }
    else{

        BtnClass=" bg-transparent text-white";

    }
    
  return (

    


    <div className={'p-3 shadow-sm hover:bg-red-700 hover:text-white rounded-2xl hover:shadow-lg  duration-700 transition-all text-xs ' + BtnClass } onClick={()=>{props.click(props.name)}}>
      {props.name}
    </div>



  )
}

export default GenreNav
