import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import MenuPDF from './Menu'
import Reservation from './Reservation' 
import Admin from './Admin';
import './Style.css'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<MenuPDF/>} />
      <Route path='/reservation' element={<Reservation/>} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  )
}

export default App