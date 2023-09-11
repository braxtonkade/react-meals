import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/AppContext";
import styles from "./MealItemForm.module.css";
import inputStyles from "./Input.module.css";

const MealItemForm = ({ id, name, price }) => {
  const { setCart } = useContext(AppContext);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const currAmount = Number(inputRef.current.value);

    setCart((prev) => {
      // Check if there's an item with the same name in the cart
      const existingItem = prev.find((item) => item.name === name);

      if (existingItem) {
        // If an item with the same name exists, update its amount
        return prev.map((item) => {
          if (item.name === name) {
            return {
              ...item,
              amount: item.amount + currAmount,
            };
          }
          return item;
        });
      } else {
        // If no matching item, add a new item to the cart
        return [
          ...prev,
          {
            id: id,
            name: name,
            price: price,
            amount: currAmount,
          },
        ];
      }
    });

    inputRef.current.value = "";
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={inputStyles.input}>
        <label htmlFor={id}>Amount</label>
        <input id={id} ref={inputRef} type="number" min={"1"} required />
      </div>
      <button type="submit">ADD TO CART</button>
    </form>
  );
};

export default MealItemForm;
