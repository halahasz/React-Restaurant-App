import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, secondary, type, ...props }) => (
  <button
    rel="noopener noreferrer"
    type={type}
    className={secondary ? styles.secondary : styles.button}
    {...props}
  >
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  secondary: true,
  type: 'button',
};
