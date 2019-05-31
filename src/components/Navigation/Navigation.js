import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav>
    <ul className={styles.wrapper} >
      <li className={styles.navItem}>
        <NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/">Home</NavLink>
      </li>
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

export default Navigation;
