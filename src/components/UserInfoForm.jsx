import React from "react";
import Button from "./Button";

const UserInfoForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          First Name
        </label>
        <input type="text" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Last Name
        </label>
        <input type="text" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" required />
      </div>
      {/* <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Confirm Password
        </label>
        <input type="text" className="form-control" />
      </div> */}
      <Button label="Submit" />
    </form>
  );
};

export default UserInfoForm;
