import React, { Fragment } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />

    </React.Fragment>
  );
}

export default App;
