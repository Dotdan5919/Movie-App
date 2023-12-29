import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import HomeLayout from './layout/HomeLayout';

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import { WatchlistContext } from './Contexts/WatchListContext';
import { useEffect,useState } from 'react';
import UpcomingPage from './pages/UpcomingPage';
import TrendingPage from './pages/TrendingPage';
import ExclusivePage from './pages/ExclusivePage';
import SearchPage from './pages/SearchPage';
import NoPage from './pages/NoPage';
import NoPage2 from './pages/NoPage2';
import ProfilePage from './pages/ProfilePage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signOut,deleteUser,signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth'

import {getFirestore,collection,addDoc,getDocs,query,where,onSnapshot} from 'firebase/firestore'




const router=createBrowserRouter(
  


  createRoutesFromElements(
    <>
    <Route path='/' element={ <AuthLayout/> }>
    
  <Route path='/' index element={<WelcomePage/>}/>
  <Route path='/signin'  element={<SigninPage/>}/>
  <Route path='/signup'  element={<SignupPage/>}/>
  <Route path='/signup/:id'  element={<SignupPage/>}/>

  <Route path='*'  element={ <NoPage2/>}/>

    </Route>
   

  <Route path='/home' element={<HomeLayout/>}>


  
  <Route path='/home/homepage'  element={ <HomePage/>  }/>
  <Route path='/home/watchlist'  element={ <WatchlistPage/>  }/>
  <Route path='/home/upcoming'  element={ <UpcomingPage/>  }/>
  <Route path='/home/trending'  element={ <TrendingPage/> }/>
  <Route path='/home/exclusive'  element={ <ExclusivePage/>}/>
  <Route path='/home/search/:id'  element={ <SearchPage/> }/>
  <Route path='*'  element={ <NoPage/>}/>
  <Route path='/home'  element={ <NoPage/>}/>
  <Route path='/home/profile'  element={ <ProfilePage/>}/>







  

 



  
  </Route>
  </>
  )

)



function App() {


  
// firebase connection
const firebaseConfig = {
  apiKey: "AIzaSyB0BZUtbN-CIb7yV71UoC4iMwifSkqoDnY",
  authDomain: "movie-app-16fcb.firebaseapp.com",
  projectId: "movie-app-16fcb",
  storageBucket: "movie-app-16fcb.appspot.com",
  messagingSenderId: "1046262940262",
  appId: "1:1046262940262:web:81bb6114b747a7e8e4a3a7",
  measurementId: "G-B7RQLELCC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

const db=getFirestore(app);
const colRef=collection(db,'Moplay')
































const [isLoading,setIsLoading]=useState()



const [searchActive,setSearchActive]=useState(false);

  const [WatchlistArray, setWatchlistArray] = useState([]);
  const [WatchlistTrigger, setWatchlistTrigger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userCred, setUserCred] = useState();
  const[profileImg,setProfileImg]=useState();
  const[membership,setMembership]=useState();
 





  const [inViewActive, setInViewActive] = useState(true);



  useEffect(()=>
  {
    
const listen=onAuthStateChanged(auth,(user)=>{


if(user)
{


 setIsLoggedIn(true);
 setUserCred(user);

  

 console.log("i logged in navbarLoggedIn");

const q=query(colRef,where("email","==",user.email))

onSnapshot(q,(snapshot)=>{

  let userInfo=[];
  snapshot.docs.forEach((doc)=>{

    userInfo.push({...doc.data(),id:doc.id})

   

  })

  setProfileImg(userInfo[0].Picture);
  setMembership(userInfo[0].Plan);





})










}
else{


  setIsLoggedIn(false);


}


return ()=>{

  listen();
}


})








  })


  return (
    <div className='w-full h-screen bg-black   '>
    <WatchlistContext.Provider value={{WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger,inViewActive,setInViewActive,isLoggedIn,setIsLoggedIn,userCred,setUserCred,auth,colRef,membership,setMembership,profileImg,setProfileImg,searchActive,setSearchActive}}>
    <RouterProvider router={router}/>
    </WatchlistContext.Provider>


  
    
    </div>
  );
}

export default App;
