import React from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem';
import { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className="food-display" id='food-display'>
            <h2>Top Dishes</h2>
            <div className="food-display-list">
               {food_list.map((item,index)=>{

                //filter food catogary 
                    if (category==="All" || category===item.category){
                        return <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image}
                                />
                    }

               })}
            </div>
             </div>
        
    );
}

export default FoodDisplay