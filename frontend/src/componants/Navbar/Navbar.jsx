import React, { useState } from 'react'
import './Navbar.css'

import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import basketIcon from '../../assets/basket_icon.png'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')

  return (
    <div className='navbar'>
      <a href='#home'>
        <img src={logo} alt='logo' className='logo' />
      </a>

      <ul className='navbar-menu'>
        <a
          href='#home'
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </a>

        <a
          href='#explore-menu'
          onClick={() => setMenu('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          Menu
        </a>

        <a
          href='#app-download'
          onClick={() => setMenu('mobile-app')}
          className={menu === 'mobile-app' ? 'active' : ''}
        >
          Mobile-app
        </a>

        <a
          href='#footer'
          onClick={() => setMenu('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          Contact us
        </a>
      </ul>

      <div className='navbar-right'>
        <img src={searchIcon} alt='search' />
        <div className='navbar-search-icon'>
          <img src={basketIcon} alt='basket' />
          <div className='dot'></div>
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar