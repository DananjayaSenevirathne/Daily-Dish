import './Home.css'
import Header from '../../componants/Navbar/Header/Header'
import ExplorMenu from '../../ExplorMenu/ExplorMenu'
import { useState } from 'react'
import FoodDisplay from '../../componants/FoodDisplay/FoodDisplay'

const Home = () => {

const[category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExplorMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home