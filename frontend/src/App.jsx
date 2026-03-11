import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './componants/Footer/Footer'
import AppDownload from './componants/AppDownload/AppDownload'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Home />} />
          <Route path='/app-download' element={<AppDownload />} />
          <Route path='/contact' element={<div style={{ padding: '50px', fontSize: '30px' }}>Contact Page</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App