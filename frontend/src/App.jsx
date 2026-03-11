import React, { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Home from './pages/Home/Home'
import AppDownload from './componants/AppDownload/AppDownload'
import Footer from './componants/Footer/Footer'
import LogingPopup from './componants/LogingPopup/LogingPopup'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin ? <LogingPopup setShowLogin={setShowLogin} /> : null}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Home />
        <AppDownload />
      </div>

      <Footer />
    </>
  )
}

export default App