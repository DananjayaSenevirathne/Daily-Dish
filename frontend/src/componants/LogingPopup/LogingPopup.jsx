import React, { useContext, useState } from 'react'
import './LogingPopup.css'
import cross_icon from '../../assets/cross_icon.png'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LogingPopup = ({ setShowLogin }) => {

  const { url,setToken } = useContext(StoreContext)

  const [currentState, setCurrentState] = useState('Login')

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  // Handle input changes
  const onChangeHandler = (event) => {

    const name = event.target.name
    const value = event.target.value

    setData((data) => ({ ...data, [name]: value }))
  }

  // Login / Register function
  const onLogin = async (event) => {

    event.preventDefault()

    let newUrl = url

    if (currentState === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }

    try {

      const response = await axios.post(newUrl, data)

      if (response.data.success) {
        setToken (response.data.token);
        alert(response.data.message)
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)

      } else {

        alert(response.data.message)
      }

    } catch (error) {

      console.log(error)
      alert("Something went wrong")
    }
  }

  return (
    <div className='login-popup'>

      <form onSubmit={onLogin} className='loging-popup-container'>

        {/* Title */}
        <div className='loging-popup-title'>

          <h2>{currentState}</h2>

          <img
            onClick={() => setShowLogin(false)}
            src={cross_icon}
            alt='close'
          />

        </div>

        {/* Inputs */}
        <div className='loging-popup-input'>

          {currentState === 'Login' ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your name'
              required
            />
          )}

          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Your Email'
            required
          />

          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />

        </div>

        {/* Button */}
        <button type='submit'>

          {currentState === 'Sign Up'
            ? 'Create Account'
            : 'Login'}

        </button>

        {/* Terms */}
        <div className='loging-popup-condition'>

          <input type='checkbox' required />

          <p>
            By continuing, I agree to the terms of use &
            privacy policy.
          </p>

        </div>

        {/* Switch Login / Signup */}
        {currentState === 'Login' ? (

          <p>
            Create a new account?{" "}

            <span onClick={() => setCurrentState('Sign Up')}>
              Click here
            </span>
          </p>

        ) : (

          <p>
            Already have an account?{" "}

            <span onClick={() => setCurrentState('Login')}>
              Login here
            </span>
          </p>
        )}

      </form>
    </div>
  )
}

export default LogingPopup