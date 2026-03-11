import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import basketIcon from '../../assets/basket_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState('Home')

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo' />

      <ul className='navbar-menu'>
        <Link to='/' className={menu === 'Home' ? 'active' : ''} onClick={() => setMenu('Home')}>
          Home
        </Link>
        <Link to='/menu' className={menu === 'Menu' ? 'active' : ''} onClick={() => setMenu('Menu')}>
          Menu
        </Link>
        <Link
          to='/app-download'
          className={menu === 'Mobile-app' ? 'active' : ''}
          onClick={() => setMenu('Mobile-app')}
        >
          Mobile-app
        </Link>
        <Link
          to='/contact'
          className={menu === 'Contact us' ? 'active' : ''}
          onClick={() => setMenu('Contact us')}
        >
          Contact us
        </Link>
      </ul>

      <div className='navbar-right'>
        <img src={searchIcon} alt='search' />
        <div className='navbar-search-icon'>
          <img src={basketIcon} alt='basket' />
          <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar