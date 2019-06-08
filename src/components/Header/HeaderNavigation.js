import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
  <nav>
    <ul className={styles.wrapper} >
      <li className={styles.navItem}>
        <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/menu">Menu</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/news">News</NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/gallery">Gallery</NavLink>
      </li>
    </ul>
  </nav>
);

export default HeaderNavigation;
