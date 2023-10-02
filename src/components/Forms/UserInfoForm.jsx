import React, { useEffect, useRef } from "react";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user";
import { modalActions } from "../../store/modal";
import { nanoid } from "nanoid";

const UserInfoForm = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  let user = { firstName: "", lastName: "", email: "", id: nanoid() };

  async function verifyNoExistingAccount(email) {
    const encodedEmail = encodeURIComponent(email);
    const response = await fetch(
      `https://react-meals-316e6-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${encodedEmail}"`
    );

    const data = await response.json();

    const noAccountExists = Object.keys(data).length === 0;

    return noAccountExists;
  }

  function handleAddNewUser({ firstName, lastName, email, id, password }) {
    fetch(
      `https://react-meals-316e6-default-rtdb.firebaseio.com/users/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (firstName.current && lastName.current && email.current) {
      user.firstName = firstName.current.value;
      user.lastName = lastName.current.value;
      user.email = email.current.value;
    }

    if (modal.view === "new-user") {
      const isNewAccount = await verifyNoExistingAccount(user.email);
      if (isNewAccount) {
        dispatch(
          userActions.setUser({
            ...user,
            loggedIn: true,
          })
        );

        handleAddNewUser({ ...user, password: password.current.value });

        if (modal.ordering) {
          dispatch(modalActions.showOrder());
        } else {
          dispatch(modalActions.showLogin());
        }
      } else {
        dispatch(modalActions.showLogin());
      }
    } else {
      dispatch(
        userActions.setUser({
          ...user,
          loggedIn: false,
        })
      );
      dispatch(modalActions.showOrder());
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          First Name
        </label>
        <input ref={firstName} type="text" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Last Name
        </label>
        <input ref={lastName} type="text" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input ref={email} type="email" className="form-control" required />
      </div>
      {modal.view === "new-user" && (
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            ref={password}
            type="password"
            className="form-control"
            required
          />
        </div>
      )}
      <Button label="Submit" />
    </form>
  );
};

export default UserInfoForm;
