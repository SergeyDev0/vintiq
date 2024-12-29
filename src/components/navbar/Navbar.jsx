import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/navbar-home.svg";
import searchIcon from "../../assets/navbar-search.svg";
import favoriteIcon from "../../assets/navbar-favorite.svg";
import cartIcon from "../../assets/navbar-cart.svg";
import profileIcon from "../../assets/navbar-profile.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link className={`${styles.navbarItem} ${styles.active}`} to="/">
            <img src={homeIcon} alt="На главную" />
          </Link>
        </li>
        <li>
          <Link className={styles.navbarItem} to="/">
            <img src={searchIcon} alt="Поиск" />
          </Link>
        </li>
        <li>
          <Link className={styles.navbarItem} to="/">
            <img src={cartIcon} alt="Корзина" />
          </Link>
        </li>
        <li>
          <Link className={styles.navbarItem} to="/">
            <img src={favoriteIcon} alt="Избранное" />
          </Link>
        </li>
        <li>
          <Link className={styles.navbarItem} to="/">
            <img src={profileIcon} alt="Профиль" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
