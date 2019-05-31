import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/menu">Menu</Link>
    </li>
    <li>
      <Link to="/news">News</Link>
    </li>
    <li>
      <Link to="/gallery">Gallery</Link>
    </li>
  </ul>
);

export default Navigation;
