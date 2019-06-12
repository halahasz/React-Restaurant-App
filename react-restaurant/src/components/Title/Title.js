import React from 'react';
import styles from "./Title.module.scss"

const Title = ({children}) => (
  <h2 className={styles.menuItem__title}>{children}</h2>
);

export default Title;