import React from 'react';
import styles from "./Form.module.scss";

const Form = ({submitFn}) => (
  <div className={styles.wrapper}>
    <h2>Add new menu item</h2>
    <form className={styles.form} onSubmit={submitFn}>
      <div className={styles.formItem}>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder=" "
          maxLength="30"
          autocomplete="off"
        />
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <div className={styles.formItemBar} />
      </div>
      <div className={styles.formItem}>
        <input
          className={styles.input}
          type="text"
          name="price"
          id="price"
          placeholder=" "
          autocomplete="off"
        />
        <label className={styles.label} htmlFor="link">
          Price
        </label>
        <div className={styles.formItemBar} />
      </div>
      <div className={styles.formItem}>
        <input
          className={styles.input}
          type="text"
          name="image"
          id="image"
          placeholder=" "
          autocomplete="off"
        />
        <label className={styles.label} htmlFor="image">
          Image
        </label>
        <div className={styles.formItemBar} />
      </div>
      <div className={styles.formItem}>
        <textarea
          className={styles.textarea}
          name="description"
          id="description"
          placeholder=" "
          autocomplete="off"
        />
        <label className={styles.label} htmlFor="description">
          Ingredients
        </label>
        <div className={styles.formItemBar} />
      </div>
      <button className={styles.button}>add new item</button>
    </form>
  </div>
)

export default Form;