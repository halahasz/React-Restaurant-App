import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss"

const Button = ({children, secondary, ...props}) => (
  <button className={secondary ? styles.secondary : styles.button} {...props} >{children}</button>
);

export default Button;

Button.propTypes = {
  secondary: PropTypes.bool
};