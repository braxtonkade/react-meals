import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "../Forms/MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
      </div>
      <MealItemForm id={id} name={name} price={price} />
    </div>
  );
};

export default MealItem;
