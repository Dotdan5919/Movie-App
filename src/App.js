import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import { WatchlistContext } from './Contexts/WatchListContext';
import { useEffect,useState } from 'react';
import UpcomingPage from './pages/UpcomingPage';
import TrendingPage from './pages/TrendingPage';
import ExclusivePage from './pages/ExclusivePage';



const router=createBrowserRouter(
  


  createRoutesFromElements(
   

  <Route path='/' element={<RootLayout/>}>


  <Route path='/' index element={<WelcomePage/>}/>
  <Route path='/signin'  element={<SigninPage/>}/>
  <Route path='/signup'  element={<SignupPage/>}/>
  
  <Route path='/homepage'  element={ <HomePage/>  }/>
  <Route path='/watchlist'  element={ <WatchlistPage/>  }/>
  <Route path='/upcoming'  element={ <UpcomingPage/>  }/>
  <Route path='/trending'  element={ <TrendingPage/> }/>
  <Route path='/exclusive'  element={ <ExclusivePage/>}/>




  

 



  
  </Route>
  )

)



function App() {
  const [WatchlistArray, setWatchlistArray] = useState([]);
  const [WatchlistTrigger, setWatchlistTrigger] = useState(false);


  return (
    <div className='w-full h-full bg-black   '>
    <WatchlistContext.Provider value={{WatchlistArray,setWatchlistArray,WatchlistTrigger,setWatchlistTrigger}}>
    <RouterProvider router={router}/>
    </WatchlistContext.Provider>


  
    
    </div>
  );
}

export default App;
