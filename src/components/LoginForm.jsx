import React, { useContext } from "react";
import Button from "./Button";
import styles from "../css-modules/LoginForm.module.css";
import AppContext from "../context/AppContext";

const LoginForm = () => {
  const { ordering, setLoggingIn, setOrdering } = useContext(AppContext);

  function handleGuestLogin() {
    setLoggingIn(false);
    setOrdering(true);
  }

  return (
    <form>
      <div className="form-group my-4">
        <label className="fs-5" html="exampleInputEmail1">
          Email address
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group my-4">
        <label className="fs-5" htmlFor="exampleInputPassword1">
          Password
        </label>
        <input
          type="password"
          className="form-control form-control-lg"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className={styles["btn-container"]}>
        <Button label={"Login"} />
        <hr />
        {ordering && (
          <button className={styles["guest-btn"]} onClick={handleGuestLogin}>
            Continue As Guest
          </button>
        )}
        <a href="">Create an account</a>
      </div>
    </form>
  );
};

export default LoginForm;
