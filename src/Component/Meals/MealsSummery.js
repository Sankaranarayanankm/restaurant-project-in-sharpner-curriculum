import React from "react";
import classes from "./MealsSummery.module.css";
const MealsSummery = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food,Delievered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All ourmeals are cooked with high-quailty ingreadients, just-in-time and
        of-course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummery;
