import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <h2>Add new menu item</h2>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input name="name" label="Name" maxLength={30} />
      <Input name="price" label='Price' />
      <Input name="image" label="Image" />
      <Input tag = 'textarea' name="ingredients" label="Ingredients" />
      <button className={styles.button}>add new item</button>
    </form>
  </div>
);

export default Form;
