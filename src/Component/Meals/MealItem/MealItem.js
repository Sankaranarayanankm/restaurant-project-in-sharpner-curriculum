import classes from "./MealItem.module.css";
import React from "react";
import MealsForm from "./MealsForm";

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