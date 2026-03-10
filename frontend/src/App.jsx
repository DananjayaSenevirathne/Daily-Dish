import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './componants/Footer/Footer'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App