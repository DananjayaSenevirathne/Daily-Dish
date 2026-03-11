import './Home.css'
import Header from '../../componants/Navbar/Header/Header'
import ExplorMenu from '../../ExplorMenu/ExplorMenu'
import FoodDisplay from '../../componants/FoodDisplay/FoodDisplay'
import AppDownload from '../../componants/AppDownload/AppDownload'
import { useState } from 'react'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
      <Header />
      <ExplorMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home