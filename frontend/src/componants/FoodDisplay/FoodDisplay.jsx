import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  console.log(food_list);

  return (

    <div className="food-display" id="food-display">

      <h2>Top dishes near you</h2>

      <div className="food-display-list">

        {food_list && food_list.length > 0 ? (

          food_list.map((item) => {

            if (
              category === "All" ||
              category === item.category
            ) {

              return (
                <Fooditem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }

            return null;
          })

        ) : (

          <p>Loading foods...</p>

        )}

      </div>

    </div>
  );
};

export default FoodDisplay;