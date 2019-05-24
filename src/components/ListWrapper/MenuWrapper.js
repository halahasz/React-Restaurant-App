import React from "react";
import MenuItem from "./MenuItem ";
import "./MenuWrapper.css";
import { menuItems } from "../../data/menuItems";

const MenuWrapper = () => (
  <ul className="menuWrapper__wrapper">
    {menuItems.map(item => (
      <MenuItem key={item.name} {...item} />
    ))}
  </ul>
);

export default MenuWrapper;
