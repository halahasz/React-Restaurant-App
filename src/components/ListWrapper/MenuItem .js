import React from "react";
import "./MenuItem.css";
import PropTypes from "prop-types";

const MenuItem = ({ image, name, price, ingredients }) => (
  <li className="menuItem__wrapper">
    <img className="menuItem__image" src={image} alt={name} />
    <div>
      <h2 className="menuItem__title">
        {name}
        <span className="menuItem__price">
          <span className="menuItem__dots"> . . . . . </span>
          {price}
        </span>
      </h2>
      <p className="menuItem__ingredients">{ingredients}</p>
    </div>
  </li>
);

export default MenuItem;

MenuItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ingredients: PropTypes.string
};


