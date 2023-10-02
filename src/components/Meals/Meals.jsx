import React, { useContext } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import OrderView from "../OrderView/OrderView";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      {/* {ordered && <OrderView />} */}
      <AvailableMeals />
    </>
  );
};

export default Meals;
