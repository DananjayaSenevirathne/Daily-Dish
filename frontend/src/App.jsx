import React, { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './componants/Footer/Footer'
import Cart from './pages/Cart/Cart'
import LogingPopup from './componants/LogingPopup/LogingPopup'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LogingPopup setShowLogin={setShowLogin} /> : null}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App