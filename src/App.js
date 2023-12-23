import React, {  useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/CartProvider";
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
    <CartProvider>
     {cartIsShown && <Cart onHideCart={hideCart}/>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
