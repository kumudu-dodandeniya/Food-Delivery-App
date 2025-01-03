import { createContext, useEffect, useState } from "react";
import {food_list} from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

   //add new items in to the system
    const addCart = (itemId) => {

        //create a new entity to product
        if (!cartItems[itemId]) {
            setCartItems((prev)=> ({...prev,[itemId]:1}))
        }
        //if already have a product it will increace by 1
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    //remove item
    const removeCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0) {
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cartItems[item]

        }
        
    }
    return totalAmount
   }

    const contextValue = {
        food_list, // food details 
        cartItems,
        setCartItems,
        addCart,
        removeCart,
        getTotalCartAmount

    }
     return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
     )
}

export default StoreContextProvider;