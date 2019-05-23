import React from 'react';
import './MenuItem.css';
import soupImage from '../../assets/img/soup.jpg';

const MenuItem = () => (
  <li className="menuItem__wrapper">
    <img className="menuItem__image" src={soupImage} alt=""/>
    <div>
      <h2 className="menuItem__title">Ravioli with mashrooms<span className="menuItem__price"><span className="menuItem__dots">  . . . . . </span>28zl</span></h2>
      <p className="menuItem__ingredients" >boletus, oyster mushrooms, truffle paste, butternut squash, spinach, chanterelle</p>
    </div>
  </li>
);

export default MenuItem;