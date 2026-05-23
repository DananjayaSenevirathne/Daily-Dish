import React, {
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import "./MyOrders.css";

import { StoreContext } from "../../context/StoreContext";

import axios from "axios";

import { assets } from "../../assets/assets";

const MyOrders = () => {

  const { url, token } =
    useContext(StoreContext);

  const [data, setData] =
    useState([]);

  // FETCH ORDERS
  const fetchOrders =
    useCallback(async () => {

      try {

        const response =
          await axios.post(

            url + "/api/order/userorders",

            {},

            {
              headers: { token },
            }
          );

        console.log(response.data);

        if (response.data.success) {

          setData(response.data.data);
        }

      } catch (error) {

        console.log(error);
      }

    }, [url, token]);

  // LOAD ORDERS
useEffect(() => {

  const loadOrders = async () => {

    if (token) {

      await fetchOrders();
    }
  };

  loadOrders();

}, [token]);

  return (

    <div className="my-orders">

      <h2>My Orders</h2>

      <div className="container">

        {data.length === 0 ? (

          <p>No Orders Found</p>

        ) : (

          data.map((order, index) => {

            return (

              <div
                key={index}
                className="my-orders-order"
              >

                <img
                  src={assets.parcel_icon}
                  alt=""
                />

                <p>

                  {order.items.map(
                    (item, index) => {

                      if (
                        index ===
                        order.items.length - 1
                      ) {

                        return (
                          item.name +
                          " x " +
                          item.quantity
                        );

                      } else {

                        return (
                          item.name +
                          " x " +
                          item.quantity +
                          ", "
                        );
                      }
                    }
                  )}

                </p>

                <p>
                  ${order.amount}
                </p>

                <p>
                  Items:
                  {order.items.length}
                </p>

                <p>

                  <span>
                    &#x25cf;
                  </span>

                  <b>
                    {order.status}
                  </b>

                </p>

                <button
                  onClick={fetchOrders}
                >
                  Track Order
                </button>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
};

export default MyOrders;