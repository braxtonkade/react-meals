import React from "react";
import UserInfoForm from "./UserInfoForm";
import styles from "../css-modules/Modal.module.css";

const ContinueAsGuest = () => {
  return (
    <>
      <h1 className={styles.heading}>Continue As Guest</h1>
      <UserInfoForm />
    </>
  );
};

export default ContinueAsGuest;
