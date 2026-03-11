import React, { useState } from 'react'
import './LogingPopup.css'
import cross_icon from '../../assets/cross_icon.png'

const LogingPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState('Login')

  return (
    <div className='login-popup'>
      <form className='loging-popup-container'>
        <div className='loging-popup-title'>
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={cross_icon}
            alt='close'
          />
        </div>

        <div className='loging-popup-input'>
          {currentState === 'Login' ? null : (
            <input type='text' placeholder='Your name' required />
          )}
          <input type='email' placeholder='Your Email' required />
          <input type='password' placeholder='Password' required />
        </div>

        <button type='submit'>
          {currentState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className='loging-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currentState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrentState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LogingPopup