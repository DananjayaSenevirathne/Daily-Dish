import React, { useState, useContext } from "react";

import "./Navbar.css";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../../assets/logo.png";

import searchIcon from "../../assets/search_icon.png";

import basketIcon from "../../assets/basket_icon.png";

import profileIcon from "../../assets/profile_icon.png";

import logoutIcon from "../../assets/logout_icon.png";

import bagIcon from "../../assets/bag_icon.png";

import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] =
    useState("home");

  const {
    getTotalCartAmount,
    token,
    setToken,
  } = useContext(StoreContext);

  const location =
    useLocation();

  const navigate =
    useNavigate();

  const isHomePage =
    location.pathname === "/";

  // LOGOUT
  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    setToken("");

    navigate("/");
  };

  return (

    <div className="navbar">

      {/* LOGO */}
      <Link to="/">

        <img
          src={logo}
          alt="logo"
          className="logo"
        />

      </Link>

      {/* MENU */}
      <ul className="navbar-menu">

        <Link
          to="/"
          onClick={() =>
            setMenu("home")
          }
          className={
            menu === "home"
              ? "active"
              : ""
          }
        >
          Home
        </Link>

        {isHomePage ? (

          <>

            <a
              href="#explore-menu"
              onClick={() =>
                setMenu("menu")
              }
              className={
                menu === "menu"
                  ? "active"
                  : ""
              }
            >
              Menu
            </a>

            <a
              href="#app-download"
              onClick={() =>
                setMenu(
                  "mobile-app"
                )
              }
              className={
                menu ===
                "mobile-app"
                  ? "active"
                  : ""
              }
            >
              Mobile App
            </a>

            <a
              href="#footer"
              onClick={() =>
                setMenu(
                  "contact-us"
                )
              }
              className={
                menu ===
                "contact-us"
                  ? "active"
                  : ""
              }
            >
              Contact Us
            </a>

          </>

        ) : (

          <>

            <Link
              to="/"
              onClick={() =>
                setMenu("menu")
              }
              className={
                menu === "menu"
                  ? "active"
                  : ""
              }
            >
              Menu
            </Link>

            <Link
              to="/"
              onClick={() =>
                setMenu(
                  "mobile-app"
                )
              }
              className={
                menu ===
                "mobile-app"
                  ? "active"
                  : ""
              }
            >
              Mobile App
            </Link>

            <Link
              to="/"
              onClick={() =>
                setMenu(
                  "contact-us"
                )
              }
              className={
                menu ===
                "contact-us"
                  ? "active"
                  : ""
              }
            >
              Contact Us
            </Link>

          </>
        )}

      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        <img
          src={searchIcon}
          alt="search"
        />

        {/* CART */}
        <div className="navbar-search-icon">

          <Link to="/cart">

            <img
              src={basketIcon}
              alt="basket"
            />

          </Link>

          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot"
            }
          ></div>

        </div>

        {/* LOGIN / PROFILE */}
        {!token ? (

          <button
            onClick={() =>
              setShowLogin(true)
            }
          >
            Sign In
          </button>

        ) : (

          <div className="navbar-profile">

            {/* PROFILE ICON */}
            <img
              className="profile-icon"
              src={profileIcon}
              alt="profile"
            />

            {/* DROPDOWN */}
            <ul className="nav-profile-dropdown">

              {/* ORDERS */}
              <li
                onClick={() =>
                  navigate(
                    "/myorders"
                  )
                }
              >

                <img
                  className="dropdown-icon"
                  src={bagIcon}
                  alt="orders"
                />

                <p>Orders</p>

              </li>

              <hr />

              {/* LOGOUT */}
              <li
                onClick={logout}
              >

                <img
                  className="dropdown-icon"
                  src={logoutIcon}
                  alt="logout"
                />

                <p>Logout</p>

              </li>

            </ul>

          </div>
        )}

      </div>

    </div>
  );
};

export default Navbar;