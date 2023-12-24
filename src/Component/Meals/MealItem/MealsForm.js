import React, { useContext, useState } from "react";
import classes from "./MealsForm.module.css";
import Input from "../../UI/Input";
import cartContext from "../../../Store/cart-context";

const MealsForm = (props) => {
  // console.log(props)
 const [amount,setAmount]=useState(1);
 
 const cartctx=useContext(cartContext);
 const addItemHandler=(item)=>{
  // cartctx.items=[...cartctx.items,item] // how to add state for this so that i can map all the item to the browser
  const newItem={
    items:[...cartctx.items,item],
    amount
  }
  cartctx.addItem(newItem);
//  console.log(cartctx.items)
  
 }
 const amountChangeHandler=(event)=>{
  setAmount(event.target.value)
 }
  
  return (
    <form className={classes.form}>
      
      <Input
        label="Amount"
        
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: amount,
          onChange: amountChangeHandler
        }}
      />
      <button type="button" onClick={()=>addItemHandler(props.data)}>+ Add</button>
    </form>
  );
};

export default MealsForm;
