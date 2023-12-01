import React from 'react'
import MiniDropDown from '../components/MiniDropDown'
import { IoIosArrowForward } from 'react-icons/io'

const FrequentlyAsked = () => {

    const FreqQuesArray=[
        {title:"What is Moplay?",
        question:"Moplay is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        question2:"You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"}
        ,{title:"Where can i watch Moplay?",
        question:"Watch anywhere, anytime. Sign in with your npm install framer-motion account to watch instantly on the web at Moplay.com from your personal computer or on any internet-connected device that offers the Moplay app, including smart TVs, smartphones, tablets, streaming media players and game consoles. ",
    question2:"You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Moplay with you anywhere."},
        {title:"Is Moplay Good for kids?",
        question:"The Moplay Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
        
    ]


  return (
    <div className='w-full bg-black flex  flex-col gap-20 relative items-center justify-center sm:p-10 leading-tight p-10 text-white'>
    <h1 className='text-[50px] font-bold text-center'>Frequently Asked Questions</h1>

    <div className="flex flex-col w-full justify-center items-center gap-4">
    
{
    FreqQuesArray.map((val)=>
    {

        return(
    <MiniDropDown title={val.title} question={val.question} paragraph2={val.question2}/>
    )
    }
    
    
    )


}

</div>

<form className='flex flex-col gap-5 justify-center items-center  text-center'>
<p className='w-full'>Ready to watch? Enter your email to create or <br/> restart your membership.</p>
<div className='gap-2 flex w-[100%] h-auto'>

<input type="email" name="" id="" className='w-[60%] h-[auto]  p-4 opacity-40 bg-black text-white border-white border-2  '  placeholder='Email Address'/>
<button className='bg-red-600 w-40 p-4 text-white hover:bg-red-500 flex items-center justify-center text-xl'>Get Started <IoIosArrowForward />  </button>
</div>


</form>


    </div>
  )
}

export default FrequentlyAsked
