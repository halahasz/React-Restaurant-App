import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, type, label, maxLength, ...props }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      type={type}
      name={name}
      placeholder=" "
      id={name}
      maxLength={maxLength}
      {...props}
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

export default Input;

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  tag: 'input',
  maxLength: 200,
};
