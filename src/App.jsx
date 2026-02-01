import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import './Style.css'
import About from './About'
import MenuPDF from './Menu'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<MenuPDF/>} />
      </Routes>
    </div>
  )
}

export default App