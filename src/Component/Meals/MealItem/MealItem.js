import classes from "./MealItem.module.css";
import React, { useContext } from "react";
import MealsForm from "./MealsForm";
import cartContext from "../../../Store/cart-context";

const MealItem =(props)=>{
 
  const price=`$${props.price.toFixed(2)}`;
  return <li className={classes.meal}>
    <div>
      <h3>{props.name}</h3>
      <div className={classes.description}>{props.des}</div>
      <div className={classes.price}>{price}</div>
    </div>
    <div>
    <MealsForm />
    </div>
  </li>
}

export default MealItem;