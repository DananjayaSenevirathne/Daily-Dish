import React from 'react'
import { useState } from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import basketIcon from '../../assets/basket_icon.png'

const Navbar = () => {

const[menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />

      <ul className='navbar-menu'>
        <li className={menu === "Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li>
        <li className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
        <li className={menu === "Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile-app</li>
        <li className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact us</li>
      </ul>

      <div className='navbar-right'>
        <img src={searchIcon} alt="" />
        <div className='navbar-search-icon'>
          <img src={basketIcon} alt="" />
          <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar