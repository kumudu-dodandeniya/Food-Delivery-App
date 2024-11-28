import React, { useContext, } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

//get food details

const FoodItem = ({id,name,price,description,image}) => {
const {cartItems, addCart, removeCart} = useContext(StoreContext)

  
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img className= "food-item-image" src={image} alt="" />
            {
              !cartItems[id]  
              ?<img className='add' onClick={() =>addCart(id)} src={assets.add_icon_white} />
              :<div className='food-item-counter'>
                  <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addCart(id)} src={assets.add_icon_green} alt="" />

               </div> 

            }


        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">Rs.{price}</p>
        </div>
    </div>
  )
}

export default FoodItem