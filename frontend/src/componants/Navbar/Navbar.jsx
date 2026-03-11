import React, { useState, useContext } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import basketIcon from '../../assets/basket_icon.png'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  const { getTotalCartAmount } = useContext(StoreContext)
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt='logo' className='logo' />
      </Link>

      <ul className='navbar-menu'>
        <Link
          to='/'
          onClick={() => setMenu('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          Home
        </Link>

        {isHomePage ? (
          <>
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
          </>
        ) : (
          <>
            <Link
              to='/'
              onClick={() => setMenu('menu')}
              className={menu === 'menu' ? 'active' : ''}
            >
              Menu
            </Link>

            <Link
              to='/'
              onClick={() => setMenu('mobile-app')}
              className={menu === 'mobile-app' ? 'active' : ''}
            >
              Mobile-app
            </Link>

            <Link
              to='/'
              onClick={() => setMenu('contact-us')}
              className={menu === 'contact-us' ? 'active' : ''}
            >
              Contact us
            </Link>
          </>
        )}
      </ul>

      <div className='navbar-right'>
        <img src={searchIcon} alt='search' />
        <div className='navbar-search-icon'>
          <Link to='/cart'>
            <img src={basketIcon} alt='basket' />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar