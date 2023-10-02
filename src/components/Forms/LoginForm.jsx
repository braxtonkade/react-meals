import React, { useRef } from "react";
import Button from "../UI/Button";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import { userActions } from "../../store/user";

const LoginForm = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function verifyUser(email, password) {
    const encodedEmail = encodeURIComponent(email);
    const response = await fetch(
      `https://react-meals-316e6-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${encodedEmail}"`
    );
    const data = await response.json();
    const userInfo = {};

    for (let key in data) {
      userInfo.id = key;
      userInfo.firstName = data[key].firstName;
      userInfo.lastName = data[key].lastName;
      userInfo.email = data[key].email;
      userInfo.password = data[key].password;
    }

    if (userInfo.email === email && userInfo.password === password) {
      userInfo.password = "";
      dispatch(userActions.setUser({ ...userInfo, loggedIn: true }));
      dispatch(modalActions.showLogin());
    } else {
      console.log("Error logging in");
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    verifyUser(emailRef.current.value, passwordRef.current.value);
  }

  function handleNewUser() {
    dispatch(modalActions.showUserSignUp());
  }

  function handleGuestLogin() {
    dispatch(modalActions.showGuestSignUp());
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group my-4">
        <label className="fs-5" html="exampleInputEmail1">
          Email address
        </label>
        <input
          ref={emailRef}
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
          ref={passwordRef}
          type="password"
          className="form-control form-control-lg"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className={styles["btn-container"]}>
        <Button label={"Login"} />
        <hr />
        {modal.ordering && (
          <button className={styles["guest-btn"]} onClick={handleGuestLogin}>
            Continue As Guest
          </button>
        )}
        <button type="button" className="btn btn-link" onClick={handleNewUser}>
          Create an account
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
