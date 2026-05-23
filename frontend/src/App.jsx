import React, { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './componants/Footer/Footer'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import LogingPopup from './componants/LogingPopup/LogingPopup'
import { Routes, Route } from 'react-router-dom'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

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
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App