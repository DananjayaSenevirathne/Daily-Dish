import React, { useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "./StoreContext";

const StoreContextProvider = ({ children }) => {

  const url = "http://localhost:5000";

  // STATES
  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  // FETCH FOOD LIST
  const fetchFoodList = async () => {

    try {

      const response = await axios.get(
        url + "/api/food/list"
      );

      console.log(response.data);

      if (response.data.success) {

        setFoodList(response.data.data);

      }

    } catch (error) {

      console.log(error);

    }
  };

  // LOAD CART DATA
  const loadCartData = async (token) => {

    try {

      const response = await axios.post(
        url + "/api/cart/get",
        {},
        {
          headers: { token },
        }
      );

      console.log(response.data);

      if (response.data.success) {

        setCartItems(response.data.cartData);

      }

    } catch (error) {

      console.log(error);

    }
  };

  // ADD TO CART
  const addToCart = async (itemId) => {

    if (!cartItems[itemId]) {

      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));

    } else {

      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }

    // BACKEND
    if (token) {

      try {

        await axios.post(
          url + "/api/cart/add",
          { itemId },
          {
            headers: { token },
          }
        );

      } catch (error) {

        console.log(error);

      }
    }
  };

  // REMOVE FROM CART
  const removeFromCart = async (itemId) => {

    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));

    // BACKEND
    if (token) {

      try {

        await axios.post(
          url + "/api/cart/remove",
          { itemId },
          {
            headers: { token },
          }
        );

      } catch (error) {

        console.log(error);

      }
    }
  };

  // TOTAL CART AMOUNT
  const getTotalCartAmount = () => {

    let totalAmount = 0;

    for (const item in cartItems) {

      if (cartItems[item] > 0) {

        const itemInfo = food_list.find(
          (product) => product._id === item
        );

        if (itemInfo) {

          totalAmount +=
            itemInfo.price * cartItems[item];

        }
      }
    }

    return totalAmount;
  };

  // LOAD DATA
  useEffect(() => {

    const loadData = async () => {

      await fetchFoodList();

      const savedToken =
        localStorage.getItem("token");

      if (savedToken) {

        setToken(savedToken);

        // FIXED LINE
        await loadCartData(savedToken);

      }
    };

    loadData();

  }, []);

  // CONTEXT VALUE
  const contextValue = {
    food_list,
    setFoodList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;