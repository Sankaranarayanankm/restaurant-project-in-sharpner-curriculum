import React from "react";
import "./Header.css"
const Header = () => {
  return (
    <nav className="header__nav">
      <h1 className="header__h1">ReactMeals</h1>
      <div className="header__div">

      <div >Your Cart</div>
      <button className="header__button">0</button>
      </div>
    </nav>
  );
};

export default Header;
