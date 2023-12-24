import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider =props=>{
const [cartState,setCartState]=useState({
  items:[],
  totalAmount:0,
});

  const addItemToCartHandler=(item)=>{
   
    let itemAmount=Number(item.amount);
    setCartState((prev)=>({
      ...prev,
      items:[...cartState.items,item],
      totalAmount:prev.totalAmount+itemAmount,
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