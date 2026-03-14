import React from 'react'
import add_icon from '../../assets/add_icon.png'
import order_icon from '../../assets/order_icon.png'


import './sidebar.css'
const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src={add_icon} alt="" className="" />
                <p className=""> Add items</p>
            </div>

            <div className="sidebar-option">
                <img src={order_icon} alt="" className="" />
                <p className=""> List items</p>
            </div>

            <div className="sidebar-option">
                <img src={order_icon} alt="" className="" />
                <p className=""> Order items</p>
            </div>

        </div>
      
    </div>
  )
}

export default sidebar
