import React from "react";
import LoginButton from "./LoginButton";
import styles from "../css-modules/LoginForm.module.css";

const LoginForm = () => {
  return (
    <form>
      <div className="form-group my-4">
        <label className="fs-5" for="exampleInputEmail1">
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
        <label className="fs-5" for="exampleInputPassword1">
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
        <LoginButton />
      </div>
    </form>
  );
};

export default LoginForm;
