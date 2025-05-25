import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopBar from './components/TopBar'
import LandingPage from './Pages/LandingPage'
import RollingTextFullScreen from './components/RolllingText'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import StockWise from './Pages/Projects/Stockwise'
import Navbar from './components/Navbar'
import Contact from './Pages/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='flex justify-center '>



    <div className='  flex flex-col lg:items-start w-full lg:w-1/2 mt-14 ml-4 mr-4 lg:m-0 '>
      <TopBar/>

      <BrowserRouter>
   <Navbar/>
      <Routes>
      <Route path = '/' element = { <LandingPage/>} />
      <Route path = '/Project/StockWise' element = { <StockWise/>} /> 
      <Route path = '/Contactus' element = { <Contact/>} /> 

     
    
      </Routes>
      </BrowserRouter>

    </div>

    </div>
    <RollingTextFullScreen/>
    </>
   
  )
}

export default App
