import React, { useContext } from 'react';
import './Fooditem.css';

import { StoreContext } from '../../context/StoreContext';

import add_icon_green from '../../assets/add_icon_green.png';
import add_icon_white from '../../assets/add_icon_white.png';
import remove_icon_red from '../../assets/remove_icon_red.png';
import rating_starts from '../../assets/rating_starts.png';

const Fooditem = ({
  id,
  name,
  price,
  description,
  image
}) => {

  const {
    cartItems,
    addToCart,
    removeFromCart,
    url
  } = useContext(StoreContext);

  return (

    <div className='food-item'>

      {/* Food Image */}
      <div className='food-item-img-container'>

        <img
          className='food-item-image'
          src={url + "/images/" + image}
          alt={name}
        />

        {/* Add / Remove Cart */}
        {!cartItems[id] ? (

          <img
            className='add'
            onClick={() => addToCart(id)}
            src={add_icon_white}
            alt='add'
          />

        ) : (

          <div className='food-item-counter'>

            <img
              onClick={() => removeFromCart(id)}
              src={remove_icon_red}
              alt='remove'
            />

            <p>{cartItems[id]}</p>

            <img
              onClick={() => addToCart(id)}
              src={add_icon_green}
              alt='add'
            />

          </div>

        )}

      </div>

      {/* Food Info */}
      <div className='food-item-info'>

        <div className='food-item-name-rating'>

          <p>{name}</p>

          <img
            src={rating_starts}
            alt='rating'
          />

        </div>

        <p className='food-item-desc'>
          {description}
        </p>

        <p className='food-item-price'>
          ${price}
        </p>

      </div>

    </div>
  );
};

export default Fooditem;