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







  

 



  
  </Route>
  </>
  )

)



function App() {
  const [WatchlistArray, setWatchlistArray] = useState([]);
  const [WatchlistTrigger, setWatchlistTrigger] = useState(false);
  const [inViewActive, setInViewActive] = useState(true);



  return (
    <div className='w-full h-screen bg-black   '>
    <WatchlistContext.Provider value={{WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger,inViewActive,setInViewActive}}>
    <RouterProvider router={router}/>
    </WatchlistContext.Provider>


  
    
    </div>
  );
}

export default App;
