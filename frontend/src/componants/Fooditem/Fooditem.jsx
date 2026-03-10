import './Fooditem.css'
import rating_starts from '../../assets/rating_starts.png'

const Fooditem = ({ name, price, description, image }) => {
  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
      </div>

      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={rating_starts} alt='' />
        </div>

        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default Fooditem