import React from "react";
import "./ListItem.scss";
import PropTypes from "prop-types";
import Title from '../Title/Title'

const ListItem = ({ image, title, price, ingredients, activeClass, ...props }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className="listWrapper" {...props}>
      <ImageTag
        className={image ? "listImg__"+activeClass : "imageNone__"+activeClass}
        src={image}
        alt={title}
      />
      <div>
        <Title>{title}</Title>
        {price && <span className="menuItem__price">
          <span className="menuItem__dots"> . . . . . </span>
          {price}
        </span>}
        <p className="menuItem__ingredients">{ingredients}</p>
      </div>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  ingredients: PropTypes.string
};

ListItem.defaultProps = {
  image: null, 
  price: null,
  ingredients: null,
};
