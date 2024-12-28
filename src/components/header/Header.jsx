import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [activeLink, setActiveLink] = React.useState(1);
  const [auth, setAuth] = React.useState(true);

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <Link
                onClick={() => setActiveLink(1)}
                className={activeLink === 1 ? `${styles.active}` : null}
                to="/"
              >
                Женское
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveLink(2)}
                className={activeLink === 2 ? `${styles.active}` : null}
                to="/"
              >
                Мужское
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setActiveLink(3)}
                className={activeLink === 3 ? `${styles.active}` : null}
                to="/"
              >
                Детское
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className={styles.headerLogo}>
          <img src={logo} alt="Logo" />
        </Link>
        <nav className={styles.userNav}>
          <ul>
            <li>
              <Link to="/">
                <img src={user} alt="profile" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={heart} alt="favorite" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={cart} alt="cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {auth && (
        <div className={styles.headerBottom}>
          <ul>
            <li>
              <Link to="/">О нас</Link>
            </li>
            <li>
              <Link to="/">Новинки</Link>
            </li>
            <li>
              <Link to="/">Аксессуары</Link>
            </li>
            <li>
              <Link to="/">Одежда</Link>
            </li>
            <li>
              <Link to="/">Обувь</Link>
            </li>
            <li>
              <Link to="/">Бренды</Link>
            </li>
            <li>
              <Link className={styles.sale} to="/">
                Sale%
              </Link>
            </li>
          </ul>
          <div className={styles.headerSearch}>
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
