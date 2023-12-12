import React, { Fragment, useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import "./App.css";
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCart=()=>{
    setCartIsShown(true);
  }
  
  const hideCart=()=>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
     {cartIsShown && <Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
