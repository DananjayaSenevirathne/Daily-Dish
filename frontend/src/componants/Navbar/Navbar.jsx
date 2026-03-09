import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        
      <img src="./assets/logo.png" alt="" className="logo" />
    <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>Contact us</li>
    </ul>
<div className="navbar-right">
    <img src="./assets/search.icon" alt=""  />
    <div className="navbar-search-icon">
        <img src="./assets/basket.icon" alt="" />
        <div className='dot'></div>
      </div>
      <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
