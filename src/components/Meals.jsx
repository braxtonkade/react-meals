import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import OrderView from "./OrderView";

const Meals = () => {
  const { ordered } = useContext(AppContext);
  return (
    <>
      <MealsSummary />
      {ordered && <OrderView />}
      {!ordered && <AvailableMeals />}
    </>
  );
};

export default Meals;
