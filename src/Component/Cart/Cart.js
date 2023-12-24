import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import cartContext from "../../Store/cart-context";

const Cart = (props) => {
  const context=useContext(cartContext);
  console.log(context.items)
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {context.items.map((item ,index) => (
        <ul key={index}>
          {item.items.map((product)=>(<li> {product.name} <br/> ${product.price}</li>))}
        </ul>
      ))}
    </ul>
  );
  return (
    <Model onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
