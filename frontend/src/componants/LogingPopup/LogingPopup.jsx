import React, { useContext, useState } from "react";
import "./LogingPopup.css";
import cross_icon from "../../assets/cross_icon.png";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LogingPopup = ({ setShowLogin }) => {

  const { url, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] =
    useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // INPUT CHANGE
  const onChangeHandler = (event) => {

    const name = event.target.name;

    const value = event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // LOGIN / REGISTER
  const onLogin = async (event) => {

    event.preventDefault();

    let newUrl = url;

    if (currentState === "Login") {

      newUrl += "/api/user/login";

    } else {

      newUrl += "/api/user/register";
    }

    try {

      const response = await axios.post(
        newUrl,
        data
      );

      console.log(response.data);

      if (response.data.success) {

        // SAVE TOKEN
        setToken(response.data.token);

        localStorage.setItem(
          "token",
          response.data.token
        );

        alert(response.data.message);

        setShowLogin(false);

      } else {

        alert(response.data.message);
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="login-popup">

      <form
        onSubmit={onLogin}
        className="loging-popup-container"
      >

        {/* TITLE */}
        <div className="loging-popup-title">

          <h2>{currentState}</h2>

          <img
            onClick={() =>
              setShowLogin(false)
            }
            src={cross_icon}
            alt=""
          />

        </div>

        {/* INPUTS */}
        <div className="loging-popup-input">

          {currentState === "Login"
            ? null
            : (
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                placeholder="Your Name"
                required
              />
            )}

          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
          />

          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />

        </div>

        {/* BUTTON */}
        <button type="submit">

          {currentState === "Sign Up"
            ? "Create Account"
            : "Login"}

        </button>

        {/* TERMS */}
        <div className="loging-popup-condition">

          <input type="checkbox" required />

          <p>
            By continuing, I agree to the
            terms of use & privacy policy.
          </p>

        </div>

        {/* SWITCH LOGIN / SIGNUP */}
        {currentState === "Login" ? (

          <p>
            Create a new account?{" "}

            <span
              onClick={() =>
                setCurrentState("Sign Up")
              }
            >
              Click here
            </span>
          </p>

        ) : (

          <p>
            Already have an account?{" "}

            <span
              onClick={() =>
                setCurrentState("Login")
              }
            >
              Login here
            </span>
          </p>
        )}

      </form>
    </div>
  );
};

export default LogingPopup;