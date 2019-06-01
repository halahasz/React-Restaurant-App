import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss"

const Button = ({children, secondary}) => (
  <button className={secondary ? styles.secondary : styles.button}>{children}</button>
);

export default Button;

Button.propTypes = {
  secondary: PropTypes.bool
};