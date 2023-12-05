import React, { Fragment } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
