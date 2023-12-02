import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';


const router=createBrowserRouter(

  createRoutesFromElements(

  <Route path='/' element={<RootLayout/>}>


  <Route path='/' index element={<WelcomePage/>}/>
  <Route path='/signin'  element={<SigninPage/>}/>
  <Route path='/signup'  element={<SignupPage/>}/>
  <Route path='/signup'  element={<SignupPage/>}/>


  
  </Route>
  )

)



function App() {
  return (
    <div className='w-full h-fit bg-black   '>
    
<RouterProvider router={router}/>


  
    
    </div>
  );
}

export default App;
