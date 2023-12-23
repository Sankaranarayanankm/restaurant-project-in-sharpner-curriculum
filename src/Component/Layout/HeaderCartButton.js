import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  let cartCtx=useContext(cartContext);
  console.log(cartCtx)
  const numberOfCartIcon=cartCtx.items.reduce((currNumber,item)=>{
    return currNumber+item.totalAmount;
  },0);

  console.log(numberOfCartIcon)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
