import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss";
import logoImage from '../../assets/img/logo.png';
import Button from '../Button/Button'

const Header = () => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={logoImage} alt="Hummos logo"/>
    <HeaderNavigation />
    <Button secondary>new item</Button>
  </header>
);

export default Header;
