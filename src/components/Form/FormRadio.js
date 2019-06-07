import React from "react";
import styles from "./FormRadio.module.scss";

const FormRadio = ({ id, checked, changeFn, children }) => (
  <label className={styles.radio}>
    <input type="radio" id={id} checked={checked} onChange={changeFn} />
    <div className={styles.radioButton} />
    {children}
  </label>
);

export default FormRadio;
