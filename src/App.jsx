import { useState } from 'react'
import NavBar from './Component/NavBar/Navbar'
import Home from './Pages/Home/Home'
import { Route,Routes,Navigate } from 'react-router-dom'
import Social9 from './Pages/Social-9th/Social9'
import Social10 from './Pages/Social-10th/Social10'
import Nmms from './Pages/Nmms/Nmms'
import Footer from './Component/Footer/Footer'

function App() {

  return(
    <div>
      <NavBar/>
      <Routes>
         <Route path='/' element={<Navigate to="/home"/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/nmms' element={<Nmms/>}/>
         <Route path='/social-9th' element={<Social9/>}/>
         <Route path='/social-10th' element={<Social10/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
