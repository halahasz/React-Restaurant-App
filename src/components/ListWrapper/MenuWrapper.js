import React from "react";
import MenuItem from "./MenuItem ";
import "./MenuWrapper.css";

const MenuWrapper = (props) => (
  <ul className="menuWrapper__wrapper">
    {props.items.map(item => (
      <MenuItem key={item.name} {...item} />
    ))}
  </ul>
);

export default MenuWrapper;
