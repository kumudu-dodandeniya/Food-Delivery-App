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

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue = {
        food_list, // food details 
        cartItems,
        setCartItems,
        addCart,
        removeCart

    }
     return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
     )
}

export default StoreContextProvider;