import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import OrderView from "./OrderView";

const Meals = () => {
  const { ordered } = useContext(CartContext);
  return (
    <>
      <MealsSummary />
      {ordered && <OrderView />}
      {!ordered && <AvailableMeals />}
    </>
  );
};

export default Meals;
