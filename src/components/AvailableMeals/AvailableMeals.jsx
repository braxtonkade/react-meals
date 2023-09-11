import React from "react";
import styles from "./AvailableMeals.module.css";
import meals from "../../assets/data/dummyMeals";
import Card from "../UI/Card";
import MealItem from "../Meals/MealItem";

const AvailableMeals = () => {
  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price.toFixed(2)}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
