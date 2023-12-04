import React from "react";
import classes from "./Header.module.css"
import mealsImage from "../../assests/premium_photo-1661369889067-c86c31362f83.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
   <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full of delicious food!"/>
      </div>
   </React.Fragment>
  );
};

export default Header;
