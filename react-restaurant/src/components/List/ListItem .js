import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";
import Title from '../Title/Title'

const MenuItem = ({ image, title, price, ingredients }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      <ImageTag
        className={image ? styles.image : styles.imageNone}
        src={image}
        alt={title}
      />
      <div>
        <Title>{title}</Title>
        {price && <span className={styles.menuItem__price}>
          <span className={styles.menuItem__dots}> . . . . . </span>
          {price}
        </span>}
        <p className={styles.menuItem__ingredients}>{ingredients}</p>
      </div>
    </li>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  ingredients: PropTypes.string
};

MenuItem.defaultProps = {
  image: null, 
  price: null,
  ingredients: null,
};
