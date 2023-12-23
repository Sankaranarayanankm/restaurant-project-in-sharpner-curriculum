import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider =props=>{
const [cartState,setCartState]=useState({
  items:[],
  totalAmount:0,
});


  const addItemToCartHandler=(item)=>{
    item=Number(item);
    setCartState((prev)=>({
      ...prev,
      totalAmount:prev.totalAmount+item,
    }))
    
  }
  const removeItemFromCartHandler=(id)=>{}
  const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler  
  };
  
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;