import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import styles from "./MealItemForm.module.css";
import inputStyles from "./Input.module.css";

const MealItemForm = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const currAmount = Number(inputRef.current.value);
    dispatch(
      cartActions.addToCart({
        id: id,
        name: name,
        price: price,
        amount: currAmount,
      })
    );
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
