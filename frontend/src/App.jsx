import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ExplorMenu from './ExplorMenu/ExplorMenu'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <ExplorMenu />
    </div>
  )
}

export default App