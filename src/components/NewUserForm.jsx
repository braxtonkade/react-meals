import React from "react";
import UserInfoForm from "./UserInfoForm";
import styles from "../css-modules/Modal.module.css";

const NewUserForm = () => {
  return (
    <>
      <h1 className={styles.heading}>Create An Account</h1>
      <UserInfoForm />
    </>
  );
};

export default NewUserForm;
