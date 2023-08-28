import React, { useContext, useRef } from "react";
import Button from "./Button";
import AppContext from "../context/AppContext";

const UserInfoForm = () => {
  const { setGuest } = useContext(AppContext);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);

  let user = { firstName: "", lastName: "", email: "" };

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName.current && lastName.current && email.current) {
      user.firstName = firstName.current.value;
      user.lastName = lastName.current.value;
      user.email = email.current.value;
    }
    setGuest(user);
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
      <Button label="Submit" />
    </form>
  );
};

export default UserInfoForm;
